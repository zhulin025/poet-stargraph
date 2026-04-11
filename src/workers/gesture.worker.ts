/**
 * gesture.worker.ts
 * v6.0 手势识别 Web Worker
 *
 * 在独立线程中运行 MediaPipe GestureRecognizer，
 * 接收主线程传来的 ImageBitmap，返回手势识别结果。
 * 通过 transferable 零拷贝传输，不阻塞主线程渲染。
 */

import type { GestureFrameResult, WorkerInMessage, WorkerOutMessage } from '../types/gesture';

// Worker 内部状态
let recognizer: import('@mediapipe/tasks-vision').GestureRecognizer | null = null;
let isReady = false;

/**
 * 初始化 MediaPipe GestureRecognizer
 * 模型通过 CDN 懒加载，约 3.7MB，只在用户开启手势模式时触发
 */
async function initRecognizer(wasmPath: string) {
  try {
    const { GestureRecognizer, FilesetResolver } = await import('@mediapipe/tasks-vision');

    const vision = await FilesetResolver.forVisionTasks(wasmPath);

    recognizer = await GestureRecognizer.createFromOptions(vision, {
      baseOptions: {
        // 使用本地托管的模型文件（已下载到 public/mediapipe/）
        modelAssetPath: '/mediapipe/gesture_recognizer.task',
        delegate: 'GPU', // 优先使用 GPU 加速，显著提升推理速度
      },
      runningMode: 'VIDEO',   // 视频流模式，每帧连续识别
      numHands: 2,            // 支持双手（G2 缩放、G7 双手全屏需要）
      minHandDetectionConfidence: 0.6,
      minHandPresenceConfidence: 0.6,
      minTrackingConfidence: 0.5,
    });

    isReady = true;
    const msg: WorkerOutMessage = { type: 'READY' };
    self.postMessage(msg);
  } catch (err) {
    const msg: WorkerOutMessage = {
      type: 'ERROR',
      message: err instanceof Error ? err.message : String(err),
    };
    self.postMessage(msg);
  }
}

/**
 * 处理单帧图像，返回识别结果
 */
function processFrame(bitmap: ImageBitmap, timestamp: number) {
  if (!recognizer || !isReady) {
    bitmap.close(); // 关键：防止内存泄漏
    return;
  }

  try {
    const results = recognizer.recognizeForVideo(bitmap, timestamp);
    bitmap.close(); // 推理完毕立即释放，防每帧 ~100KB 泄漏

    const gestureFrameResult: GestureFrameResult = {
      gestures: [],
      landmarks: [],
      timestamp,
    };

    // 解析手势分类结果
    if (results.gestures && results.gestures.length > 0) {
      results.gestures.forEach((handGestures, handIndex) => {
        if (handGestures.length > 0) {
          const topGesture = handGestures[0];
          const handedness = results.handedness[handIndex]?.[0]?.categoryName as 'Left' | 'Right' ?? 'Right';
          gestureFrameResult.gestures.push({
            categoryName: topGesture.categoryName,
            score: topGesture.score,
            handedness,
          });
        }
      });
    }

    // 解析21个关键点坐标
    if (results.landmarks && results.landmarks.length > 0) {
      results.landmarks.forEach((handLandmarks, handIndex) => {
        const handedness = results.handedness[handIndex]?.[0]?.categoryName as 'Left' | 'Right' ?? 'Right';
        gestureFrameResult.landmarks.push({
          handedness,
          points: handLandmarks.map((lm) => ({
            x: lm.x,
            y: lm.y,
            z: lm.z,
          })),
        });
      });
    }

    const msg: WorkerOutMessage = { type: 'RESULT', data: gestureFrameResult };
    self.postMessage(msg);
  } catch (err) {
    bitmap.close();
    const msg: WorkerOutMessage = {
      type: 'ERROR',
      message: err instanceof Error ? err.message : String(err),
    };
    self.postMessage(msg);
  }
}

// 监听主线程消息
self.addEventListener('message', (event: MessageEvent<WorkerInMessage>) => {
  const msg = event.data;

  switch (msg.type) {
    case 'INIT':
      initRecognizer(msg.wasmPath);
      break;

    case 'PROCESS':
      processFrame(msg.bitmap, msg.timestamp);
      break;

    case 'DESTROY':
      if (recognizer) {
        recognizer.close();
        recognizer = null;
      }
      isReady = false;
      break;

    default:
      break;
  }
});
