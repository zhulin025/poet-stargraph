'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface LegendProps {
  nodes: any[];
  onFocus: (node: any) => void;
}

const Legend: React.FC<LegendProps> = ({ nodes, onFocus }) => {
  // Sort by influence and take top
  const topPoets = [...nodes].sort((a, b) => b.val - a.val).slice(0, 15);

  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-4 left-4 right-4 z-40 lg:left-[22rem] lg:right-8 pointer-events-auto"
    >
      <div className="clay-panel !p-4 sm:!p-6 bg-white/95 backdrop-blur-sm shadow-[4px_4px_0px_0px_#1E1B4B] w-full border-[3px] border-clay-dark flex flex-col gap-4 overflow-hidden">
        {/* Header Block - Flex Layout to avoid overlap */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b-2 border-slate-100 pb-3">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-dopa-pink shrink-0">
            <Star size={16} className="animate-dopa-bounce text-dopa-yellow" fill="currentColor" />
            <span>核心影响力文豪矩阵</span>
          </div>
          <div className="shrink-0 px-3 py-1 bg-clay-dark rounded-xl text-[8px] text-white font-[900] tracking-[0.1em] uppercase border-[2px] border-clay-dark whitespace-nowrap">
            检测到 {topPoets.length} 个核心坐标
          </div>
        </div>
 
        {/* Cards Row - Adaptive scrolling and height */}
        <div className="flex gap-4 overflow-x-auto pb-4 pt-2 scrollbar-hide snap-x h-auto">
          {topPoets.map((poet, i) => (
            <motion.button
              key={poet.id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => onFocus(poet)}
              className="flex-shrink-0 flex flex-col items-center gap-2 p-3 rounded-2xl bg-white border-[3px] border-clay-dark hover:border-dopa-blue hover:-translate-y-1 transition-all duration-300 group min-w-[90px] snap-center shadow-[3px_3px_0px_0px_#1E1B4B] active:shadow-none active:translate-x-1 active:translate-y-1"
            >
              <div 
                className="w-4 h-4 rounded-full border-[2px] border-clay-dark shadow-[0_0_10px_currentColor]"
                style={{ color: poet.color, backgroundColor: poet.color }}
              />
              <span className="text-sm font-[900] text-clay-dark group-hover:text-dopa-blue transition-colors tracking-tight italic truncate w-full text-center">
                {poet.id}
              </span>
              <div className="px-2 py-0.5 bg-dopa-pink rounded-full border-[2px] border-clay-dark shadow-[2px_2px_0_#000]">
                <span className="text-[9px] text-white font-black">{poet.val}</span>
              </div>
            </motion.button>
          ))}
          {/* Invisible padding to ensure last card shadow isn't cut off */}
          <div className="flex-shrink-0 w-4 h-full" />
        </div>
      </div>
    </motion.div>
  );
};

export default Legend;
