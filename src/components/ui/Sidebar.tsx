'use client';

import React from 'react';
import { Search, RotateCw, Layers, Globe, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface SidebarProps {
  currentDynasty: 'song' | 'tang' | 'yuan' | 'ming' | 'qing';
  onDynastyChange: (dynasty: 'song' | 'tang' | 'yuan' | 'ming' | 'qing') => void;
  onSearch: (query: string) => void;
  isRotating: boolean;
  toggleRotate: () => void;
  onFlip: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  currentDynasty, 
  onDynastyChange, 
  onSearch,
  isRotating,
  toggleRotate,
  onFlip
}) => {
  return (
    <motion.div 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="flex flex-col gap-4 w-full lg:w-80 z-40 pointer-events-auto h-full"
    >
      {/* 搜索框 */}
      <div className="clay-panel !p-6 !border-[2px]">
        <div className="flex items-center gap-2 mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-dopa-pink">
          <Search size={16} className="animate-dopa-bounce" />
          <span>文豪搜索</span>
        </div>
        <div className="relative group">
          <input 
            type="text"
            placeholder="搜索诗人名字..."
            onChange={(e) => onSearch(e.target.value)}
            className="clay-input w-full group-hover:scale-[1.01] transition-transform !border-[2px]"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-clay-dark/20 group-focus-within:text-dopa-blue transition-colors" size={18} />
        </div>
      </div>

      {/* 朝代切换 */}
      <div className="clay-panel !p-5 bg-dopa-yellow/5 !border-[2px]">
        <div className="flex items-center gap-2 mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-dopa-green">
          <Sparkles size={16} />
          <span>时空通讯站</span>
        </div>
        <div className="grid grid-cols-6 p-1.5 bg-clay-dark rounded-2xl relative shadow-lg border-[2px] border-clay-dark gap-1.5">
          {/* Row 1: Tang, Song */}
          <div className="col-span-3 flex gap-1.5">
            {(['tang', 'song'] as const).map((d) => (
              <button
                key={d}
                onClick={() => onDynastyChange(d)}
                className={`flex-1 py-3 text-[12px] font-[900] rounded-xl transition-all duration-300 relative z-10 ${
                  currentDynasty === d 
                     ? 'bg-dopa-yellow text-clay-dark shadow-[2px_2px_0_#000]' 
                     : 'text-white hover:text-dopa-yellow'
                }`}
              >
                {d === 'song' ? '大宋' : '盛唐'}
              </button>
            ))}
          </div>
          {/* Row 2: Yuan, Ming, Qing */}
          <div className="col-span-3 flex gap-1.5">
            {(['yuan', 'ming', 'qing'] as const).map((d) => (
              <button
                key={d}
                onClick={() => onDynastyChange(d)}
                className={`flex-1 py-3 text-[12px] font-[900] rounded-xl transition-all duration-300 relative z-10 ${
                  currentDynasty === d 
                     ? 'bg-dopa-yellow text-clay-dark shadow-[2px_2px_0_#000]' 
                     : 'text-white hover:text-dopa-yellow'
                }`}
              >
                {d === 'yuan' ? '大元' : d === 'ming' ? '大明' : '大清'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 控制中心 */}
      <div className="clay-panel !p-6 !border-[2px]">
        <div className="flex items-center gap-2 mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-dopa-blue">
          <Layers size={16} />
          <span>引擎控制参数</span>
        </div>
        <div className="space-y-4">
          <button 
            onClick={toggleRotate}
            className={`w-full flex items-center justify-between p-4 rounded-xl border-[2px] border-clay-dark font-black text-xs transition-all shadow-[4px_4px_0_#1E1B4B] active:shadow-none active:translate-x-1 active:translate-y-1 ${
              isRotating ? 'bg-dopa-green text-white' : 'bg-white text-clay-dark hover:bg-slate-50'
            }`}
          >
            <div className="flex items-center gap-2">
              <RotateCw size={16} className={isRotating ? 'animate-spin' : ''} />
              <span>{isRotating ? '自转模式已激活' : '重力锁定中'}</span>
            </div>
            <div className={`w-2 h-2 rounded-full border border-clay-dark ${isRotating ? 'bg-white' : 'bg-red-400'}`} />
          </button>

          <button 
            onClick={onFlip}
            className="w-full flex items-center gap-2 p-4 bg-white border-[2px] border-clay-dark rounded-xl text-clay-dark font-black text-xs shadow-[4px_4px_0_#1E1B4B] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all hover:bg-slate-50"
          >
            <Globe size={16} className="text-dopa-blue" />
            <span>视角位置重置</span>
          </button>

          <div className="pt-3 border-t-[2px] border-slate-100 flex flex-col gap-3 text-[9px] font-black uppercase tracking-widest text-slate-300">
             <div className="flex justify-between items-center text-dopa-green">
               <span>渲染等级</span>
               <span>极高</span>
             </div>
             <div className="flex justify-between items-center text-dopa-pink">
               <span>星尘密度</span>
               <span>88%</span>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
