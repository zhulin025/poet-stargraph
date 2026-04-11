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
const DWELL_DURATION_MS = 1800;
// G3 选中后冷却时间
const SELECT_COOLDOWN_MS = 3000;
// G4 挥手切换朝代：冷却时间
const SWIPE_COOLDOWN_MS = 2000;
// G4 挥手速度阈值（归一化距离/ms）
const SWIPE_VELOCITY_THRESHOLD = 0.0008; // ~25% 屏幕 / 300ms
// G4 挥手判定窗口
const SWIPE_WINDOW_MS = 300;
// G5/G6 单次触发冷却
const SINGLE_TRIGGER_COOLDOWN_MS = 1500;
// G7 双手全屏：双手保持时长
const DUAL_HOLD_MS = 800;
// G3 食指静止半径（归一化）
const DWELL_RADIUS = 0.03;

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
  const swipeCooldownRef = useRef(0);
  const singleTriggerCooldownRef = useRef(0);
  const dualHoldStartRef = useRef<number | null>(null);
  const prevCentroidRef = useRef<{ x: number; y: number; t: number } | null>(null);
  const fpsFramesRef = useRef<number[]>([]);
  const prevGestureNameRef = useRef<string | null>(null);

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

      // ── G6: 大拇指朝上（重置视角）────────────────────────────────
      if (primaryGesture?.categoryName === 'Thumb_Up' && now > singleTriggerCooldownRef.current) {
        singleTriggerCooldownRef.current = now + SINGLE_TRIGGER_COOLDOWN_MS;
        emitCommand('RESET_VIEW');
        newPhase = 'TRIGGERED';
      }

      // ── G5: 握拳（开关自转）──────────────────────────────────────
      if (primaryGesture?.categoryName === 'Closed_Fist' && now > singleTriggerCooldownRef.current) {
        singleTriggerCooldownRef.current = now + SINGLE_TRIGGER_COOLDOWN_MS;
        emitCommand('TOGGLE_ROTATE');
        newPhase = 'TRIGGERED';
      }

      // ── G4: 挥手（切换朝代）──────────────────────────────────────
      if (
        primaryGesture?.categoryName === 'Open_Palm' &&
        primaryCentroid &&
        now > swipeCooldownRef.current
      ) {
        if (prevCentroidRef.current) {
          const dt = now - prevCentroidRef.current.t;
          if (dt <= SWIPE_WINDOW_MS && dt > 0) {
            const dx = primaryCentroid.x - prevCentroidRef.current.x;
            const velocity = Math.abs(dx) / dt;
            if (velocity >= SWIPE_VELOCITY_THRESHOLD) {
              swipeCooldownRef.current = now + SWIPE_COOLDOWN_MS;
              // 注意：摄像头画面是镜像的，右挥（用户视角）= x 减小
              if (dx < 0) {
                emitCommand('NEXT_DYNASTY');
              } else {
                emitCommand('PREV_DYNASTY');
              }
              newPhase = 'TRIGGERED';
              prevCentroidRef.current = null;
            }
          }
        }
        // 每次更新质心记录
        if (primaryCentroid) {
          prevCentroidRef.current = { ...primaryCentroid, t: now };
        }
      } else if (primaryGesture?.categoryName !== 'Open_Palm') {
        prevCentroidRef.current = null;
      }

      // ── G3: 食指伸出（选中诗人节点）─────────────────────────────
      if (
        primaryGesture?.categoryName === 'Pointing_Up' &&
        fingerTipNorm &&
        now > selectCooldownRef.current
      ) {
        newPhase = 'DETECTING';

        if (dwellStartRef.current === null || !dwellPositionRef.current) {
          // 开始新的停留计时
          dwellStartRef.current = now;
          dwellPositionRef.current = { ...fingerTipNorm };
        } else {
          // 检查是否移动超出静止半径
          const moved = Math.hypot(
            fingerTipNorm.x - dwellPositionRef.current.x,
            fingerTipNorm.y - dwellPositionRef.current.y
          );
          if (moved > DWELL_RADIUS) {
            // 重置计时
            dwellStartRef.current = now;
            dwellPositionRef.current = { ...fingerTipNorm };
          } else {
            const elapsed = now - dwellStartRef.current;
            dwellProgress = Math.min(elapsed / DWELL_DURATION_MS, 1);

            if (elapsed >= DWELL_DURATION_MS) {
              // 触发选中：查找最近的节点
              const nodes = nodePositionsRef.current;
              let closest: { id: string; dist: number } | null = null;
              for (const node of nodes) {
                const dist = Math.hypot(fingerTipNorm.x - node.nx, fingerTipNorm.y - node.ny);
                if (!closest || dist < closest.dist) {
                  closest = { id: node.id, dist };
                }
              }
              if (closest && closest.dist < 0.08) {
                emitCommand('SELECT_NODE', closest.id);
              }
              selectCooldownRef.current = now + SELECT_COOLDOWN_MS;
              dwellStartRef.current = null;
              dwellPositionRef.current = null;
              newPhase = 'TRIGGERED';
            } else {
              newPhase = 'HOLDING';
            }
          }
        }
      } else {
        dwellStartRef.current = null;
        dwellPositionRef.current = null;
      }

      // ── G1: 张开手掌 + 移动（旋转星图）─────────────────────────
      if (
        primaryGesture?.categoryName === 'Open_Palm' &&
        primaryCentroid &&
        newPhase === 'IDLE' // 未被其他手势占用
      ) {
        // 此时 prevCentroidRef 已被 G4 处理，这里读取位移作为旋转增量
        // 使用较小的系数避免过于灵敏
        // G1 和 G4 共享 prevCentroid，已在 G4 块更新
        // 发出旋转指令：将质心位移映射为旋转角度（弧度）
        if (prevCentroidRef.current && now - prevCentroidRef.current.t < 100) {
          const dx = primaryCentroid.x - prevCentroidRef.current.x;
          const dy = primaryCentroid.y - prevCentroidRef.current.y;
          const azimuth = -dx * Math.PI * 2; // 水平 → Y轴旋转
          const polar = dy * Math.PI;         // 垂直 → X轴旋转
          if (Math.abs(azimuth) > 0.002 || Math.abs(polar) > 0.002) {
            emitCommand('ROTATE', { azimuth, polar });
            newPhase = 'DETECTING';
            activeName = '旋转星图';
          }
        }
      }

      // ── G2: 双手捏合/展开（缩放）────────────────────────────────
      if (leftLandmarks && rightLandmarks) {
        const leftThumb = leftLandmarks.points[4];
        const leftIndex = leftLandmarks.points[8];
        const rightThumb = rightLandmarks.points[4];
        const rightIndex = rightLandmarks.points[8];

        // 用双手食指尖距离作为缩放基准
        const dist = Math.hypot(
          rightIndex.x - leftIndex.x,
          rightIndex.y - leftIndex.y
        );

        // 同时检查两手捏合（拇指-食指距离）判断是否在"捏"
        const leftPinch = Math.hypot(leftThumb.x - leftIndex.x, leftThumb.y - leftIndex.y);
        const rightPinch = Math.hypot(rightThumb.x - rightIndex.x, rightThumb.y - rightIndex.y);

        // 仅当两手都在捏合状态时才触发缩放
        if (leftPinch < 0.08 && rightPinch < 0.08) {
          // 用距离映射为缩放倍率（中心距离作为基准）
          // dist 约在 0.1-0.6 之间，映射到 0.8-1.2 的缩放倍率
          const zoomFactor = 1 + (dist - 0.3) * 0.5;
          if (Math.abs(zoomFactor - 1) > 0.005) {
            emitCommand('ZOOM', zoomFactor);
            newPhase = 'DETECTING';
            activeName = dist > 0.3 ? '放大' : '缩小';
            activeRaw = 'PINCH';
          }
        }
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
