'use client';

import React, { useState, useCallback, useMemo, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Sidebar from '@/components/ui/Sidebar';
import Legend from '@/components/ui/Legend';
import { songData } from '@/data/song';
import { tangData } from '@/data/tang';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Binary, Sparkles } from 'lucide-react';

const Stargraph = dynamic(() => import('@/components/Stargraph'), { 
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-dopa-bg z-[100]">
      <div className="w-16 h-16 border-[8px] border-clay-dark border-t-dopa-pink rounded-full animate-spin shadow-[4px_4px_0_#1E1B4B]" />
      <span className="mt-8 text-clay-dark text-xl font-[900] tracking-widest uppercase animate-pulse">正在连接星系网络...</span>
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
      <div className="relative z-10 w-full h-full flex flex-col pointer-events-none p-4 sm:p-6 lg:p-8">
        {/* Header - Refined Clay Style */}
        <header className="h-20 px-6 sm:px-8 clay-card flex items-center justify-between pointer-events-auto bg-white/95 backdrop-blur-sm self-center w-full max-w-7xl">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-dopa-pink border-[3px] border-clay-dark flex items-center justify-center shadow-[3px_3px_0_#1E1B4B] -rotate-2 hover:rotate-0 transition-all cursor-pointer group">
               <Cpu size={24} className="text-white sm:w-7 sm:h-7 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-[900] tracking-tighter flex items-center gap-3">
                <span className="text-clay-dark">诗人星系</span>
                <span className="bg-dopa-green text-white text-[10px] px-2 py-0.5 rounded-lg border-[2px] border-clay-dark shadow-[2px_2px_0_#1E1B4B]">V2.0 简体版</span>
              </h1>
              <div className="text-[9px] text-slate-400 font-black uppercase tracking-[0.2em] mt-0.5 hidden sm:block">多巴胺情感时空图谱</div>
            </div>
          </div>

          <div className="flex items-center gap-6">
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
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden mobile-menu-btn"
            >
              <div className="space-y-1.5 focus:outline-none">
                <div className={`w-6 h-1 bg-clay-dark rounded-full transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
                <div className={`w-6 h-1 bg-clay-dark rounded-full transition-all ${mobileMenuOpen ? 'opacity-0 scale-0' : ''}`} />
                <div className={`w-6 h-1 bg-clay-dark rounded-full transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
              </div>
            </button>
          </div>
        </header>

        {/* Viewport content */}
        <div className="flex-1 mt-6 relative">
          <AnimatePresence>
            {(mobileMenuOpen || isLargeScreen) && (
              <Sidebar 
                currentDynasty={dynasty}
                onDynastyChange={(d) => { setDynasty(d); setMobileMenuOpen(false); }}
                onSearch={handleSearch}
                isRotating={isRotating}
                toggleRotate={() => setIsRotating(!isRotating)}
                onFlip={() => setFlipTrigger((prev) => prev + 1)}
              />
            )}
          </AnimatePresence>

          <Legend 
            nodes={currentData.nodes} 
            onFocus={handleFocus}
          />
        </div>

        {/* Info Card - Simplified Chinese Refinement */}
        <AnimatePresence>
          {hoverNode && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: 20 }}
              className="fixed bottom-40 right-4 sm:right-8 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 z-50 w-[calc(100%-2rem)] sm:w-80 clay-card p-8 bg-white/95 overflow-hidden pointer-events-auto shadow-[8px_8px_0_#1E1B4B]"
            >
              <div className="absolute -top-6 -right-6 pointer-events-none opacity-[0.05] rotate-12">
                <Cpu size={120} />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-16 h-16 rounded-2xl border-[3px] border-clay-dark flex items-center justify-center text-3xl font-[900] shadow-[3px_3px_0_#1E1B4B]"
                    style={{ backgroundColor: hoverNode.color }}
                  >
                    <span className="text-white drop-shadow-[2px_2px_0_rgba(0,0,0,0.3)]">{hoverNode.id[0]}</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-[900] text-clay-dark tracking-tighter">{hoverNode.id}</h2>
                    <div className="mt-1 px-3 py-1 bg-dopa-yellow text-[9px] text-clay-dark font-black rounded-lg border-[2px] border-clay-dark shadow-[2px_2px_0_#1E1B4B] uppercase tracking-wider inline-block">
                      影响力: {hoverNode.val}
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 border-[3px] border-clay-dark p-4 rounded-2xl mb-6 shadow-inner relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-dopa-pink" />
                  <p className="text-[13px] text-clay-dark leading-relaxed font-bold">
                    {hoverNode.desc || "这位诗人的创作跨越了时代的鸿沟，其作品在中华文化脉络中具有深远的意义。"}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-dopa-pink/5 border-[3px] border-clay-dark p-3 rounded-2xl shadow-[3px_3px_0_#1E1B4B]">
                    <div className="text-[8px] text-dopa-pink font-black uppercase tracking-widest mb-1 font-mono">强度指数</div>
                    <div className="text-xl font-[900] text-clay-dark">+{hoverNode.val}</div>
                  </div>
                  <div className="bg-dopa-green/5 border-[3px] border-clay-dark p-3 rounded-2xl shadow-[3px_3px_0_#1E1B4B]">
                    <div className="text-[8px] text-dopa-green font-black uppercase tracking-widest mb-1 font-mono">所属集群</div>
                    <div className="text-xl font-[900] text-clay-dark">#{hoverNode.group}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="fixed bottom-6 right-8 z-40 text-[9px] text-clay-dark font-[900] uppercase tracking-[0.3em] text-right leading-relaxed hidden sm:block opacity-30">
          ANTIGRAVITY 实验室<br/>
          诗人星系 // 时空观测站
        </div>
      </div>
    </main>
  );
}
