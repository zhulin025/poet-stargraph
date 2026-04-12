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
// G2 进入缩放模式所需静止时长（ms）
const ZOOM_STILL_MS = 500;
// G2 退出缩放模式所需静止时长（ms）——与进入对称
const ZOOM_EXIT_STILL_MS = 500;
// G2 退出缩放后不允许立刻重入 ZOOM 的冷却时长（ms）
const ZOOM_REENTER_COOLDOWN_MS = 1200;
// G1/G2 模式判定：从入场位置起的累计 XY 位移超过此值 → 旋转模式
const ROTATE_ENTER_DRIFT = 0.04;
// G2 缩放/静止判定阈值（EMA 平滑后）：低于此值认为"没在动"
const ZOOM_STILL_DEPTH = 0.0005; // 深度（手掌大小 delta）
const ZOOM_STILL_XY    = 0.005;  // 横向（质心 driftXY）
// G2 手掌大小变化缩放灵敏度
const ZOOM_PALM_SENSITIVITY = 6;
// G5 握拳关闭详情页冷却
const CLOSE_PANEL_COOLDOWN_MS = 2000;

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
  // G1+G2 手掌双模式状态机
  const openPalmModeRef = useRef<'IDLE' | 'ROTATE' | 'ZOOM'>('IDLE');
  const openPalmStillStartRef = useRef<number | null>(null);   // 静止倒计时开始时间
  const openPalmStillCentroidRef = useRef<{ x: number; y: number } | null>(null); // 倒计时起始质心
  const prevPalmSizeRef = useRef<number | null>(null);         // 上一帧手掌宽度（EMA后）
  const smoothedPalmSizeRef = useRef<number | null>(null);     // EMA平滑手掌宽度
  const zoomExitStillStartRef = useRef<number | null>(null);   // ZOOM 退出：静止计时起点
  const zoomReEnterCooldownRef = useRef(0);                    // ZOOM 退出后禁止重入的截止时间
  const closePanelCooldownRef = useRef(0);

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

      // ── G5: 握拳（关闭诗人详情页）────────────────────────────────
      // 边缘触发：手势从非握拳 → 握拳时才触发，持续握拳不会连射
      if (
        primaryGesture?.categoryName === 'Closed_Fist' &&
        prevGestureNameRef.current !== 'Closed_Fist' &&
        now > closePanelCooldownRef.current
      ) {
        closePanelCooldownRef.current = now + CLOSE_PANEL_COOLDOWN_MS;
        emitCommand('CLOSE_PANEL');
        newPhase = 'TRIGGERED';
        activeName = '关闭详情';
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

      // ── G1 + G2: 张开手掌（旋转 / 缩放 双模式）──────────────────
      // 状态机：
      //   IDLE  ─ 快速横移 (>ROTATE_TRIGGER_DRIFT) → ROTATE（立即旋转）
      //         ─ 静止 ZOOM_STILL_MS             → ZOOM（手掌前后缩放）
      //   ROTATE ─ 手掌消失                       → IDLE
      //   ZOOM   ─ 横移过大 (>ZOOM_EXIT_DRIFT)    → ROTATE
      //          ─ 手掌消失                       → IDLE
      if (primaryGesture?.categoryName === 'Open_Palm' && primaryCentroid) {
        // EMA 平滑质心（α=0.45，继承上一帧平滑值）
        const prevSC = smoothedCentroidRef.current;
        const sc = prevSC
          ? { x: 0.45 * primaryCentroid.x + 0.55 * prevSC.x, y: 0.45 * primaryCentroid.y + 0.55 * prevSC.y }
          : { ...primaryCentroid };
        smoothedCentroidRef.current = sc;

        // 当帧质心漂移量
        const driftXY = prevSC ? Math.hypot(sc.x - prevSC.x, sc.y - prevSC.y) : 0;

        // 手掌宽度代理深度：pts[5](食指根) → pts[17](小指根) 的距离
        // 手越靠近摄像头，该值越大
        const palmSize = primaryLandmarks
          ? Math.hypot(
              primaryLandmarks.points[5].x - primaryLandmarks.points[17].x,
              primaryLandmarks.points[5].y - primaryLandmarks.points[17].y
            )
          : 0;

        const palmMode = openPalmModeRef.current;

        if (palmMode === 'IDLE') {
          // 首帧：记录入场位置，启动计时
          if (openPalmStillStartRef.current === null) {
            openPalmStillStartRef.current = now;
            openPalmStillCentroidRef.current = { ...sc };
          } else {
            // 用累计位移（非单帧 delta）判断是否在横向移动，避免 EMA 热启动噪声误触发
            const totalDrift = openPalmStillCentroidRef.current
              ? Math.hypot(sc.x - openPalmStillCentroidRef.current.x, sc.y - openPalmStillCentroidRef.current.y)
              : 0;

            if (totalDrift > ROTATE_ENTER_DRIFT) {
              // 累计位移够大 → 进入旋转模式
              openPalmModeRef.current = 'ROTATE';
              openPalmStillStartRef.current = null;
              openPalmStillCentroidRef.current = null;
            } else if (now - openPalmStillStartRef.current >= ZOOM_STILL_MS) {
              // 静止够 0.5s，且不在退出缩放的冷却期内 → 进入缩放模式
              if (now > zoomReEnterCooldownRef.current) {
                openPalmModeRef.current = 'ZOOM';
                prevPalmSizeRef.current = palmSize;
                smoothedPalmSizeRef.current = palmSize;
                zoomExitStillStartRef.current = null;
                openPalmStillStartRef.current = null;
                openPalmStillCentroidRef.current = null;
              } else {
                // 冷却期内：重置计时，等用户下次再静止 0.5s
                openPalmStillStartRef.current = now;
                openPalmStillCentroidRef.current = { ...sc };
              }
            }
          }
          if (newPhase === 'IDLE') {
            newPhase = 'DETECTING';
            activeName = '张开手掌';
          }

        } else if (palmMode === 'ROTATE') {
          // 旋转模式：正常 G1 增量旋转（仅在无其他手势触发时生效）
          if (prevSC && newPhase === 'IDLE') {
            const dx = sc.x - prevSC.x;
            const dy = sc.y - prevSC.y;
            const azimuth = -dx * 3.5;
            const polar   =  dy * 2.5;
            if (Math.abs(azimuth) > 0.0003 || Math.abs(polar) > 0.0003) {
              emitCommand('ROTATE', { azimuth, polar });
              newPhase = 'DETECTING';
              activeName = '旋转星图';
            }
          }

        } else if (palmMode === 'ZOOM') {
          // 缩放模式：手掌大小变化 → zoom factor
          // 退出条件：手掌静止（深度 + XY 均不动）持续 ZOOM_EXIT_STILL_MS → 回到 IDLE
          if (prevPalmSizeRef.current !== null && palmSize > 0) {
            const smoothed = 0.4 * palmSize + 0.6 * (smoothedPalmSizeRef.current ?? palmSize);
            const delta = smoothed - prevPalmSizeRef.current;
            prevPalmSizeRef.current = smoothed;
            smoothedPalmSizeRef.current = smoothed;

            // 判断"手掌是否在动"（深度 or XY 任一超阈值 = 在动）
            const isMoving = Math.abs(delta) > ZOOM_STILL_DEPTH || driftXY > ZOOM_STILL_XY;

            if (isMoving) {
              // 手在动 → 重置静止计时
              zoomExitStillStartRef.current = null;

              if (Math.abs(delta) > 0.0008) {
                // 有明显深度变化 → 发缩放指令
                const rawFactor = 1 - delta * ZOOM_PALM_SENSITIVITY;
                const zoomFactor = Math.max(0.92, Math.min(1.08, rawFactor));
                emitCommand('ZOOM', zoomFactor);
                newPhase = 'DETECTING';
                activeName = delta > 0 ? '放大' : '缩小';
                activeRaw = 'ZOOM_PALM';
              } else {
                newPhase = 'DETECTING';
                activeName = '缩放模式';
                activeRaw = 'ZOOM_PALM';
              }
            } else {
              // 手掌静止 → 开始/继续退出计时
              if (zoomExitStillStartRef.current === null) {
                zoomExitStillStartRef.current = now;
              } else if (now - zoomExitStillStartRef.current >= ZOOM_EXIT_STILL_MS) {
                // 静止满 0.5s → 退出缩放，回 IDLE，并设冷却防立刻重入
                openPalmModeRef.current = 'IDLE';
                prevPalmSizeRef.current = null;
                smoothedPalmSizeRef.current = null;
                zoomExitStillStartRef.current = null;
                zoomReEnterCooldownRef.current = now + ZOOM_REENTER_COOLDOWN_MS;
                openPalmStillStartRef.current = null;
                openPalmStillCentroidRef.current = null;
              }
              newPhase = 'DETECTING';
              activeName = '缩放模式';
              activeRaw = 'ZOOM_PALM';
            }
          }
        }
      } else {
        // 手掌消失 → 全部重置（冷却期保留，防止立刻重入 ZOOM）
        openPalmModeRef.current = 'IDLE';
        openPalmStillStartRef.current = null;
        openPalmStillCentroidRef.current = null;
        prevPalmSizeRef.current = null;
        smoothedPalmSizeRef.current = null;
        smoothedCentroidRef.current = null;
        zoomExitStillStartRef.current = null;
      }


      // 无手势时重置 phase
      if (!primaryGesture || primaryGesture.categoryName === 'None') {
        newPhase = 'IDLE';
        activeName = null;
        activeRaw = null;
      }

      // 记录当前帧的手势名称，用于下一帧的边缘检测
      prevGestureNameRef.current = primaryGesture?.categoryName ?? null;

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
        const timeout = setTimeout(() => reject(new Error('模型加载超时（30s）')), 30000);
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
