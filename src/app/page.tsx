'use client';

import React, { useState, useCallback, useMemo, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Sidebar from '@/components/ui/Sidebar';
import Legend from '@/components/ui/Legend';
import { songData } from '@/data/song';
import { tangData } from '@/data/tang';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Binary, Sparkles, X } from 'lucide-react';

const Stargraph = dynamic(() => import('@/components/Stargraph'), { 
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-dopa-bg z-[100]">
      <div className="w-12 h-12 border-[6px] border-clay-dark border-t-dopa-pink rounded-full animate-spin shadow-[4px_4px_0_#1E1B4B]" />
      <span className="mt-6 text-clay-dark text-sm font-[900] tracking-widest uppercase animate-pulse">正在连接星系网络...</span>
    </div>
  )
});

export default function Home() {
  const [dynasty, setDynasty] = useState<'song' | 'tang'>('song');
  const [searchQuery, setSearchQuery] = useState('');
  const [isRotating, setIsRotating] = useState(true);
  const [hoverNode, setHoverNode] = useState<any>(null);
  const [flipTrigger, setFlipTrigger] = useState(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const checkScreen = () => setIsLargeScreen(window.innerWidth >= 1024);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const currentData = useMemo(() => {
    return dynasty === 'song' ? songData : tangData;
  }, [dynasty]);

  const handleSearch = useCallback((q: string) => {
    setSearchQuery(q);
  }, []);

  const handleFocus = useCallback((node: any) => {
    setSearchQuery(node.id);
  }, []);

  const resetView = useCallback(() => {
    setFlipTrigger(prev => prev + 1);
  }, []);

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-dopa-bg font-sans selection:bg-dopa-pink/30">
      {/* 3D Engine Layer - Fixed Fullscreen */}
      <div className="fixed inset-0 z-0">
        <Stargraph 
          data={currentData}
          isRotating={isRotating}
          onNodeHover={setHoverNode}
          searchQuery={searchQuery}
          triggerFlip={flipTrigger}
        />
      </div>

      {/* UI Overlay Layer */}
      <div className="relative z-10 w-full h-full flex flex-col pointer-events-none p-3 sm:p-6 lg:p-8">
        {/* Header - Strongly Compressed for Mobile */}
        <header className="h-14 sm:h-20 px-4 sm:px-8 clay-card flex items-center justify-between pointer-events-auto bg-white/95 backdrop-blur-sm self-center w-full max-w-7xl">
          <div className="flex items-center gap-3 sm:gap-6">
            <div className="w-8 h-8 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-dopa-pink border-[2.5px] sm:border-[3px] border-clay-dark flex items-center justify-center shadow-[2.5px_2.5px_0_#1E1B4B] -rotate-2 hover:rotate-0 transition-all cursor-pointer group shrink-0">
               <Cpu size={16} className="text-white sm:w-7 sm:h-7 group-hover:scale-110 transition-transform" />
            </div>
            <div className="min-w-0">
              <h1 className="text-base sm:text-2xl font-[900] tracking-tighter flex items-center gap-2 sm:gap-3">
                <span className="text-clay-dark truncate">诗人星系</span>
                <span className="bg-dopa-green text-white text-[8px] sm:text-[10px] px-1.5 py-0.5 rounded-md sm:rounded-lg border-[1.5px] sm:border-[2px] border-clay-dark shadow-[1.5px_1.5px_0_#1E1B4B] whitespace-nowrap">V2.0 简体</span>
              </h1>
              <div className="text-[8px] text-slate-400 font-black uppercase tracking-[0.1em] mt-0 hidden sm:block">多巴胺情感时空图谱</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-6 text-[10px] font-black tracking-[0.1em] uppercase">
              <div className="flex items-center gap-3 px-4 py-2 bg-dopa-yellow rounded-xl border-[3px] border-clay-dark shadow-[3px_3px_0_#1E1B4B]">
                <Sparkles size={14} className="animate-dopa-bounce" />
                <span className="text-clay-dark">系统在线</span>
              </div>
              <div className="flex items-center gap-2 text-dopa-pink">
                <Binary size={16} />
                <span>{dynasty === 'song' ? 'DS-大宋核心' : 'ST-盛唐核心'}</span>
              </div>
            </div>

            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden mobile-menu-btn !w-10 !h-10 !rounded-lg"
            >
              <div className="space-y-1">
                <div className="w-5 h-0.5 bg-clay-dark rounded-full" />
                <div className="w-5 h-0.5 bg-clay-dark rounded-full" />
                <div className="w-5 h-0.5 bg-clay-dark rounded-full" />
              </div>
            </button>
          </div>
        </header>

        {/* Viewport content */}
        <div className="flex-1 mt-4 sm:mt-6 relative">
          {/* Desktop Sidebar */}
          {isLargeScreen && (
            <Sidebar 
              currentDynasty={dynasty}
              onDynastyChange={setDynasty}
              onSearch={handleSearch}
              isRotating={isRotating}
              toggleRotate={() => setIsRotating(!isRotating)}
              onFlip={resetView}
            />
          )}

          <Legend 
            nodes={currentData.nodes} 
            onFocus={handleFocus}
          />
        </div>

        {/* Improved Mobile Sidebar Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && !isLargeScreen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-clay-dark/60 backdrop-blur-md flex justify-end pointer-events-auto"
              onClick={() => setMobileMenuOpen(false)}
            >
              <motion.div 
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="w-4/5 max-w-sm h-full bg-dopa-bg p-6 flex flex-col border-l-[6px] border-clay-dark"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-dopa-pink border-[3px] border-clay-dark flex items-center justify-center shadow-[3px_3px_0_#1E1B4B]">
                      <Cpu size={20} className="text-white" />
                    </div>
                    <span className="text-xl font-[900] text-clay-dark tracking-tighter">控制台</span>
                  </div>
                  <button onClick={() => setMobileMenuOpen(false)} className="mobile-menu-btn !w-10 !h-10">
                    <X size={20} />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto pr-2 scrollbar-hide">
                  <Sidebar 
                    currentDynasty={dynasty}
                    onDynastyChange={(d) => { setDynasty(d); setMobileMenuOpen(false); }}
                    onSearch={handleSearch}
                    isRotating={isRotating}
                    toggleRotate={() => setIsRotating(!isRotating)}
                    onFlip={() => { resetView(); setMobileMenuOpen(false); }}
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Info Card - Further Compressed for Mobile */}
        <AnimatePresence>
          {hoverNode && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed bottom-36 left-4 right-4 sm:left-auto sm:right-8 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 z-50 w-auto sm:w-80 clay-card p-4 sm:p-8 bg-white/95 overflow-hidden pointer-events-auto shadow-[4px_4px_0_#1E1B4B] border-[3px] border-clay-dark"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl border-[2.5px] sm:border-[3px] border-clay-dark flex items-center justify-center text-xl sm:text-3xl font-[900] shadow-[2.5px_2.5px_0_#1E1B4B]"
                    style={{ backgroundColor: hoverNode.color }}
                  >
                    <span className="text-white drop-shadow-[2px_2px_0_rgba(0,0,0,0.3)]">{hoverNode.id[0]}</span>
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-2xl font-[900] text-clay-dark tracking-tighter">{hoverNode.id}</h2>
                    <div className="mt-0.5 px-2 py-0.5 bg-dopa-yellow text-[8px] sm:text-[9px] text-clay-dark font-black rounded-md border-[1.5px] sm:border-[2px] border-clay-dark shadow-[1.5px_1.5px_0_#1E1B4B] uppercase inline-block">
                      影响力: {hoverNode.val}
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 border-[2px] border-clay-dark p-3 rounded-xl mb-4 shadow-inner relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-dopa-pink" />
                  <p className="text-[11px] sm:text-[13px] text-clay-dark leading-relaxed font-bold">
                    {hoverNode.desc || "这位诗人的创作跨越了时代的鸿沟，其作品在中华文化脉络中具有深远的意义。"}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-dopa-pink/5 border-[2px] border-clay-dark p-2 rounded-xl shadow-[2px_2px_0_#1E1B4B]">
                    <div className="text-[7px] text-dopa-pink font-black uppercase tracking-widest mb-0.5">强度</div>
                    <div className="text-lg font-[900] text-clay-dark">+{hoverNode.val}</div>
                  </div>
                  <div className="bg-dopa-green/5 border-[2px] border-clay-dark p-2 rounded-xl shadow-[2px_2px_0_#1E1B4B]">
                    <div className="text-[7px] text-dopa-green font-black uppercase tracking-widest mb-0.5">集群</div>
                    <div className="text-lg font-[900] text-clay-dark">#{hoverNode.group}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="fixed bottom-3 right-4 z-40 text-[7px] sm:text-[9px] text-clay-dark font-[900] uppercase tracking-[0.2em] text-right leading-relaxed hidden sm:block opacity-30">
          ANTIGRAVITY 实验室 // 时空观测站
        </div>
      </div>
    </main>
  );
}
