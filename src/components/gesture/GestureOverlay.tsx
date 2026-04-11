'use client';
/**
 * GestureOverlay.tsx  v6.1
 * 只显示5个指尖发光点，无骨架连线。
 * 全屏透明 canvas，pointer-events:none。
 */

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { GestureState } from '../../types/gesture';

// MediaPipe 手部关键点索引：5个指尖
const FINGERTIP_INDICES = [4, 8, 12, 16, 20]; // 拇指、食指、中指、无名指、小指指尖

// 每个指尖的颜色
const FINGERTIP_COLORS = [
  '#FF3366', // 拇指 — 粉红
  '#FFE800', // 食指 — 黄色（最常用，G3 选中）
  '#4ECDC4', // 中指 — 青绿
  '#A78BFA', // 无名指 — 紫
  '#60A5FA', // 小指 — 蓝
];

interface GestureOverlayProps {
  gestureState: GestureState;
  isActive: boolean;
}

export function GestureOverlay({ gestureState, isActive }: GestureOverlayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // 用于驱动脉冲动画的时间基
  const animFrameRef = useRef<number | null>(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function draw(ts: number) {
      timeRef.current = ts;
      const canvas = canvasRef.current;
      if (!canvas || !ctx) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (!isActive || gestureState.landmarks.length === 0) {
        animFrameRef.current = requestAnimationFrame(draw);
        return;
      }

      const w = canvas.width;
      const h = canvas.height;
      const pulse = (Math.sin(ts * 0.004) + 1) / 2; // 0-1 脉冲

      gestureState.landmarks.forEach((hand) => {
        const pts = hand.points;

        FINGERTIP_INDICES.forEach((landmarkIdx, colorIdx) => {
          const pt = pts[landmarkIdx];
          if (!pt) return;

          // MediaPipe 坐标已镜像（摄像头预览镜像，坐标需翻转X）
          const x = (1 - pt.x) * w;
          const y = pt.y * h;
          const color = FINGERTIP_COLORS[colorIdx];
          const isIndexFinger = landmarkIdx === 8;

          // ── 外圈光晕（随时间脉冲）──────────────────────────
          const glowRadius = isIndexFinger
            ? 22 + pulse * 10  // 食指更大
            : 16 + pulse * 6;
          const glow = ctx.createRadialGradient(x, y, 0, x, y, glowRadius);
          glow.addColorStop(0, color + 'aa');
          glow.addColorStop(1, color + '00');
          ctx.beginPath();
          ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();

          // ── G3 倒计时进度环（仅食指，phase=HOLDING 时）─────
          if (isIndexFinger && gestureState.phase === 'HOLDING' && gestureState.dwellProgress > 0) {
            const ringR = 26;
            ctx.beginPath();
            ctx.arc(x, y, ringR, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * gestureState.dwellProgress);
            ctx.strokeStyle = '#FFE800';
            ctx.lineWidth = 3;
            ctx.lineCap = 'round';
            ctx.stroke();
          }

          // ── 实心指尖点 ────────────────────────────────────
          const dotR = isIndexFinger ? 7 : 5;
          ctx.beginPath();
          ctx.arc(x, y, dotR, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.fill();

          // 白色描边让点在任何背景下都清晰可见
          ctx.beginPath();
          ctx.arc(x, y, dotR, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(255,255,255,0.85)';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        });
      });

      animFrameRef.current = requestAnimationFrame(draw);
    }

    animFrameRef.current = requestAnimationFrame(draw);
    return () => {
      if (animFrameRef.current !== null) cancelAnimationFrame(animFrameRef.current);
    };
  }, [gestureState, isActive]);

  // 响应式 resize
  useEffect(() => {
    const onResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // 操作提示气泡（跟随主手质心）
  const primaryCentroid = gestureState.centroid.right ?? gestureState.centroid.left;
  const showBubble =
    isActive &&
    gestureState.activeGestureName &&
    gestureState.phase !== 'IDLE' &&
    primaryCentroid !== null;

  const bubbleX = primaryCentroid ? Math.min(Math.max((1 - primaryCentroid.x) * 100, 5), 85) : 50;
  const bubbleY = primaryCentroid ? Math.min(Math.max(primaryCentroid.y * 100 - 8, 5), 80) : 50;

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 210,
          pointerEvents: 'none',
          width: '100vw',
          height: '100vh',
        }}
      />

      {/* 操作提示气泡 */}
      <AnimatePresence>
        {showBubble && (
          <motion.div
            key={gestureState.activeGestureRaw ?? 'bubble'}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.12 }}
            style={{
              position: 'fixed',
              left: `${bubbleX}%`,
              top: `${bubbleY}%`,
              transform: 'translateX(-50%)',
              zIndex: 211,
              pointerEvents: 'none',
              background: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '0.6rem',
              padding: '0.25rem 0.65rem',
              fontSize: '0.72rem',
              fontWeight: 700,
              color: '#fff',
              whiteSpace: 'nowrap',
              textShadow: '0 1px 4px rgba(0,0,0,0.5)',
            }}
          >
            {gestureState.activeGestureName}
            {gestureState.phase === 'HOLDING' && gestureState.dwellProgress > 0 && (
              <span style={{ color: '#FFE800', marginLeft: '0.4rem' }}>
                {Math.round(gestureState.dwellProgress * 100)}%
              </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
