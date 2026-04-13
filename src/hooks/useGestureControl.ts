/**
 * useGestureControl.ts
 * v6.0 手势控制核心 Hook
 *
 * 负责：
 * 1. 管理 gesture.worker 的生命周期
 * 2. rAF 循环把摄像头帧 → ImageBitmap → Worker
 * 3. 接收 Worker 返回的手势结果
 * 4. 在主线程运行手势状态机（G1-G8 识别逻辑 + 防抖/冷却）
 * 5. 将动作指令通过回调传出
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import type {
  GestureCommand,
  GestureFrameResult,
  GesturePhase,
  GestureState,
  WorkerInMessage,
  WorkerOutMessage,
} from '../types/gesture';
import { GESTURE_NAMES } from '../types/gesture';

// MediaPipe WASM 文件本地托管（public/mediapipe/wasm/）
const WASM_PATH = '/mediapipe/wasm';

// 手势识别推理频率（ms）
const GESTURE_INTERVAL_MS = 33; // ~30fps，降低操作延迟

// G3 食指选中：停留确认时长
const DWELL_DURATION_MS = 1000;
// G3 选中后冷却时间
const SELECT_COOLDOWN_MS = 3000;
// G4 切换朝代冷却（Thumb_Up/Down 边缘触发）
const DYNASTY_COOLDOWN_MS = 1000;
// G5/G6/G8 单次触发冷却
const SINGLE_TRIGGER_COOLDOWN_MS = 1500;
// G7 双手全屏：双手保持时长
const DUAL_HOLD_MS = 800;
// G3 食指静止半径（归一化）
const DWELL_RADIUS = 0.03;
// G2 手掌大小变化缩放灵敏度
const ZOOM_PALM_SENSITIVITY = 6;
// OK 手势（关闭详情页）冷却
const CLOSE_PANEL_COOLDOWN_MS = 2000;
// 握拳节点收缩/恢复冷却
const NODE_SHRINK_COOLDOWN_MS = 1500;

interface UseGestureControlOptions {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  onCommand: (cmd: GestureCommand) => void;
  /** 当前屏幕上的节点信息（用于 G3 食指点击节点判定），归一化坐标 */
  nodeScreenPositions?: Array<{ id: string; nx: number; ny: number }>;
}

interface UseGestureControlReturn {
  gestureState: GestureState;
  isInitialized: boolean;
  isLoading: boolean;
  initError: string | null;
  fps: number;
  enable: () => Promise<void>;
  disable: () => void;
}

const initialGestureState: GestureState = {
  phase: 'IDLE',
  activeGestureName: null,
  activeGestureRaw: null,
  confidence: 0,
  landmarks: [],
  fingerTipNorm: null,
  dwellProgress: 0,
  centroid: { left: null, right: null },
};

export function useGestureControl({
  videoRef,
  onCommand,
  nodeScreenPositions = [],
}: UseGestureControlOptions): UseGestureControlReturn {
  const workerRef = useRef<Worker | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastFrameTimeRef = useRef(0);
  const isEnabledRef = useRef(false);

  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [initError, setInitError] = useState<string | null>(null);
  const [fps, setFps] = useState(0);
  const [gestureState, setGestureState] = useState<GestureState>(initialGestureState);

  // 手势状态机内部变量（不需要触发重渲染，用 ref）
  const isProcessingRef = useRef(false);
  const dwellStartRef = useRef<number | null>(null);
  const dwellPositionRef = useRef<{ x: number; y: number } | null>(null);
  const selectCooldownRef = useRef(0);
  const dynastyCooldownRef = useRef(0);
  const singleTriggerCooldownRef = useRef(0);
  const dualHoldStartRef = useRef<number | null>(null);
  const fpsFramesRef = useRef<number[]>([]);
  const prevGestureNameRef = useRef<string | null>(null);
  const smoothedCentroidRef = useRef<{ x: number; y: number } | null>(null); // EMA平滑质心
  // G1/G2: 旋转 + 缩放
  const prevPalmSizeRef = useRef<number | null>(null);         // 上一帧手掌宽度（EMA后）
  const smoothedPalmSizeRef = useRef<number | null>(null);     // EMA平滑手掌宽度
  const zoomLockedRef = useRef(false);                         // 缩放模式是否已激活（滞后锁定）
  const zoomEnterCountRef = useRef(0);                         // 连续检测到四指帧数（≥4帧才激活）
  const zoomExitCountRef = useRef(0);                          // 连续未检测到四指帧数（≥8帧才退出）
  const closePanelCooldownRef = useRef(0);
  const nodeShrinkCooldownRef = useRef(0);
  const isFistHeldRef = useRef(false);                         // 握拳收缩是否处于持续状态

  const onCommandRef = useRef(onCommand);
  onCommandRef.current = onCommand;
  const nodePositionsRef = useRef(nodeScreenPositions);
  nodePositionsRef.current = nodeScreenPositions;

  const emitCommand = useCallback((type: GestureCommand['type'], payload?: unknown) => {
    onCommandRef.current({ type, payload, timestamp: Date.now() });
  }, []);

  /**
   * 计算单手21关键点的质心（归一化坐标）
   * index 0 = 手腕，1-20 = 手指关节
   */
  function calcCentroid(points: Array<{ x: number; y: number; z: number }>) {
    if (!points.length) return null;
    const sum = points.reduce((acc, p) => ({ x: acc.x + p.x, y: acc.y + p.y }), { x: 0, y: 0 });
    return { x: sum.x / points.length, y: sum.y / points.length };
  }

  /**
   * 核心手势状态机 - 处理每帧识别结果
   */
  const processGestureResult = useCallback(
    (result: GestureFrameResult) => {
      // 标记当前帧处理完成，允许发送下一帧
      isProcessingRef.current = false;
      const now = result.timestamp;

      // 更新 FPS
      fpsFramesRef.current.push(now);
      fpsFramesRef.current = fpsFramesRef.current.filter((t) => now - t < 1000);
      setFps(fpsFramesRef.current.length);

      // 提取手势信息
      const leftGesture = result.gestures.find((g) => g.handedness === 'Left');
      const rightGesture = result.gestures.find((g) => g.handedness === 'Right');
      const primaryGesture = rightGesture ?? leftGesture ?? null;

      // 提取关键点
      const leftLandmarks = result.landmarks.find((l) => l.handedness === 'Left');
      const rightLandmarks = result.landmarks.find((l) => l.handedness === 'Right');
      const primaryLandmarks = rightLandmarks ?? leftLandmarks ?? null;

      // 计算质心
      const leftCentroid = leftLandmarks ? calcCentroid(leftLandmarks.points) : null;
      const rightCentroid = rightLandmarks ? calcCentroid(rightLandmarks.points) : null;
      const primaryCentroid = rightCentroid ?? leftCentroid;

      // 食指尖（landmark 8）
      const fingerTip = primaryLandmarks?.points[8] ?? null;
      const fingerTipNorm = fingerTip ? { x: fingerTip.x, y: fingerTip.y } : null;

      // 更新显示状态
      let newPhase: GesturePhase = 'IDLE';
      let activeName = primaryGesture ? GESTURE_NAMES[primaryGesture.categoryName] ?? primaryGesture.categoryName : null;
      let activeRaw = primaryGesture?.categoryName ?? null;
      let dwellProgress = 0;

      // ── G7: 双手张开平举（进/退全屏）──────────────────────────────
      if (
        leftGesture?.categoryName === 'Open_Palm' &&
        rightGesture?.categoryName === 'Open_Palm' &&
        leftCentroid && rightCentroid
      ) {
        const dist = Math.abs(rightCentroid.x - leftCentroid.x);
        if (dist > 0.3) { // 双手间距 >30% 屏幕宽
          if (dualHoldStartRef.current === null) {
            dualHoldStartRef.current = now;
          } else {
            const held = now - dualHoldStartRef.current;
            if (held >= DUAL_HOLD_MS) {
              dualHoldStartRef.current = null;
              emitCommand('TOGGLE_FULLSCREEN');
            }
          }
          newPhase = 'DETECTING';
          activeName = '进/退全屏';
          activeRaw = 'BOTH_OPEN';
        }
      } else {
        dualHoldStartRef.current = null;
      }

      // ── G8: V 字手势（切换教程）──────────────────────────────────
      // 仅在手势从其他状态 → Victory 的"边缘"时触发，避免持续比出 V 字时反复 toggle
      if (
        primaryGesture?.categoryName === 'Victory' &&
        prevGestureNameRef.current !== 'Victory' &&
        now > singleTriggerCooldownRef.current
      ) {
        singleTriggerCooldownRef.current = now + SINGLE_TRIGGER_COOLDOWN_MS;
        emitCommand('TOGGLE_TUTORIAL');
        newPhase = 'TRIGGERED';
        activeName = '手势介绍';
      }

      // ── G6: ILoveYou（重置视角）──────────────────────────────────
      // Thumb_Up 已被 G4 占用，改用 ILoveYou（拇指+食指+小指伸出）
      if (primaryGesture?.categoryName === 'ILoveYou' && now > singleTriggerCooldownRef.current) {
        singleTriggerCooldownRef.current = now + SINGLE_TRIGGER_COOLDOWN_MS;
        emitCommand('RESET_VIEW');
        newPhase = 'TRIGGERED';
      }

      // ── G5: OK 手势（关闭诗人详情页）────────────────────────────
      // MediaPipe 没有专用 OK 类别，用关键点几何判定：
      // 拇指尖(4)与食指尖(8)距离 < 0.06（相触），中/无名/小指三指伸直（指尖 y < MCP y）
      {
        const isOK = (() => {
          if (!primaryLandmarks) return false;
          const pts = primaryLandmarks.points;
          const pinchDist = Math.hypot(pts[4].x - pts[8].x, pts[4].y - pts[8].y);
          if (pinchDist > 0.07) return false;
          // 中指/无名指/小指指尖 y 小于 MCP（掌指关节）y → 手指伸直（y轴向下）
          const midStraight   = pts[12].y < pts[9].y;
          const ringStraight  = pts[16].y < pts[13].y;
          const pinkyStraight = pts[20].y < pts[17].y;
          return midStraight && ringStraight && pinkyStraight;
        })();

        if (isOK && prevGestureNameRef.current !== 'OK_GESTURE' && now > closePanelCooldownRef.current) {
          closePanelCooldownRef.current = now + CLOSE_PANEL_COOLDOWN_MS;
          emitCommand('CLOSE_PANEL');
          newPhase = 'TRIGGERED';
          activeName = '关闭详情';
          activeRaw = 'OK_GESTURE';
        }
      }

      // ── G5b: 握拳（节点收缩） / 张开（节点恢复）─────────────────
      // 握拳时发 SHRINK_NODES（边缘触发一次），张开后发 RESTORE_NODES
      if (primaryGesture?.categoryName === 'Closed_Fist') {
        if (!isFistHeldRef.current && now > nodeShrinkCooldownRef.current) {
          isFistHeldRef.current = true;
          nodeShrinkCooldownRef.current = now + NODE_SHRINK_COOLDOWN_MS;
          emitCommand('SHRINK_NODES');
          newPhase = 'TRIGGERED';
          activeName = '收入手心';
        } else if (isFistHeldRef.current) {
          newPhase = 'TRIGGERED';
          activeName = '收入手心';
        }
      } else {
        if (isFistHeldRef.current) {
          // 从握拳 → 其他手势，发恢复指令
          isFistHeldRef.current = false;
          emitCommand('RESTORE_NODES');
        }
      }

      // ── G4: Thumb_Up → 下一朝代，Thumb_Down → 上一朝代 ──────────
      // 边缘触发：手势从非此类 → 此类时才触发，长持不会连射
      if (now > dynastyCooldownRef.current) {
        if (
          primaryGesture?.categoryName === 'Thumb_Up' &&
          prevGestureNameRef.current !== 'Thumb_Up'
        ) {
          dynastyCooldownRef.current = now + DYNASTY_COOLDOWN_MS;
          emitCommand('NEXT_DYNASTY');
          newPhase = 'TRIGGERED';
          activeName = '下一朝代';
        } else if (
          primaryGesture?.categoryName === 'Thumb_Down' &&
          prevGestureNameRef.current !== 'Thumb_Down'
        ) {
          dynastyCooldownRef.current = now + DYNASTY_COOLDOWN_MS;
          emitCommand('PREV_DYNASTY');
          newPhase = 'TRIGGERED';
          activeName = '上一朝代';
        }
      }

      // ── G3: 食指伸出（选中诗人节点）─────────────────────────────
      if (
        primaryGesture?.categoryName === 'Pointing_Up' &&
        fingerTipNorm &&
        now > selectCooldownRef.current
      ) {
        newPhase = 'DETECTING';

        if (dwellStartRef.current === null || !dwellPositionRef.current) {
          dwellStartRef.current = now;
          dwellPositionRef.current = { ...fingerTipNorm };
        } else {
          const moved = Math.hypot(
            fingerTipNorm.x - dwellPositionRef.current.x,
            fingerTipNorm.y - dwellPositionRef.current.y
          );
          if (moved > DWELL_RADIUS) {
            dwellStartRef.current = now;
            dwellPositionRef.current = { ...fingerTipNorm };
          } else {
            const elapsed = now - dwellStartRef.current;
            dwellProgress = Math.min(elapsed / DWELL_DURATION_MS, 1);

            if (elapsed >= DWELL_DURATION_MS) {
              // 触发选中：通过模拟点击让 ForceGraph3D 的射线检测处理节点查找
              // 摄像头是镜像的，屏幕 x = 1 - fingerTipNorm.x
              const screenX = (1 - fingerTipNorm.x) * window.innerWidth;
              const screenY = fingerTipNorm.y * window.innerHeight;
              emitCommand('GESTURE_TAP', { x: screenX, y: screenY });
              selectCooldownRef.current = now + SELECT_COOLDOWN_MS;
              dwellStartRef.current = null;
              dwellPositionRef.current = null;
              newPhase = 'TRIGGERED';
              activeName = '选中节点';
            } else {
              newPhase = 'HOLDING';
            }
          }
        }
      } else {
        dwellStartRef.current = null;
        dwellPositionRef.current = null;
      }

      // ── G2: 四根手指伸出 = 缩放；G1: 张开手掌 = 旋转 ───────────────
      // 滞后规则：连续 4 帧检测到四指才进入缩放锁定，连续 8 帧未检测到才退出。
      // 防止 Open_Palm ↔ 四指之间单帧抖动引起的反复横跳。
      {
        const isFourFingers = (() => {
          if (!primaryLandmarks) return false;
          const pts = primaryLandmarks.points;
          // 指尖 y < PIP 关节 y（指尖高于第二关节 = 手指伸直）
          const indexUp  = pts[8].y  < pts[6].y;
          const middleUp = pts[12].y < pts[10].y;
          const ringUp   = pts[16].y < pts[14].y;
          const pinkyUp  = pts[20].y < pts[18].y;
          // 拇指收拢：拇指尖(4) 到 食指MCP(5) 的距离 < 0.10（比之前更严格）
          // 同时拇指尖也要靠近手掌（拇指尖 x 不能远离食指MCP x 超过 0.10）
          const thumbDist = Math.hypot(pts[4].x - pts[5].x, pts[4].y - pts[5].y);
          const thumbFolded = thumbDist < 0.10;
          return indexUp && middleUp && ringUp && pinkyUp && thumbFolded;
        })();

        // 滞后计数器更新
        if (isFourFingers) {
          zoomEnterCountRef.current = Math.min(zoomEnterCountRef.current + 1, 10);
          zoomExitCountRef.current  = 0;
        } else {
          zoomExitCountRef.current  = Math.min(zoomExitCountRef.current + 1, 20);
          zoomEnterCountRef.current = 0;
        }
        // 进入缩放锁定：连续 4 帧四指
        if (zoomEnterCountRef.current >= 4) zoomLockedRef.current = true;
        // 退出缩放锁定：连续 8 帧非四指
        if (zoomExitCountRef.current  >= 8) {
          zoomLockedRef.current = false;
          prevPalmSizeRef.current = null;
          smoothedPalmSizeRef.current = null;
        }

        if (zoomLockedRef.current && primaryLandmarks) {
          // ── 缩放模式（锁定中）：手掌宽度代理深度 ──────────────────
          const palmSize = Math.hypot(
            primaryLandmarks.points[5].x - primaryLandmarks.points[17].x,
            primaryLandmarks.points[5].y - primaryLandmarks.points[17].y
          );
          if (prevPalmSizeRef.current !== null && palmSize > 0) {
            const smoothed = 0.4 * palmSize + 0.6 * (smoothedPalmSizeRef.current ?? palmSize);
            const delta    = smoothed - prevPalmSizeRef.current;
            prevPalmSizeRef.current    = smoothed;
            smoothedPalmSizeRef.current = smoothed;
            if (Math.abs(delta) > 0.0008) {
              const zoomFactor = Math.max(0.92, Math.min(1.08, 1 - delta * ZOOM_PALM_SENSITIVITY));
              emitCommand('ZOOM', zoomFactor);
              activeName = delta > 0 ? '放大' : '缩小';
            } else {
              activeName = '缩放模式';
            }
          } else {
            prevPalmSizeRef.current    = palmSize;
            smoothedPalmSizeRef.current = palmSize;
            activeName = '缩放模式';
          }
          newPhase  = 'DETECTING';
          activeRaw = 'ZOOM_PALM';
          smoothedCentroidRef.current = null; // 缩放时禁止旋转

        } else if (!zoomLockedRef.current && primaryGesture?.categoryName === 'Open_Palm' && primaryCentroid) {
          // ── 旋转模式：仅在非缩放锁定时生效 ──────────────────────
          prevPalmSizeRef.current    = null;
          smoothedPalmSizeRef.current = null;
          const prevSC = smoothedCentroidRef.current;
          const sc = prevSC
            ? { x: 0.45 * primaryCentroid.x + 0.55 * prevSC.x, y: 0.45 * primaryCentroid.y + 0.55 * prevSC.y }
            : { ...primaryCentroid };
          smoothedCentroidRef.current = sc;
          if (prevSC && newPhase === 'IDLE') {
            const dx = sc.x - prevSC.x;
            const dy = sc.y - prevSC.y;
            const azimuth = -dx * 3.5;
            const polar   =  dy * 2.5;
            if (Math.abs(azimuth) > 0.0003 || Math.abs(polar) > 0.0003) {
              emitCommand('ROTATE', { azimuth, polar });
              newPhase   = 'DETECTING';
              activeName = '旋转星图';
            }
          }

        } else if (!zoomLockedRef.current) {
          // 无相关手势：清空基准
          smoothedCentroidRef.current = null;
        }
      }


      // 无手势时重置 phase（若自定义几何手势已经设置了 activeRaw，跳过此重置）
      if (activeRaw === null && (!primaryGesture || primaryGesture.categoryName === 'None')) {
        newPhase = 'IDLE';
        activeName = null;
      }

      // 记录当前帧的手势名称，用于下一帧的边缘检测
      // activeRaw 优先：自定义几何手势（PINKY、OK_GESTURE）不依赖 MediaPipe 分类名，需用 activeRaw 保持边缘状态
      prevGestureNameRef.current = activeRaw ?? primaryGesture?.categoryName ?? null;

      setGestureState({
        phase: newPhase,
        activeGestureName: activeName,
        activeGestureRaw: activeRaw,
        confidence: primaryGesture?.score ?? 0,
        landmarks: result.landmarks,
        fingerTipNorm,
        dwellProgress,
        centroid: { left: leftCentroid, right: rightCentroid },
      });
    },
    [emitCommand]
  );

  /**
   * 启动摄像头 + Worker，开始识别循环
   */
  const enable = useCallback(async () => {
    if (isEnabledRef.current) return;
    setIsLoading(true);
    setInitError(null);
    isProcessingRef.current = false; // 重置状态

    try {
      // 创建 Worker（不传 type:'module'，由 webpack 自动处理 TS 文件打包）
      const worker = new Worker(new URL('../workers/gesture.worker.ts', import.meta.url));
      workerRef.current = worker;

      // 等待 Worker 就绪
      await new Promise<void>((resolve, reject) => {
        const timeout = setTimeout(() => reject(new Error('模型加载超时（90s）')), 90000);
        worker.onmessage = (event: MessageEvent<WorkerOutMessage>) => {
          if (event.data.type === 'READY') {
            clearTimeout(timeout);
            resolve();
          } else if (event.data.type === 'ERROR') {
            clearTimeout(timeout);
            reject(new Error(event.data.message));
          }
        };
        // 发送初始化指令
        const msg: WorkerInMessage = { type: 'INIT', wasmPath: WASM_PATH };
        worker.postMessage(msg);
      });

      // Worker 就绪后，监听识别结果
      worker.onmessage = (event: MessageEvent<WorkerOutMessage>) => {
        if (event.data.type === 'RESULT') {
          processGestureResult(event.data.data);
        }
      };

      setIsInitialized(true);
      isEnabledRef.current = true;

      // 启动帧捕获循环
      let lastSentTime = 0;
      const loop = async (now: number) => {
        if (!isEnabledRef.current) return;

        // 核心性能开关：如果 Worker 还在处理上一帧，或者没到间隔时间，则跳过
        if (!isProcessingRef.current && now - lastSentTime >= GESTURE_INTERVAL_MS) {
          const video = videoRef.current;
          if (video && video.readyState >= 2 && workerRef.current) {
            try {
              isProcessingRef.current = true; // 加锁
              // 捕获当前帧为低分辨率 ImageBitmap（零拷贝传递给 Worker）
              // 320×240 足够 MediaPipe 识别，传输量减半，延迟更低
              const bitmap = await createImageBitmap(video, {
                resizeWidth: 320,
                resizeHeight: 240,
                resizeQuality: 'low',
              });
              const msg: WorkerInMessage = {
                type: 'PROCESS',
                bitmap,
                timestamp: now,
              };
              workerRef.current.postMessage(msg, [bitmap]); // transfer 所有权
              lastSentTime = now;
            } catch {
              isProcessingRef.current = false; // 捕获异常解锁
              // 视频帧捕获失败（如标签页不可见），静默忽略
            }
          }
        }

        lastFrameTimeRef.current = now;
        rafRef.current = requestAnimationFrame(loop);
      };

      rafRef.current = requestAnimationFrame(loop);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      setInitError(msg);
    } finally {
      setIsLoading(false);
    }
  }, [processGestureResult, videoRef]);

  /**
   * 停止识别，释放资源
   */
  const disable = useCallback(() => {
    isEnabledRef.current = false;

    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }

    if (workerRef.current) {
      const msg: WorkerInMessage = { type: 'DESTROY' };
      workerRef.current.postMessage(msg);
      workerRef.current.terminate();
      workerRef.current = null;
    }

    setIsInitialized(false);
    setGestureState(initialGestureState);
    setFps(0);
  }, []);

  // 组件卸载时清理
  useEffect(() => {
    return () => {
      disable();
    };
  }, [disable]);

  return {
    gestureState,
    isInitialized,
    isLoading,
    initError,
    fps,
    enable,
    disable,
  };
}
