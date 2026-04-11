// v6.0 手势控制系统类型定义

/** 手势指令类型 */
export type GestureCommandType =
  | 'ROTATE'           // payload: { azimuth: number; polar: number }
  | 'ZOOM'             // payload: number (multiplier, >1 放大 <1 缩小)
  | 'SELECT_NODE'      // payload: string (node id)
  | 'NEXT_DYNASTY'     // 切换到下一个朝代
  | 'PREV_DYNASTY'     // 切换到上一个朝代
  | 'RESET_VIEW'       // 重置视角
  | 'TOGGLE_ROTATE'    // 开关自转
  | 'TOGGLE_FULLSCREEN'// 进/退全屏
  | 'TOGGLE_TUTORIAL'; // 显示/隐藏手势教程

export interface GestureCommand {
  type: GestureCommandType;
  payload?: unknown;
  timestamp: number;
}

/** 手势状态机阶段 */
export type GesturePhase =
  | 'IDLE'       // 无手势或未激活
  | 'DETECTING'  // 检测到手势但未达阈值
  | 'HOLDING'    // G3 食指停留倒计时中
  | 'TRIGGERED'  // 手势已触发
  | 'COOLING';   // 冷却期（防连续误触）

/** 单帧手势识别结果（从 Worker 返回） */
export interface GestureFrameResult {
  gestures: Array<{
    categoryName: string; // e.g. "Open_Palm", "Closed_Fist"
    score: number;        // 0-1 置信度
    handedness: 'Left' | 'Right';
  }>;
  landmarks: Array<{
    handedness: 'Left' | 'Right';
    // 21个关键点，归一化坐标 (0-1)
    points: Array<{ x: number; y: number; z: number }>;
  }>;
  timestamp: number;
}

/** 主线程侧的手势运行时状态 */
export interface GestureState {
  phase: GesturePhase;
  activeGestureName: string | null;   // 当前识别的手势名称（中文展示用）
  activeGestureRaw: string | null;    // 原始手势分类名
  confidence: number;                 // 0-1
  landmarks: GestureFrameResult['landmarks'];
  /** 食指尖的屏幕归一化坐标（G3 使用），null 表示不可用 */
  fingerTipNorm: { x: number; y: number } | null;
  /** G3 倒计时进度 0-1 */
  dwellProgress: number;
  /** 手部质心（用于手势旋转/挥手检测），左手/右手各一个 */
  centroid: {
    left: { x: number; y: number } | null;
    right: { x: number; y: number } | null;
  };
}

/** Worker 向主线程发送的消息 */
export type WorkerOutMessage =
  | { type: 'READY' }
  | { type: 'RESULT'; data: GestureFrameResult }
  | { type: 'ERROR'; message: string };

/** 主线程向 Worker 发送的消息 */
export type WorkerInMessage =
  | { type: 'INIT'; wasmPath: string }
  | { type: 'PROCESS'; bitmap: ImageBitmap; timestamp: number }
  | { type: 'DESTROY' };

/** 手势映射字典（中文名称） */
export const GESTURE_NAMES: Record<string, string> = {
  Open_Palm:    '张开手掌',
  Closed_Fist:  '握拳',
  Pointing_Up:  '食指伸出',
  Thumb_Up:     '大拇指朝上',
  Victory:      'V字手势',
  ILoveYou:     '爱心手势',
  Thumb_Down:   '大拇指朝下',
  None:         '无',
};

/** 手势操作说明（用于教程展示） */
export const GESTURE_GUIDE: Array<{
  id: string;
  gesture: string;
  rawName: string;
  action: string;
  tip: string;
}> = [
  {
    id: 'G1',
    gesture: '🖐️',
    rawName: 'Open_Palm',
    action: '旋转星图',
    tip: '张开手掌，水平/垂直移动来旋转星系',
  },
  {
    id: 'G2',
    gesture: '🤌',
    rawName: 'PINCH',
    action: '缩放星图',
    tip: '双手同时伸出，靠近缩小、分开放大',
  },
  {
    id: 'G3',
    gesture: '☝️',
    rawName: 'Pointing_Up',
    action: '选中诗人',
    tip: '食指指向诗人节点，保持静止 1.8 秒选中',
  },
  {
    id: 'G4',
    gesture: '👋',
    rawName: 'SWIPE',
    action: '切换朝代',
    tip: '快速向右挥手 → 下一朝代，向左 → 上一朝代',
  },
  {
    id: 'G5',
    gesture: '✊',
    rawName: 'Closed_Fist',
    action: '开关自转',
    tip: '握拳切换星图自动旋转的开/关',
  },
  {
    id: 'G6',
    gesture: '👍',
    rawName: 'Thumb_Up',
    action: '重置视角',
    tip: '竖起大拇指，星图将平滑回到初始视角',
  },
  {
    id: 'G7',
    gesture: '🙌',
    rawName: 'BOTH_OPEN',
    action: '进/退全屏',
    tip: '双手同时张开，保持 0.8 秒切换全屏模式',
  },
  {
    id: 'G8',
    gesture: '✌️',
    rawName: 'Victory',
    action: '显示/隐藏教程',
    tip: '比 V 字手势打开或关闭这份手势指南',
  },
];
