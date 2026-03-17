'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Node } from '../../types';
import { Star } from 'lucide-react';

interface LegendProps {
  nodes: Node[];
  onFocus: (node: Node) => void;
}

const Legend: React.FC<LegendProps> = ({ nodes, onFocus }) => {
  // Sort by influence and take top
  const topPoets = [...nodes].sort((a, b) => b.val - a.val).slice(0, 15);

  return (
    <motion.div 
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 z-40 lg:left-[24rem] lg:right-8 pointer-events-auto"
    >
      <div className="clay-panel !p-2 sm:!p-3 bg-white/95 backdrop-blur-sm shadow-[3px_3px_0px_0px_#1E1B4B] w-full border-[2px] border-clay-dark flex flex-col gap-1 sm:gap-2 overflow-hidden max-h-[20vh] sm:max-h-none">
        {/* Header Block - Ultra Compressed */}
        <div className="flex items-center justify-between gap-2 border-b-2 border-slate-100 pb-1">
          <div className="flex items-center gap-1.5 text-[8px] sm:text-[9px] font-black uppercase tracking-[0.1em] text-dopa-pink shrink-0">
            <Star size={12} className="animate-dopa-bounce text-dopa-yellow" fill="currentColor" />
            <span className="truncate">核心文豪矩阵</span>
          </div>
          <div className="shrink-0 px-1.5 py-0.5 bg-clay-dark rounded-md text-[6px] sm:text-[7px] text-white font-[900] tracking-[0.05em] uppercase border-[1px] border-clay-dark whitespace-nowrap">
            {topPoets.length} 坐标
          </div>
        </div>
 
        {/* Cards Row - Height reduced by another ~50% */}
        <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 pt-0.5 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent snap-x h-auto">
          {topPoets.map((poet, i) => (
            <motion.button
              key={poet.id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => onFocus(poet)}
              className="flex-shrink-0 flex flex-col items-center gap-1 p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-white border-[2px] border-clay-dark hover:border-dopa-blue hover:-translate-y-0.5 transition-all duration-300 group min-w-[65px] sm:min-w-[75px] snap-center shadow-[2px_2px_0px_0px_#1E1B4B] active:shadow-none active:translate-x-0.5 active:translate-y-0.5"
            >
              <div 
                className="w-2.5 h-2.5 rounded-full border-[1px] border-clay-dark"
                style={{ backgroundColor: poet.color }}
              />
              <span className="text-[10px] sm:text-xs font-[900] text-clay-dark group-hover:text-dopa-blue transition-colors tracking-tighter italic truncate w-full text-center">
                {poet.id}
              </span>
               <div className="px-1 py-0.2 bg-dopa-pink rounded-full border-[2px] border-clay-dark shadow-[1px_1px_0_#000]">
                <span className="text-[7px] sm:text-[8px] text-white font-black">{poet.val}</span>
              </div>
            </motion.button>
          ))}
          <div className="flex-shrink-0 w-4 h-full" />
        </div>
      </div>
    </motion.div>
  );
};

export default Legend;
