'use client';

import React from 'react';
import { Search, RotateCw, Layers, Globe, Sparkles, Camera, Maximize, Minimize, Settings, Timer, BrainCircuit, PenTool, MessageSquare, Swords } from 'lucide-react';
import { motion } from 'framer-motion';

interface SidebarProps {
  currentDynasty: 'song' | 'tang' | 'yuan' | 'ming' | 'qing';
  onDynastyChange: (dynasty: 'song' | 'tang' | 'yuan' | 'ming' | 'qing') => void;
  isRotating: boolean;
  toggleRotate: () => void;
  onFlip: () => void;
  onExport: () => void;
  isFullScreen?: boolean;
  onToggleFullScreen?: () => void;
  viewMode?: 'day' | 'night';
  isTimelineMode?: boolean;
  onToggleTimeline?: () => void;
  onShowSettings?: () => void;
  showContemporary?: boolean;
  onToggleContemporary?: () => void;
  onOpenGlobalPoem?: () => void;
  onOpenChat?: () => void;
  onOpenGame?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  currentDynasty, 
  onDynastyChange, 
  isRotating,
  toggleRotate,
  onFlip,
  onExport,
  isFullScreen,
  onToggleFullScreen,
  viewMode = 'night',
  isTimelineMode = false,
  onToggleTimeline,
  onShowSettings,
  showContemporary = true,
  onToggleContemporary,
  onOpenGlobalPoem,
  onOpenChat,
  onOpenGame
}) => {
  return (
    <motion.div 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="flex flex-col gap-2.5 w-full lg:w-80 z-40 pointer-events-auto pb-6 pr-1"
    >
      {/* 朝代切换 (时空通讯站) */}
      <div className={`clay-panel !p-3.5 !border-[2px] ${viewMode === 'day' ? 'bg-dopa-yellow/20' : 'bg-dopa-yellow/5'}`}>
        <div className="flex items-center gap-2 mb-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-dopa-green">
          <Sparkles size={14} />
          <span>时空通讯站</span>
        </div>
        <div className="grid grid-cols-6 p-1 bg-clay-dark rounded-2xl relative shadow-lg border-[2px] border-clay-dark gap-1">
          {/* Row 1: Tang, Song */}
          <div className="col-span-3 flex gap-1">
            {(['tang', 'song'] as const).map((d) => (
              <button
                key={d}
                onClick={() => onDynastyChange(d)}
                className={`flex-1 py-2.5 text-[11px] font-[900] rounded-xl transition-all duration-300 relative z-10 ${
                  currentDynasty === d 
                     ? 'bg-dopa-yellow text-clay-dark shadow-[1.5px_1.5px_0_#000]' 
                     : 'text-white hover:text-dopa-yellow'
                }`}
              >
                {d === 'song' ? '大宋' : '盛唐'}
              </button>
            ))}
          </div>
          {/* Row 2: Yuan, Ming, Qing */}
          <div className="col-span-3 flex gap-1">
            {(['yuan', 'ming', 'qing'] as const).map((d) => (
              <button
                key={d}
                onClick={() => onDynastyChange(d)}
                className={`flex-1 py-2.5 text-[11px] font-[900] rounded-xl transition-all duration-300 relative z-10 ${
                  currentDynasty === d 
                     ? 'bg-dopa-yellow text-clay-dark shadow-[1.5px_1.5px_0_#000]' 
                     : 'text-white hover:text-dopa-yellow'
                }`}
              >
                {d === 'yuan' ? '大元' : d === 'ming' ? '大明' : '大清'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* AI 衍生功能 */}
      <div className={`clay-panel !p-4 !border-[2px] ${viewMode === 'day' ? 'bg-white' : ''}`}>
        <div className="flex items-center gap-2 mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-dopa-pink">
          <BrainCircuit size={14} className="animate-pulse" />
          <span>AI 衍生时空</span>
        </div>
        <div className="space-y-2">
          <button 
            onClick={onOpenGlobalPoem}
            className="w-full flex items-center justify-center gap-2.5 p-2.5 bg-dopa-pink/10 hover:bg-dopa-pink/20 border-[2px] border-dopa-pink/30 hover:border-dopa-pink rounded-xl text-dopa-pink font-black text-xs transition-colors shadow-sm active:scale-95 group"
          >
            <PenTool size={16} className="group-hover:rotate-12 transition-transform" />
            <span>🌌 AI 命题作诗</span>
          </button>
          
          <button 
            onClick={onOpenChat}
            className="w-full flex items-center justify-center gap-2.5 p-2.5 bg-dopa-blue/10 hover:bg-dopa-blue/20 border-[2px] border-dopa-blue/30 hover:border-dopa-blue rounded-xl text-dopa-blue font-black text-xs transition-colors shadow-sm active:scale-95 group"
          >
            <MessageSquare size={16} className="group-hover:-rotate-12 transition-transform" />
            <span>💬 跨时空圆桌</span>
          </button>
          
          <button 
            onClick={onOpenGame}
            className="w-full flex items-center justify-center gap-2.5 p-2.5 bg-dopa-green/10 hover:bg-dopa-green/20 border-[2px] border-dopa-green/30 hover:border-dopa-green rounded-xl text-dopa-green font-black text-xs transition-colors shadow-sm active:scale-95 group"
          >
            <Swords size={16} className="group-hover:scale-110 transition-transform" />
            <span>⚔️ 飞花令对决</span>
          </button>
        </div>
      </div>



      {/* 控制中心 */}
      <div className={`clay-panel !p-4 !border-[2px] ${viewMode === 'day' ? 'bg-white' : ''}`}>
        <div className="flex items-center gap-2 mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-dopa-blue">
          <Layers size={16} />
          <span>引擎控制参数</span>
        </div>
        <div className="space-y-2.5">
          <button 
            onClick={toggleRotate}
            className={`w-full flex items-center justify-between p-2.5 rounded-xl border-[2px] border-clay-dark font-black text-xs transition-all shadow-[4px_4px_0_#1E1B4B] active:shadow-none active:translate-x-1 active:translate-y-1 ${
              isRotating ? 'bg-dopa-green text-white' : 'bg-white text-clay-dark hover:bg-slate-50'
            }`}
          >
            <div className="flex items-center gap-2">
              <RotateCw size={14} className={isRotating ? 'animate-spin' : ''} />
              <span>{isRotating ? '自转模式已激活' : '重力锁定中'}</span>
            </div>
            <div className={`w-2 h-2 rounded-full border border-clay-dark ${isRotating ? 'bg-white' : 'bg-red-400'}`} />
          </button>

          <button 
            onClick={onFlip}
            className="w-full flex items-center gap-2 p-2.5 bg-white border-[2px] border-clay-dark rounded-xl text-clay-dark font-black text-xs shadow-[4px_4px_0_#1E1B4B] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all hover:bg-slate-50"
          >
            <Globe size={14} className="text-dopa-blue" />
            <span>视角位置重置</span>
          </button>

          {/* Action Buttons Row */}
          <div className="grid grid-cols-2 gap-2.5">
            <button 
              onClick={onExport}
              className="flex items-center justify-center gap-2 p-2.5 bg-dopa-pink text-white border-[2px] border-clay-dark rounded-xl font-black text-[10px] shadow-[4px_4px_0_#1E1B4B] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all hover:bg-dopa-pink/90"
            >
              <Camera size={14} />
              <span>导出图片</span>
            </button>

            <button 
              onClick={onToggleFullScreen}
              className={`flex items-center justify-center gap-2 p-2.5 border-[2px] border-clay-dark rounded-xl font-black text-[10px] shadow-[4px_4px_0_#1E1B4B] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all ${
                isFullScreen 
                  ? 'bg-dopa-blue text-white' 
                  : viewMode === 'day' ? 'bg-white text-clay-dark' : 'bg-white text-clay-dark'
              }`}
            >
              {isFullScreen ? <Minimize size={14} /> : <Maximize size={14} />}
              <span>{isFullScreen ? '退出沉浸' : '全屏'}</span>
            </button>

            <button 
              onClick={onToggleTimeline}
              className={`flex items-center justify-center gap-2 p-2.5 border-[2px] border-clay-dark rounded-xl font-black text-[10px] shadow-[4px_4px_0_#1E1B4B] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all ${
                isTimelineMode 
                  ? 'bg-dopa-pink text-white' 
                  : 'bg-white text-clay-dark hover:bg-slate-50'
              }`}
            >
              <Timer size={14} className={isTimelineMode ? 'animate-spin-slow' : ''} />
              <span>{isTimelineMode ? '时空回溯' : '时空回溯'}</span>
            </button>

            {onToggleContemporary && (
              <label className={`flex items-center gap-3 px-3 py-1.5 rounded-xl border-[2px] border-clay-dark cursor-pointer select-none transition-all shadow-[2px_2px_0_#1E1B4B] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none ${
                viewMode === 'night' ? 'bg-white/10 text-clay-dark/80' : 'bg-white text-clay-dark'
              }`}>
                <input
                  type="checkbox"
                  checked={showContemporary}
                  onChange={onToggleContemporary}
                  className="sr-only peer"
                />
                <div className="w-7 h-3.5 rounded-full border-[2px] border-clay-dark bg-slate-200 peer-checked:bg-dopa-blue transition-colors relative shrink-0 after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:w-2 after:h-2 after:rounded-full after:bg-white after:border after:border-clay-dark after:transition-transform peer-checked:after:translate-x-[14px]" />
                <span className="text-[9px] font-[1000] leading-tight">星辰化</span>
              </label>
            )}

            <button 
              onClick={onShowSettings}
              className="flex items-center justify-center gap-2 p-2.5 bg-clay-dark text-white border-[2px] border-clay-dark rounded-xl font-black text-[10px] shadow-[4px_4px_0_#1E1B4B] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all hover:bg-clay-dark/90 col-span-2"
            >
              <Settings size={14} />
              <span>引擎配置</span>
            </button>
          </div>

          <div className="pt-3 border-t-[2px] border-slate-100 flex flex-row justify-between items-center gap-3 text-[8px] font-black uppercase tracking-widest text-slate-300">
             <div className="flex items-center gap-1.5 text-dopa-green">
               <span>渲染等级</span>
               <span className="bg-dopa-green/10 px-1.5 py-0.5 rounded-md">极高</span>
             </div>
             <div className="flex items-center gap-1.5 text-dopa-pink">
               <span>星尘密度</span>
               <span className="bg-dopa-pink/10 px-1.5 py-0.5 rounded-md">88.2%</span>
             </div>
          </div>
        </div>
      </div>

    </motion.div>
  );
};

export default Sidebar;
