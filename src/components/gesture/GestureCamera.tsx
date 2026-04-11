'use client';
/**
 * GestureCamera.tsx
 * 右下角摄像头小窗组件
 *
 * 显示摄像头实时画面，可最小化为状态指示灯。
 * 风格沿用 Dopamine Clay 设计语言。
 */

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, CameraOff, ChevronDown, ChevronUp } from 'lucide-react';

interface GestureCameraProps {
  isActive: boolean;
  isLoading: boolean;
  initError: string | null;
  fps: number;
  stream: MediaStream | null;
  videoRef: React.RefObject<HTMLVideoElement | null>;
}

export function GestureCamera({
  isActive,
  isLoading,
  initError,
  fps,
  stream,
  videoRef,
}: GestureCameraProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // 绑定摄像头流到 video 元素
  useEffect(() => {
    const video = videoRef.current;
    if (video && stream) {
      video.srcObject = stream;
      video.play().catch(() => {});
    }
    return () => {
      if (video) {
        video.srcObject = null;
      }
    };
  }, [stream, videoRef]);

  const statusColor = initError
    ? '#ef4444'
    : isLoading
    ? '#f59e0b'
    : isActive
    ? '#22c55e'
    : '#6b7280';

  const statusText = initError
    ? '加载失败'
    : isLoading
    ? '加载中…'
    : isActive
    ? `识别中 ${fps}fps`
    : '待机';

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 220,
      }}
    >
      <AnimatePresence mode="wait">
        {isCollapsed ? (
          /* 最小化状态：仅显示圆形指示灯 */
          <motion.button
            key="collapsed"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={() => setIsCollapsed(false)}
            title={`手势模式 - ${statusText}`}
            style={{
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '50%',
              border: '3px solid #1E1B4B',
              boxShadow: '3px 3px 0 #1E1B4B',
              background: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <span
              style={{
                width: '0.75rem',
                height: '0.75rem',
                borderRadius: '50%',
                background: statusColor,
                boxShadow: isActive ? `0 0 6px ${statusColor}` : 'none',
                animation: isActive ? 'pulse 2s infinite' : 'none',
              }}
            />
          </motion.button>
        ) : (
          /* 展开状态：摄像头小窗 */
          <motion.div
            key="expanded"
            initial={{ scale: 0.9, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 10 }}
            style={{
              width: 180,
              background: '#fff',
              border: '3px solid #1E1B4B',
              borderRadius: '1rem',
              boxShadow: '4px 4px 0 #1E1B4B',
              overflow: 'hidden',
            }}
          >
            {/* 标题栏 */}
            <div
              style={{
                background: '#FF3366',
                padding: '0.35rem 0.6rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span
                  style={{
                    width: '0.5rem',
                    height: '0.5rem',
                    borderRadius: '50%',
                    background: statusColor,
                    boxShadow: isActive ? `0 0 4px ${statusColor}` : 'none',
                  }}
                />
                <span
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    color: '#fff',
                    fontFamily: '"Inter", sans-serif',
                    letterSpacing: '0.03em',
                  }}
                >
                  手势模式 {isActive ? 'ON' : isLoading ? '…' : 'OFF'}
                </span>
              </div>
              <button
                onClick={() => setIsCollapsed(true)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#fff',
                  display: 'flex',
                  padding: 0,
                }}
              >
                <ChevronDown size={14} />
              </button>
            </div>

            {/* 摄像头画面区域 */}
            <div
              style={{
                position: 'relative',
                height: 120,
                background: '#0f0f1a',
                overflow: 'hidden',
              }}
            >
              {/* 隐藏的 video 元素（也用于显示预览） */}
              <video
                ref={videoRef as React.RefObject<HTMLVideoElement>}
                autoPlay
                playsInline
                muted
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transform: 'scaleX(-1)', // 镜像翻转更自然
                  display: isActive && !isLoading ? 'block' : 'none',
                }}
              />

              {/* 加载/错误/待机状态占位 */}
              {(!isActive || isLoading) && (
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                  }}
                >
                  {initError ? (
                    <>
                      <CameraOff size={20} color="#ef4444" />
                      <span style={{ fontSize: '0.6rem', color: '#ef4444', textAlign: 'center', padding: '0 0.5rem' }}>
                        {initError.slice(0, 40)}
                      </span>
                    </>
                  ) : isLoading ? (
                    <>
                      <Camera size={20} color="#f59e0b" />
                      <span style={{ fontSize: '0.6rem', color: '#f59e0b' }}>模型加载中…</span>
                      <div
                        style={{
                          width: '60%',
                          height: 3,
                          background: '#333',
                          borderRadius: 2,
                          overflow: 'hidden',
                        }}
                      >
                        <motion.div
                          style={{ height: '100%', background: '#f59e0b', borderRadius: 2 }}
                          animate={{ x: ['-100%', '200%'] }}
                          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <Camera size={20} color="#555" />
                      <span style={{ fontSize: '0.6rem', color: '#555' }}>摄像头待机</span>
                    </>
                  )}
                </div>
              )}

              {/* FPS 角标 */}
              {isActive && fps > 0 && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: 4,
                    right: 6,
                    background: 'rgba(0,0,0,0.6)',
                    borderRadius: 4,
                    padding: '1px 5px',
                    fontSize: '0.55rem',
                    color: fps >= 12 ? '#22c55e' : '#f59e0b',
                    fontFamily: 'monospace',
                    fontWeight: 700,
                  }}
                >
                  {fps}fps
                </div>
              )}
            </div>

            {/* 底部状态栏 */}
            <div
              style={{
                padding: '0.3rem 0.6rem',
                background: '#f8f9ff',
                fontSize: '0.6rem',
                color: '#555',
                fontFamily: '"Inter", sans-serif',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
              }}
            >
              <span
                style={{
                  width: '0.4rem',
                  height: '0.4rem',
                  borderRadius: '50%',
                  background: statusColor,
                  flexShrink: 0,
                }}
              />
              {statusText}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
