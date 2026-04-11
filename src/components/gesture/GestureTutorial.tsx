'use client';
/**
 * GestureTutorial.tsx
 * 手势引导教程抽屉
 *
 * 由 G8（V字手势）或首次启动触发显示。
 * 展示8张手势卡片，每张包含手势图示、操作名称和使用提示。
 */

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { GESTURE_GUIDE } from '../../types/gesture';

interface GestureTutorialProps {
  isVisible: boolean;
  onClose: () => void;
}

export function GestureTutorial({ isVisible, onClose }: GestureTutorialProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* 背景遮罩 */}
          <motion.div
            key="tutorial-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 230,
              background: 'rgba(15, 15, 26, 0.5)',
              backdropFilter: 'blur(2px)',
              cursor: 'pointer',
            }}
          />

          {/* 抽屉面板 */}
          <motion.div
            key="tutorial-panel"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: 'min(22rem, 90vw)',
              zIndex: 240,
              background: '#fff',
              borderLeft: '3px solid #1E1B4B',
              boxShadow: '-6px 0 0 #1E1B4B',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            {/* 标题栏 */}
            <div
              style={{
                background: '#1E1B4B',
                padding: '1rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexShrink: 0,
              }}
            >
              <div>
                <div
                  style={{
                    color: '#FF3366',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '0.2rem',
                  }}
                >
                  v6.0 手势控制
                </div>
                <div
                  style={{
                    color: '#fff',
                    fontSize: '1rem',
                    fontWeight: 800,
                    fontFamily: '"STKaiti", "楷体", serif',
                    letterSpacing: '0.05em',
                  }}
                >
                  手势引导册
                </div>
              </div>
              <button
                onClick={onClose}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: '2px solid rgba(255,255,255,0.2)',
                  borderRadius: '0.5rem',
                  color: '#fff',
                  cursor: 'pointer',
                  padding: '0.35rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <X size={16} />
              </button>
            </div>

            {/* 提示条 */}
            <div
              style={{
                background: '#fffbeb',
                borderBottom: '2px solid #fde68a',
                padding: '0.5rem 1.25rem',
                fontSize: '0.68rem',
                color: '#92400e',
                lineHeight: 1.5,
                flexShrink: 0,
              }}
            >
              💡 摄像头数据<strong>仅在您设备本地处理</strong>，不会上传服务器
            </div>

            {/* 手势卡片列表 */}
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                padding: '0.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
              }}
            >
              {GESTURE_GUIDE.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  style={{
                    background: '#f8f9ff',
                    border: '2px solid #1E1B4B',
                    borderRadius: '0.75rem',
                    padding: '0.75rem',
                    display: 'flex',
                    gap: '0.75rem',
                    alignItems: 'flex-start',
                    boxShadow: '2px 2px 0 #1E1B4B',
                  }}
                >
                  {/* 手势 Emoji 大图 */}
                  <div
                    style={{
                      fontSize: '2rem',
                      lineHeight: 1,
                      flexShrink: 0,
                      width: '2.5rem',
                      textAlign: 'center',
                    }}
                  >
                    {item.gesture}
                  </div>

                  {/* 文字说明 */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        marginBottom: '0.25rem',
                      }}
                    >
                      {/* ID 标签 */}
                      <span
                        style={{
                          background: '#FF3366',
                          color: '#fff',
                          fontSize: '0.55rem',
                          fontWeight: 800,
                          padding: '1px 5px',
                          borderRadius: '4px',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {item.id}
                      </span>
                      {/* 操作名称 */}
                      <span
                        style={{
                          fontSize: '0.8rem',
                          fontWeight: 800,
                          color: '#1E1B4B',
                          fontFamily: '"STKaiti", "楷体", serif',
                        }}
                      >
                        {item.action}
                      </span>
                    </div>
                    {/* 使用提示 */}
                    <p
                      style={{
                        margin: 0,
                        fontSize: '0.65rem',
                        color: '#555',
                        lineHeight: 1.5,
                      }}
                    >
                      {item.tip}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 底部关闭按钮 */}
            <div
              style={{
                padding: '0.75rem 1.25rem',
                borderTop: '2px solid #e5e7eb',
                flexShrink: 0,
              }}
            >
              <button
                onClick={onClose}
                style={{
                  width: '100%',
                  padding: '0.6rem',
                  background: '#1E1B4B',
                  color: '#fff',
                  border: '2px solid #1E1B4B',
                  borderRadius: '0.6rem',
                  boxShadow: '2px 2px 0 #FF3366',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontFamily: '"STKaiti", "楷体", serif',
                  letterSpacing: '0.1em',
                }}
              >
                ✌️ 再次比 V 字可切换教程
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
