'use client';
/**
 * GestureController.tsx  v6.2
 * 手势控制系统顶层容器
 *
 * v6.2 改动：摄像头画面直接作为全屏背景（z-index: -1），
 * 取消右下角小窗，改为一个极简状态角标。
 */

import { useEffect, useRef, useState, useCallback } from 'react';
import { useGestureControl } from '../../hooks/useGestureControl';
import { GestureOverlay } from './GestureOverlay';
import { GestureTutorial } from './GestureTutorial';
import type { GestureCommand } from '../../types/gesture';

interface GestureControllerProps {
  /** 是否激活（外部开关） */
  isActive: boolean;
  /** 手势指令回调 */
  onCommand: (cmd: GestureCommand) => void;
  /** 当前图中节点的屏幕归一化坐标（用于 G3 食指点击） */
  nodeScreenPositions?: Array<{ id: string; nx: number; ny: number }>;
  /** 由外部控制的教程显示状态（TOGGLE_TUTORIAL 命令触发） */
  showTutorial: boolean;
  onToggleTutorial: () => void;
}

export function GestureController({
  isActive,
  onCommand,
  nodeScreenPositions = [],
  showTutorial,
  onToggleTutorial,
}: GestureControllerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [cameraError, setCameraError] = useState<string | null>(null);

  // 注入教程切换到命令流中
  const handleCommand = useCallback(
    (cmd: GestureCommand) => {
      if (cmd.type === 'TOGGLE_TUTORIAL') {
        // 仅「打开」教程，不做 toggle。关闭由用户手动点击关闭按钮完成。
        // 这样可避免 MediaPipe 检测的抖动（Victory→None→Victory）导致教程反复闪烁。
        if (!showTutorial) {
          onToggleTutorial();
        }
        return;
      }
      onCommand(cmd);
    },
    [onCommand, onToggleTutorial, showTutorial]
  );

  const {
    gestureState,
    isInitialized,
    isLoading,
    initError,
    fps,
    enable,
    disable,
  } = useGestureControl({
    videoRef,
    onCommand: handleCommand,
    nodeScreenPositions,
  });

  // 申请摄像头权限
  useEffect(() => {
    if (!isActive) return;

    let cancelled = false;

    async function startCamera() {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { ideal: 640 },
            height: { ideal: 480 },
            facingMode: 'user',
            frameRate: { ideal: 30 },
          },
          audio: false,
        });
        if (cancelled) {
          mediaStream.getTracks().forEach((t) => t.stop());
          return;
        }
        setStream(mediaStream);
        setCameraError(null);
      } catch (err) {
        if (cancelled) return;
        const msg =
          err instanceof DOMException && err.name === 'NotAllowedError'
            ? '摄像头权限被拒绝'
            : err instanceof DOMException && err.name === 'NotFoundError'
            ? '未找到摄像头设备'
            : '摄像头启动失败';
        setCameraError(msg);
      }
    }

    startCamera();
    return () => { cancelled = true; };
  }, [isActive]);

  // 将摄像头流绑定到 video 元素
  useEffect(() => {
    const video = videoRef.current;
    if (video && stream) {
      video.srcObject = stream;
      video.play().catch(() => {});
    }
    return () => {
      if (video) video.srcObject = null;
    };
  }, [stream]);

  // 摄像头就绪后启动识别（有错误时不自动重试，防止无限循环）
  useEffect(() => {
    if (isActive && stream && !isInitialized && !isLoading && !initError) {
      enable();
    }
    if (!isActive) {
      disable();
    }
  }, [isActive, stream, isInitialized, isLoading, initError, enable, disable]);

  // 关闭时释放摄像头流
  useEffect(() => {
    if (!isActive && stream) {
      stream.getTracks().forEach((t) => t.stop());
      setStream(null);
    }
    return () => {
      stream?.getTracks().forEach((t) => t.stop());
    };
  }, [isActive, stream]);

  if (!isActive) return null;

  const combinedError = cameraError ?? initError;

  return (
    <>
      {/* ── 全屏摄像头背景 ──────────────────────────────────────────
          z-index: -1 使它位于 Three.js canvas（z:0）之后，
          画面镜像翻转 + 适度压暗，星图和 UI 依然清晰可见。    */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -1000,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          transform: 'scaleX(-1)',     // 镜像，与指尖坐标方向一致
          filter: 'brightness(0.45)', // 压暗，让星图保持清晰
          opacity: stream ? 1 : 0,
          pointerEvents: 'none',
          transition: 'opacity 0.4s ease',
        }}
      />

      {/* ── 右下角极简状态角标 ─────────────────────────────────────── */}
      <div
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          zIndex: 220,
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          background: 'rgba(0,0,0,0.45)',
          backdropFilter: 'blur(8px)',
          borderRadius: '0.6rem',
          padding: '0.3rem 0.6rem',
          fontSize: '0.6rem',
          fontWeight: 700,
          fontFamily: 'monospace',
          color: combinedError
            ? '#f87171'
            : isLoading
            ? '#fbbf24'
            : '#22c55e',
          whiteSpace: 'nowrap',
        }}
      >
        {/* 状态指示灯 */}
        <span
          style={{
            width: '0.4rem',
            height: '0.4rem',
            borderRadius: '50%',
            background: combinedError ? '#f87171' : isLoading ? '#fbbf24' : '#22c55e',
            boxShadow: isInitialized ? '0 0 5px #22c55e' : 'none',
            flexShrink: 0,
          }}
        />
        {combinedError
          ? combinedError.slice(0, 20)
          : isLoading
          ? '手势模型加载中…'
          : `手势 ${fps}fps`}
      </div>

      {/* ── 指尖发光点 + 操作提示叠加层 ──────────────────────────── */}
      <GestureOverlay
        gestureState={gestureState}
        isActive={isInitialized}
      />

      {/* ── 手势引导教程抽屉 ──────────────────────────────────────── */}
      <GestureTutorial
        isVisible={showTutorial}
        onClose={onToggleTutorial}
      />
    </>
  );
}
