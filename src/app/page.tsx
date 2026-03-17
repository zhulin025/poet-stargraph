'use client';

import React, { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Sidebar from '@/components/ui/Sidebar';
import Legend from '@/components/ui/Legend';
import { songData } from '@/data/song';
import { tangData } from '@/data/tang';
import { yuanData } from '@/data/yuan';
import { mingData } from '@/data/ming';
import { qingData } from '@/data/qing';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Binary, Sparkles, X, Star, Minimize, Camera } from 'lucide-react';

const Stargraph = dynamic(() => import('@/components/Stargraph'), { 
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-dopa-bg z-[100]">
      <div className="w-12 h-12 border-[4px] border-clay-dark border-t-dopa-pink rounded-full animate-spin shadow-[4px_4px_0_#1E1B4B]" />
      <span className="mt-6 text-clay-dark text-sm font-[900] tracking-widest uppercase animate-pulse">正在连接星系网络...</span>
    </div>
  )
});

export default function Home() {
  const [dynasty, setDynasty] = useState<'song' | 'tang' | 'yuan' | 'ming' | 'qing'>('tang');
  const [searchQuery, setSearchQuery] = useState('');
  const [isRotating, setIsRotating] = useState(true);
  const [selectedNode, setSelectedNode] = useState<any>(null);
  const [selectedWork, setSelectedWork] = useState<any | null>(null);
  const [flipTrigger, setFlipTrigger] = useState(1);
  const [exportTrigger, setExportTrigger] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const poemCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkScreen = () => setIsLargeScreen(window.innerWidth >= 1024);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const currentData = useMemo(() => {
    switch(dynasty) {
      case 'tang': return tangData;
      case 'song': return songData;
      case 'yuan': return yuanData;
      case 'ming': return mingData;
      case 'qing': return qingData;
      default: return tangData;
    }
  }, [dynasty]);


  const handleSearch = useCallback((q: string) => {
    setSearchQuery(q);
  }, []);

  const handleFocus = useCallback((node: any) => {
    setSearchQuery(node.id);
    setSelectedNode(node);
    setMobileMenuOpen(false);
  }, []);

  const socialConnections = useMemo(() => {
    if (!selectedNode) return [];
    
    // Use Map to deduplicate by targetId and aggregate relationship types
    const connectionsMap = new Map<string, any>();

    currentData.links
      .filter(l => {
        const s = typeof l.source === 'string' ? l.source : (l.source as any).id;
        const t = typeof l.target === 'string' ? l.target : (l.target as any).id;
        return s === selectedNode.id || t === selectedNode.id;
      })
      .forEach(l => {
        const s = typeof l.source === 'string' ? l.source : (l.source as any).id;
        const t = typeof l.target === 'string' ? l.target : (l.target as any).id;
        const targetId = s === selectedNode.id ? t : s;
        
        if (!connectionsMap.has(targetId)) {
          const targetNode = currentData.nodes.find(n => n.id === targetId);
          if (targetNode) {
            connectionsMap.set(targetId, {
              node: targetNode,
              types: [l.type],
              descriptions: l.description ? [l.description] : []
            });
          }
        } else {
          const existing = connectionsMap.get(targetId);
          if (l.type && !existing.types.includes(l.type)) {
            existing.types.push(l.type);
          }
          if (l.description && !existing.descriptions.includes(l.description)) {
            existing.descriptions.push(l.description);
          }
        }
      });
    
    return Array.from(connectionsMap.values());
  }, [selectedNode, currentData]);

  // Logic for Spatiotemporal Overlap
  const spatiotemporalOverlaps = useMemo(() => {
    if (!selectedNode || !selectedNode.locations) return [];
    
    return currentData.nodes
      .filter(n => n.id !== selectedNode.id && n.locations)
      .map(n => {
        const sharedLocs = n.locations?.filter(loc => selectedNode.locations?.includes(loc));
        if (sharedLocs && sharedLocs.length > 0) {
          // Check for lifespan overlap
          const start = Math.max(selectedNode.birth || -9999, n.birth || -9999);
          const end = Math.min(selectedNode.death || 9999, n.death || 9999);
          if (start <= end) {
            return { node: n, locations: sharedLocs };
          }
        }
        return null;
      })
      .filter(Boolean) as any[];
  }, [selectedNode, currentData]);

  const resetView = useCallback(() => {
    setFlipTrigger(prev => prev + 1);
  }, []);

  const handleExportPoemCard = useCallback(() => {
    if (!selectedWork || !selectedNode) return;
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Dimensions for the export image (Portrait style)
    const cardWidth = 800;
    const cardHeight = 1100;
    canvas.width = cardWidth;
    canvas.height = cardHeight;

    // 1. Background
    ctx.fillStyle = '#fdfcf8';
    ctx.fillRect(0, 0, cardWidth, cardHeight);
    
    // Pattern dots (subtle)
    ctx.fillStyle = 'rgba(30, 27, 75, 0.03)';
    for(let x = 0; x < cardWidth; x += 30) {
      for(let y = 0; y < cardHeight; y += 30) {
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // 2. Header Area
    ctx.fillStyle = '#1E1B4B';
    ctx.font = 'bold 48px "Inter", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`《${selectedWork.title}》`, cardWidth / 2, 120);
    
    ctx.font = '900 24px "Inter", sans-serif';
    ctx.fillStyle = '#64748b';
    ctx.fillText(`${selectedNode.id} · 经典传世作品`, cardWidth / 2, 170);

    // 3. Vertical Text Content (The core)
    ctx.fillStyle = '#1E1B4B';
    ctx.font = 'bold 42px "Noto Serif SC", serif'; // Fallback to serif
    const content = selectedWork.content.split('。').filter(Boolean).map((s: string) => s + '。');
    
    const startX = cardWidth - 150;
    const startY = 250;
    const columnGap = 80;
    const charGap = 50;
    
    content.forEach((sentence: string, colIdx: number) => {
      const x = startX - (colIdx * columnGap);
      const chars = sentence.split('');
      chars.forEach((char, charIdx) => {
        const y = startY + (charIdx * charGap);
        if (y < cardHeight - 300) {
          ctx.fillText(char, x, y);
        }
      });
    });

    // 4. Appreciation Section
    const footerY = cardHeight - 250;
    ctx.fillStyle = 'rgba(96, 165, 250, 0.05)';
    ctx.roundRect?.(80, footerY, cardWidth - 160, 160, 24);
    ctx.fill();
    ctx.strokeStyle = '#1E1B4B';
    ctx.lineWidth = 2;
    ctx.strokeRect?.(80, footerY, cardWidth - 160, 160);

    ctx.fillStyle = '#1E1B4B';
    ctx.font = 'italic bold 22px serif';
    ctx.textAlign = 'left';
    const appreciation = `这首作品展现了${selectedNode.id}卓越的艺术成就与深厚的人文底蕴。`;
    ctx.fillText(appreciation, 110, footerY + 85);

    // 5. Watermark (Enhanced for contrast)
    const watermarkText = "LaoA's AI Lab // 诗外星辰项目";
    ctx.font = '900 20px "Inter", sans-serif';
    ctx.textAlign = 'right';
    
    // Shadow for visibility on light card
    ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
    ctx.shadowBlur = 4;
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;

    ctx.fillStyle = '#1E1B4B';
    ctx.globalAlpha = 0.5;
    ctx.fillText(watermarkText, cardWidth - 80, cardHeight - 80);

    // Export
    const link = document.createElement('a');
    link.download = `poem_card_${selectedWork.title}_${new Date().getTime()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  }, [selectedWork, selectedNode]);

  // Bind to window for UI button
  useEffect(() => {
    (window as any).exportPoemCard = handleExportPoemCard;
    return () => { delete (window as any).exportPoemCard; };
  }, [handleExportPoemCard]);

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-dopa-bg font-sans selection:bg-dopa-pink/30">
      {/* 3D Engine Layer - Fixed Fullscreen */}
      <div className="fixed inset-0 z-0">
        <Stargraph 
          data={currentData}
          isRotating={isRotating}
          onNodeClick={setSelectedNode}
          searchQuery={searchQuery}
          triggerFlip={flipTrigger}
          selectedNodeId={selectedNode?.id}
          triggerExport={exportTrigger}
          onExportFinish={() => setExportTrigger(0)}
        />
      </div>

      {/* UI Overlay Layer */}
      <div className="relative z-10 w-full h-full flex flex-col pointer-events-none p-3 sm:p-6 lg:p-8">
        {/* Header - Strongly Compressed for Mobile */}
        <AnimatePresence>
          {!isFullScreen && (
            <motion.header 
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              className="h-16 sm:h-20 px-4 sm:px-8 clay-card flex items-center justify-between pointer-events-auto bg-white/95 backdrop-blur-sm self-center w-full max-w-7xl !border-[2px]"
            >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-dopa-pink border-[2px] border-clay-dark flex items-center justify-center shadow-[3px_3px_0_#1E1B4B] -rotate-2 hover:rotate-0 transition-all cursor-pointer group shrink-0">
               <Cpu size={20} className="text-white sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
            </div>
            <div className="min-w-0">
              <h1 className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 leading-tight">
                <div className="flex items-center gap-3">
                  <span className="text-lg sm:text-2xl font-[900] tracking-tighter text-clay-dark truncate">诗外星辰</span>
                  <span className="bg-dopa-green text-white text-[8px] sm:text-[10px] px-2 py-0.5 rounded-lg border-[2px] border-clay-dark shadow-[1.5px_1.5px_0_#1E1B4B] whitespace-nowrap">V2.0 简体</span>
                </div>
                <span className="hidden lg:block text-[11px] sm:text-[13px] font-black text-slate-400 uppercase tracking-widest">
                  —— 探索诗词背后的社交宇宙
                </span>
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-8 text-[11px] font-black tracking-[0.1em] uppercase">
              <div className="flex items-center gap-3 px-4 py-2 bg-dopa-yellow rounded-xl border-[2px] border-clay-dark shadow-[3px_3px_0_#1E1B4B]">
                <Sparkles size={14} className="animate-dopa-bounce text-dopa-pink" />
                <span className="text-clay-dark">系统在线</span>
              </div>
              <div className="flex items-center gap-2 text-dopa-pink">
                <Binary size={16} />
                <span>{
                  dynasty === 'song' ? 'DS-大宋核心' : 
                  dynasty === 'tang' ? 'ST-盛唐核心' : 
                  dynasty === 'yuan' ? 'DY-大元核心' :
                  dynasty === 'ming' ? 'DM-大明核心' : 'DQ-大清核心'
                }</span>
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
        </motion.header>
          )}
        </AnimatePresence>

        {/* Viewport content */}
        <div className="flex-1 mt-4 sm:mt-6 relative">
          {/* Desktop Sidebar */}
          <AnimatePresence>
            {isLargeScreen && !isFullScreen && (
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                className="pointer-events-auto h-full w-fit"
              >
                <Sidebar 
                  currentDynasty={dynasty}
                  onDynastyChange={setDynasty}
                  onSearch={handleSearch}
                  isRotating={isRotating}
                  toggleRotate={() => setIsRotating(!isRotating)}
                  onFlip={resetView}
                  onExport={() => setExportTrigger(prev => prev + 1)}
                  isFullScreen={isFullScreen}
                  onToggleFullScreen={() => setIsFullScreen(!isFullScreen)}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {!isFullScreen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="pointer-events-auto"
              >
                <Legend 
                  nodes={currentData.nodes} 
                  onFocus={handleFocus}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Full Screen Exit Button */}
          <AnimatePresence>
            {isFullScreen && (
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
              >
                <button 
                  onClick={() => setIsFullScreen(false)}
                  className="px-6 py-3 bg-white/90 backdrop-blur-md border-[2px] border-clay-dark rounded-2xl flex items-center gap-2 shadow-[4px_4px_0_#1E1B4B] group hover:bg-dopa-pink hover:text-white transition-all font-[900] text-sm uppercase tracking-widest"
                >
                  <Minimize size={18} />
                  <span>退出沉浸全屏</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
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
                className="w-4/5 max-w-sm h-full bg-dopa-bg p-6 flex flex-col border-l-[4px] border-clay-dark"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-dopa-pink border-[2px] border-clay-dark flex items-center justify-center shadow-[3px_3px_0_#1E1B4B]">
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
                    onExport={() => { setExportTrigger(prev => prev + 1); setMobileMenuOpen(false); }}
                    isFullScreen={isFullScreen}
                    onToggleFullScreen={() => { setIsFullScreen(!isFullScreen); setMobileMenuOpen(false); }}
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {selectedNode && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: 20 }}
              className="fixed right-6 lg:right-12 top-24 z-50 w-[90vw] sm:w-80 lg:w-96 clay-card p-4 sm:p-6 bg-white/95 pointer-events-auto shadow-[4px_4px_0_#1E1B4B] border-[2px] border-clay-dark max-h-[calc(100vh-180px)] overflow-y-auto scrollbar-thin overflow-x-hidden"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedNode(null)}
                className="absolute top-4 right-4 p-2 bg-slate-50 hover:bg-slate-100 rounded-full border-[2px] border-clay-dark transition-colors z-20 group"
              >
                <X size={16} className="text-clay-dark group-hover:rotate-90 transition-transform" />
              </button>

              <div className="relative z-10 pt-2">
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl border-[2px] border-clay-dark flex items-center justify-center text-xl sm:text-3xl font-[900] shadow-[2.5px_2.5px_0_#1E1B4B]"
                    style={{ backgroundColor: selectedNode.color }}
                  >
                    <span className="text-white drop-shadow-[2px_2px_0_rgba(0,0,0,0.3)]">{selectedNode.id[0]}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col">
                      <h2 className="text-lg sm:text-2xl font-[900] text-clay-dark tracking-tighter">{selectedNode.id}</h2>
                      {selectedNode.birth && (
                        <span className="text-[10px] font-black text-slate-400 mt-0.5">
                          {selectedNode.birth} - {selectedNode.death || '至今'}
                        </span>
                      )}
                    </div>
                    <div className="mt-2 px-2 py-0.5 bg-dopa-yellow text-[8px] sm:text-[9px] text-clay-dark font-black rounded-md border-[2px] border-clay-dark shadow-[1.5px_1.5px_0_#1E1B4B] uppercase inline-block">
                      影响力: {selectedNode.val}
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 border-[2px] border-clay-dark p-3 rounded-xl mb-4 shadow-inner relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-dopa-pink" />
                  <p className="text-[11px] sm:text-[12px] text-clay-dark leading-relaxed font-bold">
                    {selectedNode.desc || "这位诗人的创作跨越了时代的鸿沟，其作品在中华文化脉络中具有深远的意义。"}
                  </p>
                </div>

                {/* 社交圈 - 深度连接 (Moved above works) */}
                {socialConnections.length > 0 && (
                  <div className="mb-6 pt-4 border-t-2 border-slate-100/50">
                    <div className="text-[8px] font-black text-dopa-blue uppercase tracking-widest mb-3 flex items-center gap-2">
                       <Sparkles size={12} className="text-dopa-blue animate-pulse" />
                       <span>社交名士圈</span>
                    </div>
                    <div className="flex flex-col gap-2.5">
                      {socialConnections.map((conn, i) => (
                        <div 
                          key={i} 
                          className="group cursor-pointer" 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleFocus(conn.node);
                          }}
                        >
                           <div className="flex items-center gap-3 p-2.5 rounded-xl border-[2px] border-slate-100 bg-slate-50/50 hover:border-dopa-blue hover:bg-white transition-all shadow-sm hover:shadow-md active:scale-95 group">
                              <div className="w-8 h-8 rounded-lg border-[2px] border-clay-dark flex-shrink-0 shadow-[1px_1px_0_#1E1B4B] flex items-center justify-center text-[10px] font-black text-white" style={{ backgroundColor: conn.node.color }}>
                                {conn.node.id[0]}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="text-[11px] font-black text-clay-dark group-hover:text-dopa-blue transition-colors">
                                    {conn.node.id}
                                  </span>
                                  {conn.types.map((t: string, ti: number) => (
                                    <span key={ti} className={`text-[7px] px-1.5 py-0.2 rounded-md border font-black uppercase tracking-tighter ${
                                      t === '好友' ? 'bg-dopa-blue/10 text-dopa-blue border-dopa-blue/20' :
                                      t === '师徒' || t === '学生' || t === '老师' ? 'bg-dopa-green/10 text-dopa-green border-dopa-green/20' :
                                      'bg-dopa-pink/10 text-dopa-pink border-dopa-pink/20'
                                    }`}>
                                      {t}
                                    </span>
                                  ))}
                                </div>
                                {conn.descriptions.length > 0 && (
                                  <p className="text-[9px] text-slate-400 line-clamp-1 mt-0.5 font-bold group-hover:text-slate-500">
                                    {conn.descriptions[0]}
                                  </p>
                                )}
                              </div>
                           </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 时空同台 - 自动识别 shared locations */}
                {spatiotemporalOverlaps.length > 0 && (
                  <div className="mb-6 pt-4 border-t-2 border-slate-100/50">
                    <div className="text-[8px] font-black text-dopa-green uppercase tracking-widest mb-3 flex items-center gap-2">
                       <X size={12} className="text-dopa-green animate-bounce" />
                       <span>时空交集点</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {spatiotemporalOverlaps.slice(0, 3).map((overlap, i) => (
                        <div 
                          key={i} 
                          onClick={() => handleFocus(overlap.node)}
                          className="px-2 py-1.5 bg-dopa-green/5 border-[2px] border-clay-dark rounded-lg cursor-pointer hover:bg-dopa-green/10 transition-colors group flex items-center gap-2"
                        >
                          <span className="text-[9px] font-black text-clay-dark">
                            在 <span className="text-dopa-green">{overlap.locations[0]}</span> 偶遇 <span className="text-dopa-blue">{overlap.node.id}</span>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Classic Works Section (Now below social) */}
                {selectedNode.works && selectedNode.works.length > 0 && (
                  <div className="mb-4">
                    <div className="text-[8px] font-black text-dopa-pink uppercase tracking-widest mb-2 flex items-center gap-2">
                      <Star size={10} className="text-dopa-yellow" fill="currentColor" />
                      <span>经典传世作品</span>
                    </div>
                    <div className="space-y-2">
                      {selectedNode.works.map((work: any, idx: number) => (
                        <div 
                          key={idx} 
                          onClick={() => setSelectedWork(work)}
                          className="p-2 bg-white border-[2px] border-clay-dark rounded-lg shadow-[2px_2px_0_#1E1B4B] hover:translate-x-1 transition-transform cursor-pointer group"
                        >
                          <div className="text-[11px] font-[900] text-clay-dark flex justify-between items-center">
                            <span className="flex items-center gap-1">
                              《{work.title}》
                              {work.isGift && (
                                <span 
                                  className="text-[7px] bg-dopa-pink text-white px-1 rounded-sm cursor-help flex items-center gap-0.5"
                                  onClick={(e) => {
                                    if (work.recipientId) {
                                      e.stopPropagation();
                                      const rNode = currentData.nodes.find(n => n.id === work.recipientId);
                                      if (rNode) handleFocus(rNode);
                                    }
                                  }}
                                >
                                  赠 {work.recipientId}
                                </span>
                              )}
                            </span>
                            <span className="text-[8px] text-dopa-pink opacity-0 group-hover:opacity-100 transition-opacity font-black">点读全文</span>
                          </div>
                          <div className="text-[9px] text-slate-500 line-clamp-3 mt-0.5 font-medium italic">
                            {work.content}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-3 pb-2">
                  <div className="bg-dopa-pink/5 border-[2px] border-clay-dark p-2 rounded-xl shadow-[2px_2px_0_#1E1B4B]">
                    <div className="text-[7px] text-dopa-pink font-black uppercase tracking-widest mb-0.5">强度</div>
                    <div className="text-lg font-[900] text-clay-dark">+{selectedNode.val}</div>
                  </div>
                  <div className="bg-dopa-green/5 border-[2px] border-clay-dark p-2 rounded-xl shadow-[2px_2px_0_#1E1B4B]">
                    <div className="text-[7px] text-dopa-green font-black uppercase tracking-widest mb-0.5">集群</div>
                    <div className="text-lg font-[900] text-clay-dark">#{selectedNode.group}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Work Full Text Modal */}
        <AnimatePresence>
          {selectedWork && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-clay-dark/40 backdrop-blur-md pointer-events-auto"
              onClick={() => setSelectedWork(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white border-[2px] border-clay-dark rounded-[2.5rem] shadow-[8px_8px_0_#1E1B4B] max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col relative"
                onClick={(e) => e.stopPropagation()}
                ref={poemCardRef}
              >
                {/* Modal Header */}
                <div className="p-6 border-b-[2px] border-clay-dark flex items-center justify-between bg-slate-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-dopa-pink border-[2px] border-clay-dark flex items-center justify-center shadow-[2px_2px_0_#1E1B4B]">
                      <Sparkles size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-[900] text-clay-dark tracking-tighter">《{selectedWork.title}》</h3>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{selectedNode?.id} · 经典传世</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        // Call global handleExportCard function
                        (window as any).exportPoemCard?.();
                      }}
                      className="p-2 bg-dopa-pink text-white hover:bg-dopa-pink/90 rounded-full border-[2px] border-clay-dark transition-all shadow-[2.5px_2.5px_0_#1E1B4B] active:shadow-none active:translate-x-0.5 active:translate-y-0.5 group mr-2"
                      title="导出此诗句卡片"
                    >
                      <Camera size={18} className="group-hover:scale-110 transition-transform" />
                    </button>
                    <button 
                      onClick={() => setSelectedWork(null)}
                      className="p-2 hover:bg-slate-200 rounded-full border-[2px] border-clay-dark transition-colors group"
                    >
                      <X size={20} className="text-clay-dark group-hover:rotate-90 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Modal Content - Vertical Typography */}
                <div className="flex-1 overflow-x-auto overflow-y-hidden p-8 sm:p-12 flex bg-[#fdfcf8] pattern-dots scrollbar-thin overflow-x-auto">
                  <div className="classical-vertical h-full mx-auto text-2xl sm:text-4xl font-bold text-clay-dark leading-[2] tracking-[0.2em] whitespace-pre-wrap py-2 pr-4 pl-12 min-w-max border-r-[2px] border-slate-100">
                    {selectedWork.content.replace(/([，。！？])/g, '$1\n')}
                  </div>
                </div>

                {/* Modal Footer - Appreciation */}
                <div className="p-6 bg-white border-t-[2px] border-clay-dark">
                  <div className="bg-dopa-blue/5 border-[2px] border-clay-dark p-4 rounded-2xl relative">
                    <div className="absolute -top-3 left-6 px-3 py-0.5 bg-dopa-blue text-[9px] text-white font-black rounded-full border-[2px] border-clay-dark shadow-[1.5px_1.5px_0_#1E1B4B]">
                      文豪赏析
                    </div>
                    <p className="text-sm font-bold text-clay-dark leading-relaxed italic">
                      这首作品展现了{selectedNode?.id}卓越的艺术成就与深厚的人文底蕴，通过凝练的笔触勾勒出旷达而深邃的意境，是中华诗词宝库中璀璨的明珠。
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="fixed bottom-3 right-4 z-[100] text-[7px] sm:text-[9px] text-clay-dark font-[900] uppercase tracking-[0.2em] text-right leading-relaxed pointer-events-none opacity-40">
          <div className="flex items-center justify-end gap-2 drop-shadow-sm">
            <span className="bg-clay-dark/5 px-2 py-0.5 rounded-md border border-clay-dark/10">LaoA's AI Lab // 诗外星辰项目</span>
          </div>
        </div>
      </div>
    </main>
  );
}
