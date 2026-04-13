'use client';

import React, { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Sidebar from '@/components/ui/Sidebar';
import Legend from '@/components/ui/Legend';
import { tangData } from '@/data/tang';
import type { Node, Link } from '@/types';
import type { GestureApi } from '@/components/Stargraph';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Binary, Sparkles, X, Star, Minimize, Camera, Search, Settings, BrainCircuit, Key, Globe, Save, History, Play, Pause, ChevronRight, Timer, PenTool, MessageSquare, Swords, ImagePlus, Info, Copy, Check, Hand } from 'lucide-react';

const Stargraph = dynamic(() => import('@/components/Stargraph'), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-dopa-bg z-[100]">
      <div className="w-12 h-12 border-[4px] border-clay-dark border-t-dopa-pink rounded-full animate-spin shadow-[4px_4px_0_#1E1B4B]" />
      <span className="mt-6 text-clay-dark text-sm font-[900] tracking-widest uppercase animate-pulse">正在连接星系网络...</span>
    </div>
  )
});

// v6.0 手势控制器（懒加载，只在全屏+手势模式时挂载）
const GestureController = dynamic(
  () => import('@/components/gesture/GestureController').then((m) => ({ default: m.GestureController })),
  { ssr: false }
);

// 朝代循环顺序
const DYNASTY_ORDER: Array<'tang' | 'song' | 'yuan' | 'ming' | 'qing'> = ['tang', 'song', 'yuan', 'ming', 'qing'];

// 朝代中文名（用于切换提示）
const DYNASTY_NAMES: Record<string, string> = {
  tang: '唐朝', song: '宋朝', yuan: '元朝', ming: '明朝', qing: '清朝',
};

export default function Home() {
  const [dynasty, setDynasty] = useState<'song' | 'tang' | 'yuan' | 'ming' | 'qing'>('tang');
  const [searchQuery, setSearchQuery] = useState('');
  const [isRotating, setIsRotating] = useState(true);
  const [selectedNode, setSelectedNode] = useState<any>(null);
  const [selectedWork, setSelectedWork] = useState<any | null>(null);
  const [flipTrigger, setFlipTrigger] = useState(1);
  const [exportTrigger, setExportTrigger] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [viewMode, setViewMode] = useState<'day' | 'night'>('night');
  const [showContemporary, setShowContemporary] = useState(true);

  // v6.0 手势控制 States
  const [isGestureMode, setIsGestureMode] = useState(false);
  const [gestureSelectPos, setGestureSelectPos] = useState<{ x: number; y: number } | null>(null);
  const [showGestureTutorial, setShowGestureTutorial] = useState(false);
  /** 命令式手势 API ref：手势 hook 直接写速度，Stargraph 内部 rAF 消费，绕开 React 状态管道 */
  const gestureApiRef = useRef<GestureApi | null>(null);
  /** 握拳手势节点缩放比例（1=正常，0.08=握拳收入手心） */
  const [nodeScale, setNodeScale] = useState(1);

  // 朝代切换提示弹框
  const [dynastyToast, setDynastyToast] = useState<string | null>(null);
  const dynastyToastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dynastyInitRef = useRef(false);

  // Timeline States
  const [isTimelineMode, setIsTimelineMode] = useState(false);
  const [currentYear, setCurrentYear] = useState(750);
  const [isPlaying, setIsPlaying] = useState(false);

  const dynastyYears: Record<string, { start: number, end: number }> = useMemo(() => ({
    tang: { start: 618, end: 907 },
    song: { start: 960, end: 1279 },
    yuan: { start: 1271, end: 1368 },
    ming: { start: 1368, end: 1644 },
    qing: { start: 1644, end: 1912 }
  }), []);

  useEffect(() => {
    setCurrentYear(dynastyYears[dynasty].start);
    setIsPlaying(false);
  }, [dynasty, dynastyYears]);

  // 朝代切换提示：跳过首次渲染，之后每次 dynasty 变化显示 2s toast
  useEffect(() => {
    if (!dynastyInitRef.current) {
      dynastyInitRef.current = true;
      return;
    }
    if (dynastyToastTimerRef.current) clearTimeout(dynastyToastTimerRef.current);
    setDynastyToast(dynasty);
    dynastyToastTimerRef.current = setTimeout(() => setDynastyToast(null), 2000);
  }, [dynasty]);

  useEffect(() => {
    let interval: any;
    if (isPlaying && isTimelineMode) {
      interval = setInterval(() => {
        setCurrentYear(prev => {
          if (prev >= dynastyYears[dynasty].end) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, isTimelineMode, dynasty, dynastyYears]);

  // AI Appreciation States
  const [showSettings, setShowSettings] = useState(false);
  const [llmConfig, setLlmConfig] = useState<{
    apiKey: string;
    baseUrl: string;
    model: string;
    imageApiKey?: string;
    imageBaseUrl?: string;
    imageModel?: string;
  } | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState('');
  const [isAnalysisModalOpen, setIsAnalysisModalOpen] = useState(false);

  // AI Detail (Expand) States
  const [isDetailing, setIsDetailing] = useState(false);
  const [aiDetailContent, setAiDetailContent] = useState('');
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  // AI Imitate Poem (Card) States
  const [poemTopic, setPoemTopic] = useState('');
  const [isPoeming, setIsPoeming] = useState(false);
  const [aiPoemContent, setAiPoemContent] = useState('');
  const [isPoemInputModalOpen, setIsPoemInputModalOpen] = useState(false);
  const [isPoemResultModalOpen, setIsPoemResultModalOpen] = useState(false);

  // Global AI Poem States
  const [isGlobalPoemModalOpen, setIsGlobalPoemModalOpen] = useState(false);
  const [globalPoemParams, setGlobalPoemParams] = useState({ dynasty: 'tang', emotion: '豪放', topic: '' });
  const [isGlobalPoeming, setIsGlobalPoeming] = useState(false);
  const [globalPoemContent, setGlobalPoemContent] = useState('');
  const [isGlobalPoemResultOpen, setIsGlobalPoemResultOpen] = useState(false);

  // AI Scene Director States
  const [isSceneGenerating, setIsSceneGenerating] = useState(false);
  const [sceneImageUrl, setSceneImageUrl] = useState('');
  const [isSceneModalOpen, setIsSceneModalOpen] = useState(false);
  const [scenePrompt, setScenePrompt] = useState('');

  // Spatiotemporal Chat States
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [chatParticipantA, setChatParticipantA] = useState('李白');
  const [chatParticipantB, setChatParticipantB] = useState('杜甫');
  const [chatTopic, setChatTopic] = useState('');
  const [aiChatContent, setAiChatContent] = useState('');
  const [isChatResultOpen, setIsChatResultOpen] = useState(false);
  const [isChatting, setIsChatting] = useState(false);

  // Poetry Game States
  const [isGameModalOpen, setIsGameModalOpen] = useState(false);
  const [gameHistory, setGameHistory] = useState<{isUser: boolean, text: string}[]>([]);
  const [gameInput, setGameInput] = useState('');
  const [isGaming, setIsGaming] = useState(false);

  const poemCardRef = useRef<HTMLDivElement>(null);
  const poemContentRef = useRef<HTMLDivElement>(null);

  // Load Config
  useEffect(() => {
    const saved = localStorage.getItem('poet_stargraph_llm_config');
    if (saved) {
      try {
        setLlmConfig(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse LLM config');
      }
    }
  }, []);

  useEffect(() => {
    const checkScreen = () => setIsLargeScreen(window.innerWidth >= 1024);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  type DynastyData = { nodes: Node[], links: Link[] };
  const [currentData, setCurrentData] = useState<DynastyData>(tangData);

  // Moved below resetView definition to fix lint error


  // Update currentData filtering for timeline
  const filteredGraphData = useMemo(() => {
    if (!isTimelineMode) return currentData;
    
    const nodes = currentData.nodes.filter(n => (n.birth || 0) <= currentYear);
    const nodeIds = new Set(nodes.map(n => n.id));
    
    const links = currentData.links.filter(l => {
      const s = typeof l.source === 'string' ? l.source : (l.source as any).id;
      const t = typeof l.target === 'string' ? l.target : (l.target as any).id;
      return nodeIds.has(s) && nodeIds.has(t);
    });
    
    return { nodes, links };
  }, [currentData, isTimelineMode, currentYear]);

  const resetView = useCallback(() => {
    setFlipTrigger(prev => prev + 1);
  }, []);

  // v6.0 手势指令分发器
  const handleGestureCommand = useCallback((cmd: { type: string; payload?: unknown }) => {
    switch (cmd.type) {
      case 'ROTATE': {
        // 直接写入 Stargraph 的速度 ref，不经过 React 状态，零延迟
        const delta = cmd.payload as { azimuth: number; polar: number };
        gestureApiRef.current?.addRotateVelocity(delta.azimuth, delta.polar);
        break;
      }
      case 'ZOOM':
        gestureApiRef.current?.addZoom(cmd.payload as number);
        break;
      case 'SELECT_NODE': {
        const nodeId = cmd.payload as string;
        const node = currentData.nodes.find((n: any) => n.id === nodeId);
        if (node) setSelectedNode(node);
        break;
      }
      case 'NEXT_DYNASTY': {
        const idx = DYNASTY_ORDER.indexOf(dynasty);
        const next = DYNASTY_ORDER[(idx + 1) % DYNASTY_ORDER.length];
        setDynasty(next);
        break;
      }
      case 'PREV_DYNASTY': {
        const idx = DYNASTY_ORDER.indexOf(dynasty);
        const prev = DYNASTY_ORDER[(idx - 1 + DYNASTY_ORDER.length) % DYNASTY_ORDER.length];
        setDynasty(prev);
        break;
      }
      case 'RESET_VIEW':
        resetView();
        break;
      case 'TOGGLE_ROTATE':
        setIsRotating((r) => !r);
        break;
      case 'TOGGLE_FULLSCREEN':
        setIsFullScreen((f) => !f);
        break;
      case 'TOGGLE_TUTORIAL':
        setShowGestureTutorial((v) => !v);
        break;
      case 'CLOSE_PANEL':
        setSelectedNode(null);
        setSelectedWork(null);
        break;
      case 'SHRINK_NODES':
        setNodeScale(0.08);
        break;
      case 'RESTORE_NODES':
        setNodeScale(1);
        break;
      case 'GESTURE_TAP': {
        // 食指停留触发：将屏幕坐标传给 Stargraph，由其内部 Raycaster 命中节点
        const pos = cmd.payload as { x: number; y: number };
        setGestureSelectPos(pos);
        setTimeout(() => setGestureSelectPos(null), 100);
        break;
      }
    }
  }, [currentData, dynasty, resetView]);

  const handleSearch = useCallback((q: string) => {
    setSearchQuery(q);
  }, []);

  const handleFocus = useCallback((node: any) => {
    const targetId = typeof node === 'string' ? node : node.id;
    setSearchQuery(targetId);
    
    // Retrieve full node data (with birth/death ranges) from the dataset
    const fullNode = currentData.nodes.find((n: any) => n.id === targetId) || node;
    setSelectedNode(fullNode);
    setMobileMenuOpen(false);
  }, [currentData]);

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

  // Dynamic import for non-default dynasties (Moved here to fix lint error)
  useEffect(() => {
    let cancelled = false;
    if (dynasty === 'tang') {
      setCurrentData(tangData);
      return;
    }
    const loaders: Record<string, () => Promise<{ [key: string]: DynastyData }>> = {
      song: () => import('@/data/song'),
      yuan: () => import('@/data/yuan'),
      ming: () => import('@/data/ming'),
      qing: () => import('@/data/qing'),
    };
    loaders[dynasty]().then(mod => {
      if (!cancelled) {
        const key = `${dynasty}Data`;
        setCurrentData((mod as any)[key]);
        // Auto-reset view perspective when dynasty changes
        resetView();
      }
    });
    return () => { cancelled = true; };
  }, [dynasty, resetView]);

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
    ctx.fillText(`${selectedNode.id} · 经典传世作品`, cardWidth / 2, 175);

    // 2.5 Border/Frame
    ctx.strokeStyle = '#1E1B4B';
    ctx.lineWidth = 40;
    ctx.strokeRect(20, 20, cardWidth - 40, cardHeight - 40);
    
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 4;
    ctx.strokeRect(60, 60, cardWidth - 120, cardHeight - 120);

    // 3. Vertical Text Content (The core)
    ctx.fillStyle = '#1E1B4B';
    
    // Dynamic Font Size logic
    const contentText = selectedWork.content;
    let fontSize = 42;
    if (contentText.length > 50) fontSize = 36;
    if (contentText.length > 100) fontSize = 28;
    if (contentText.length > 200) fontSize = 22;
    
    ctx.font = `bold ${fontSize}px "Noto Serif SC", serif`;
    const content = selectedWork.content.split(/[。！？]/).filter(Boolean).map((s: string) => s + '。');
    
    const startX = cardWidth - 150;
    const startY = 220;
    const columnGap = fontSize * 1.8;
    const charGap = fontSize * 1.2;
    
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
    ctx.fillText(watermarkText, cardWidth - 80, cardHeight - 40);

    // Export
    const link = document.createElement('a');
    link.download = `poem_card_${selectedWork.title}_${new Date().getTime()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  }, [selectedWork, selectedNode]);

  // Bind to window for UI button
  useEffect(() => {
    (window as any).exportPoemCard = handleExportPoemCard;
    (window as any).showSettings = () => setShowSettings(true);
    return () => { 
      delete (window as any).exportPoemCard;
      delete (window as any).showSettings;
    };
  }, [handleExportPoemCard]);

  // Auto-scroll poem content to the right (start) when a new work is selected
  useEffect(() => {
    if (selectedWork && poemContentRef.current) {
        const el = poemContentRef.current;
        el.scrollLeft = el.scrollWidth;
        setAiAnalysis(''); // Reset analysis when new work selected
    }
  }, [selectedWork]);

  const streamAiResponse = async (prompt: string, onChunk: (text: string) => void, onError: (msg: string) => void, options: { stream?: boolean } = { stream: true }) => {
    try {
      const response = await fetch('/api/ai-proxy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          baseUrl: llmConfig?.baseUrl,
          apiKey: llmConfig?.apiKey,
          model: llmConfig?.model,
          messages: [{ role: 'user', content: prompt }],
          stream: options.stream
        })
      });

      if (!response.ok) {
        const data = await response.json();
        if (data.error === 'CONFIG_REQUIRED') {
          setShowSettings(true);
          onError('CONFIG_REQUIRED');
          return;
        }
        throw new Error(data.error || 'API request failed');
      }

      // Handle non-streaming response
      if (options.stream === false) {
        const data = await response.json();
        const content = data.choices[0]?.message?.content || '';
        onChunk(content);
        return;
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      let accumulatedContent = '';
      let lastUpdateTime = Date.now();
      
      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() || '';
          
          for (const line of lines) {
            const trimmedLine = line.trim();
            if (trimmedLine.startsWith('data: ')) {
              const dataStr = trimmedLine.substring(6).trim();
              if (dataStr === '[DONE]') break;
              try {
                const data = JSON.parse(dataStr);
                const content = data.choices[0]?.delta?.content || '';
                accumulatedContent += content;
                
                // Batch updates to UI to avoid high-frequency re-renders (every 200ms)
                if (Date.now() - lastUpdateTime > 200) {
                  onChunk(accumulatedContent);
                  accumulatedContent = '';
                  lastUpdateTime = Date.now();
                }
              } catch (e) {}
            }
          }
        }
        // Final flush
        if (accumulatedContent) {
          onChunk(accumulatedContent);
        }
      }
    } catch (error) {
      console.error('Analysis failed:', error);
      onError('请求失败，请检查 API 配置及网络。');
    }
  };

  const handleDeepAnalysis = useCallback(async () => {
    if (!selectedWork) return;
    if (isAnalyzing) {
      setIsAnalysisModalOpen(true);
      return;
    }
    setIsAnalyzing(true);
    setAiAnalysis('');
    setIsAnalysisModalOpen(true);
    
    const prompt = `你是一位精通唐宋文学的评论家。请你对以下这首诗进行深度赏析：\n《${selectedWork.title}》\n${selectedWork.content}\n作者：${selectedNode?.id}\n请从情感意境、文学技巧、历史背景三个维度进行分析，言简意赅，富有诗意。`;
    
    let currentAnalysis = '';
    await streamAiResponse(prompt, (chunk) => {
      currentAnalysis += chunk;
      setAiAnalysis(currentAnalysis);
    }, (err) => {
      if (err !== 'CONFIG_REQUIRED' && currentAnalysis === '') {
        setAiAnalysis('抱歉，深度赏析连接失败。请检查您的 API 配置及网络连通性。');
      } else if (err === 'CONFIG_REQUIRED') {
        setIsAnalysisModalOpen(false);
      }
    });
    setIsAnalyzing(false);
  }, [selectedWork, selectedNode, llmConfig]);

  const handleDetailAnalysis = useCallback(async () => {
    if (!selectedNode) return;
    if (isDetailing) {
      setIsDetailModalOpen(true);
      return;
    }
    setIsDetailing(true);
    setAiDetailContent('');
    setIsDetailModalOpen(true);
    
    const prompt = `你是一位深谙中国古代文学史的学者。请详细介绍诗人【${selectedNode.id}】的生平。特别要注意，请重点讲述他的社交圈，与其他名士的交集与逸事。要求：文辞优美、富有历史画面感、言简意赅（字数控制在500字以内）。`;
    
    let currentDetail = '';
    await streamAiResponse(prompt, (chunk) => {
      currentDetail += chunk;
      setAiDetailContent(currentDetail);
    }, (err) => {
      if (err !== 'CONFIG_REQUIRED' && currentDetail === '') {
        setAiDetailContent('网络连接失败...请检查配置。');
      } else if (err === 'CONFIG_REQUIRED') {
        setIsDetailModalOpen(false);
      }
    });
    setIsDetailing(false);
  }, [selectedNode, llmConfig]);

  const handleImitatePoem = useCallback(async () => {
    if (!selectedNode || !poemTopic) return;
    setIsPoemInputModalOpen(false);
    setIsPoeming(true);
    setAiPoemContent('');
    setIsPoemResultModalOpen(true);
    
    const prompt = `请你模仿【${selectedNode.id}】的创作风格、惯用意象和体裁，以“【${poemTopic}】”为题，创作一首诗（或词）。要求：完全契合该诗人的艺术特色，并简单用一句话解释为什么这样写符合他的风格。`;
    
    let currentPoem = '';
    await streamAiResponse(prompt, (chunk) => {
      currentPoem += chunk;
      setAiPoemContent(currentPoem);
    }, (err) => {
      if (err !== 'CONFIG_REQUIRED' && currentPoem === '') {
        setAiPoemContent('创作失败，未接通灵韵...请检查配置。');
      } else if (err === 'CONFIG_REQUIRED') {
        setIsPoemResultModalOpen(false);
      }
    });
    setIsPoeming(false);
  }, [selectedNode, poemTopic, llmConfig]);

  const handleGlobalPoem = useCallback(async () => {
    if (!globalPoemParams.topic) return;
    setIsGlobalPoemModalOpen(false);
    setIsGlobalPoeming(true);
    setGlobalPoemContent('');
    setIsGlobalPoemResultOpen(true);
    
    const prompt = `你是一个精通中国古典诗词的 AI 诗仙。请根据以下设定创作一首古体诗或词：\n朝代基调：【${globalPoemParams.dynasty}】\n情感倾向：【${globalPoemParams.emotion}】\n主题：【${globalPoemParams.topic}】\n要求：平仄押韵，意境深远，并给出简短的创作赏析。`;
    
    let currentPoem = '';
    await streamAiResponse(prompt, (chunk) => {
      currentPoem += chunk;
      setGlobalPoemContent(currentPoem);
    }, (err) => {
      if (err !== 'CONFIG_REQUIRED' && currentPoem === '') {
        setGlobalPoemContent('创作失败，未接通灵韵...请检查配置。');
      } else if (err === 'CONFIG_REQUIRED') {
        setIsGlobalPoemResultOpen(false);
      }
    });
    setIsGlobalPoeming(false);
  }, [globalPoemParams, llmConfig]);

  const handleGame = useCallback(async () => {
    if (!gameInput.trim() || isGaming) return;
    
    const newUserMsg = { isUser: true, text: gameInput };
    const newHistory = [...gameHistory, newUserMsg];
    setGameHistory(newHistory);
    setGameInput('');
    setIsGaming(true);
    
    // Add a placeholder for AI's response
    setGameHistory(prev => [...prev, { isUser: false, text: '' }]);
    
    const historyText = newHistory.map(h => `${h.isUser ? '我' : 'AI'}: ${h.text}`).join('\n');
    
    const prompt = `你是一个精通中国古典诗词的AI飞花令高手。我们正在进行飞花令（或者诗词对答）游戏。\n以下是我们的历史对话：\n${historyText}\n请你根据我最后一句说出的诗句，对答一句（确保包含同样的主题字或继续接龙），或者如果我只是闲聊，请用诗意的语言引导我开始游戏。\n回答要求：\n1. 只给出你的对答，不要有多余的解释，除非你想指出我用错了。\n2. 保持古风，言简意赅。`;

    let currentResponse = '';
    await streamAiResponse(prompt, (chunk) => {
      currentResponse += chunk;
      setGameHistory(prev => {
        const next = [...prev];
        next[next.length - 1].text = currentResponse;
        return next;
      });
    }, (err) => {
      if (err !== 'CONFIG_REQUIRED' && currentResponse === '') {
        setGameHistory(prev => {
          const next = [...prev];
          next[next.length - 1].text = '飞花令连接中断...请检查网络。';
          return next;
        });
      }
    });
    setIsGaming(false);
  }, [gameInput, gameHistory, isGaming, llmConfig]);

  const handleGenerateScene = useCallback(async (work: {title: string, content: string}) => {
    setIsSceneModalOpen(true);
    setIsSceneGenerating(true);
    setScenePrompt('');
    
    const prompt = `你是一个专业的电影美术指导和AI绘画提示词（Prompt）专家。请根据以下诗词，为你心中的一幅画幅或者几个分镜头构思精美的视觉画面，并写出详细的画面描述和英文提示词（包括主体、背景、色彩风格、灯光、材质等）：\n【${work.title}】\n${work.content}\n\n要求：\n1. 中英文对照，提取诗中最具画面感的意象。\n2. 画风偏古风、数字艺术或高级水墨。\n3. **特别要求：请提炼诗中两句最精华的诗句，并构思如何将这两句诗以书法形式巧妙地融入画面之中。**\n4. 直接输出描述及Prompt。`;

    let currentPrompt = '';
    await streamAiResponse(prompt, (chunk) => {
      currentPrompt += chunk;
      setScenePrompt(currentPrompt);
    }, (err) => {
      if (err !== 'CONFIG_REQUIRED' && currentPrompt === '') {
        setScenePrompt('画境重构失败...请检查神枢配置。');
      } else if (err === 'CONFIG_REQUIRED') {
        setIsSceneModalOpen(false);
      }
    });
    setIsSceneGenerating(false);
  }, [llmConfig]);

  const handleChat = useCallback(async () => {
    if (!chatParticipantA || !chatParticipantB || !chatTopic) return;
    setIsChatModalOpen(false);
    setIsChatting(true);
    setAiChatContent('');
    setIsChatResultOpen(true);
    
    const prompt = `你是一个深谙中国历史和古典文学的剧作者。请模拟【${chatParticipantA}】和【${chatParticipantB}】两位文豪，跨越时空，就“${chatTopic}”展开一场精彩的对话。\n要求：\n1. 请交替发言，例如格式为：\n${chatParticipantA}：……\n${chatParticipantB}：……\n2. 对话要符合他们各自的历史背景、性格特点和文学风格。\n3. 语言以半文半白或富有诗意的现代文为主，字数在500字左右。`;
    
    let currentChat = '';
    await streamAiResponse(prompt, (chunk) => {
      currentChat += chunk;
      setAiChatContent(currentChat);
    }, (err) => {
      if (err !== 'CONFIG_REQUIRED' && currentChat === '') {
        setAiChatContent('时空虫洞开启失败...请检查配置。');
      } else if (err === 'CONFIG_REQUIRED') {
        setIsChatResultOpen(false);
      }
    });
    setIsChatting(false);
  }, [chatParticipantA, chatParticipantB, chatTopic, llmConfig]);

  return (
    <main className={`relative w-screen h-screen overflow-hidden font-sans selection:bg-dopa-pink/30 ${isGestureMode ? 'bg-transparent' : `transition-colors duration-700 ${viewMode === 'day' ? 'bg-[#FFFFFF]' : 'bg-[#0B0B1E]'}`}`}>
      {/* v6.0 手势控制器 (位于最底层以提供背景) */}
      <GestureController
        isActive={isGestureMode && isFullScreen}
        onCommand={handleGestureCommand}
        showTutorial={showGestureTutorial}
        onToggleTutorial={() => setShowGestureTutorial((v) => !v)}
        nodeScreenPositions={[]} // 默认为空，如需精确点击可在此注入汇总坐标
      />

      {/* 3D Engine Layer - Fixed Fullscreen */}
      <div className="fixed inset-0 z-[5]">
        <Stargraph
          data={filteredGraphData}
          isRotating={isRotating}
          onNodeHover={() => {}}
          onNodeClick={setSelectedNode}
          searchQuery={searchQuery}
          triggerFlip={flipTrigger}
          selectedNodeId={selectedNode?.id}
          triggerExport={exportTrigger}
          onExportFinish={() => setExportTrigger(0)}
          viewMode={viewMode}
          showContemporary={showContemporary}
          gestureApiRef={gestureApiRef}
          gestureSelectPos={gestureSelectPos}
          nodeScale={nodeScale}
        />
      </div>

      {/* UI Overlay Layer */}
      <div className="relative z-[50] w-full h-full flex flex-col pointer-events-none p-3 sm:p-6 lg:p-8">
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
                  {/* Version Badge - Hidden on very small mobile to make room for toggle */}
                  <span className="hidden sm:block bg-dopa-green text-white text-[8px] sm:text-[10px] px-2 py-0.5 rounded-lg border-[2px] border-clay-dark shadow-[1.5px_1.5px_0_#1E1B4B] whitespace-nowrap">V4.0 简体</span>
                  
                  {/* Theme Toggle for Mobile - Replaces version badge on small screens */}
                  <button 
                    onClick={() => setViewMode(viewMode === 'day' ? 'night' : 'day')}
                    className={`sm:hidden flex items-center gap-1.5 px-2 h-8 rounded-lg border-[2px] border-clay-dark shadow-[1.5px_1.5px_0_#1E1B4B] active:shadow-none active:translate-x-0.5 active:translate-y-0.5 transition-all ${
                      viewMode === 'day' ? 'bg-dopa-yellow text-clay-dark' : 'bg-clay-dark text-white'
                    }`}
                  >
                    {viewMode === 'day' ? (
                      <>
                        <Sparkles size={12} className="text-dopa-pink" />
                        <span className="text-[10px] font-black">昼</span>
                      </>
                    ) : (
                      <>
                        <Star size={12} className="text-dopa-yellow" fill="currentColor" />
                        <span className="text-[10px] font-black">夜</span>
                      </>
                    )}
                  </button>
                </div>
                <span className="hidden lg:block text-[11px] sm:text-[13px] font-black text-slate-400 uppercase tracking-widest">
                  —— 探索诗词背后的社交宇宙
                </span>
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-8 text-[11px] font-black tracking-[0.1em] uppercase">
              {/* Search Bar in Header - Desktop */}
              <div className="relative group w-64 xl:w-80">
                <input 
                  type="text"
                  placeholder="搜索文豪..."
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full bg-slate-50 border-[2px] border-clay-dark rounded-xl px-10 py-2 text-[12px] font-black focus:outline-none focus:ring-4 focus:ring-dopa-blue/10 transition-all placeholder:text-slate-400 text-clay-dark shadow-[2px_2px_0_#1E1B4B]"
                />
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-clay-dark/30 group-focus-within:text-dopa-blue transition-colors" size={14} />
              </div>

              <button 
                onClick={() => setViewMode(viewMode === 'day' ? 'night' : 'day')}
                className={`flex items-center gap-3 px-4 py-2 rounded-xl border-[2px] border-clay-dark shadow-[3px_3px_0_#1E1B4B] transition-all active:shadow-none active:translate-x-0.5 active:translate-y-0.5 ${
                  viewMode === 'day' ? 'bg-dopa-yellow text-clay-dark' : 'bg-clay-dark text-white'
                }`}
              >
                {viewMode === 'day' ? (
                  <>
                    <Sparkles size={14} className="animate-dopa-bounce text-dopa-pink" />
                    <span>昼际模式</span>
                  </>
                ) : (
                  <>
                    <Star size={14} className="text-dopa-yellow animate-pulse" fill="currentColor" />
                    <span>宵际模式</span>
                  </>
                )}
              </button>
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
            {/* Desktop toggle hidden as per request */}

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
                className="pointer-events-auto h-full max-h-[calc(100vh-140px)] w-fit overflow-y-auto scrollbar-hide no-scrollbar pb-20 px-1"
              >
                <Sidebar 
                  currentDynasty={dynasty}
                  onDynastyChange={setDynasty}
                  isRotating={isRotating}
                  toggleRotate={() => setIsRotating(!isRotating)}
                  onFlip={resetView}
                  onExport={() => setExportTrigger(prev => prev + 1)}
                  isFullScreen={isFullScreen}
                  onToggleFullScreen={() => setIsFullScreen(!isFullScreen)}
                  viewMode={viewMode}
                  isTimelineMode={isTimelineMode}
                  onToggleTimeline={() => {
                    const nextMode = !isTimelineMode;
                    setIsTimelineMode(nextMode);
                    if (nextMode) setIsPlaying(true);
                  }}
                  onShowSettings={() => setShowSettings(true)}
                  showContemporary={showContemporary}
                  onToggleContemporary={() => setShowContemporary(v => !v)}
                  onOpenGlobalPoem={() => { if (isGlobalPoeming) setIsGlobalPoemResultOpen(true); else setIsGlobalPoemModalOpen(true); }}
                  onOpenChat={() => { if (isChatting) setIsChatResultOpen(true); else setIsChatModalOpen(true); }}
                  onOpenGame={() => setIsGameModalOpen(true)}
                  onOpenAbout={() => setIsAboutModalOpen(true)}
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




        </div>

        {/* Improved Mobile Sidebar Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && !isLargeScreen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-clay-dark/80 lg:bg-clay-dark/60 lg:backdrop-blur-md flex justify-end pointer-events-auto"
              onClick={() => setMobileMenuOpen(false)}
            >
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className={`w-4/5 max-w-sm h-full p-6 flex flex-col border-l-[4px] border-clay-dark ${
                  viewMode === 'night' ? 'bg-[#0B0B1E] text-white' : 'bg-white'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-dopa-pink border-[2px] border-clay-dark flex items-center justify-center shadow-[3px_3px_0_#1E1B4B]">
                      <Cpu size={20} className="text-white" />
                    </div>
                    <span className={`text-xl font-[900] tracking-tighter ${viewMode === 'night' ? 'text-white' : 'text-clay-dark'}`}>控制台</span>
                  </div>
                  <button onClick={() => setMobileMenuOpen(false)} className="w-10 h-10 rounded-xl border-[2px] border-clay-dark bg-white text-clay-dark flex items-center justify-center shadow-[2px_2px_0_#1E1B4B] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all">
                    <X size={20} />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto pr-2 scrollbar-hide no-scrollbar pb-20">
                  <Sidebar
                    currentDynasty={dynasty}
                    onDynastyChange={(d) => { setDynasty(d); setMobileMenuOpen(false); }}
                    isRotating={isRotating}
                    toggleRotate={() => setIsRotating(!isRotating)}
                    onFlip={() => { resetView(); setMobileMenuOpen(false); }}
                    onExport={() => { setExportTrigger(prev => prev + 1); setMobileMenuOpen(false); }}
                    isFullScreen={isFullScreen}
                    onToggleFullScreen={() => { setIsFullScreen(!isFullScreen); setMobileMenuOpen(false); }}
                    viewMode={viewMode}
                    isTimelineMode={isTimelineMode}
                    onToggleTimeline={() => {
                      const nextMode = !isTimelineMode;
                      setIsTimelineMode(nextMode);
                      if (nextMode) setIsPlaying(true);
                      setMobileMenuOpen(false);
                    }}
                    onShowSettings={() => setShowSettings(true)}
                    showContemporary={showContemporary}
                    onToggleContemporary={() => setShowContemporary(v => !v)}
                    onOpenGlobalPoem={() => { if (isGlobalPoeming) setIsGlobalPoemResultOpen(true); else setIsGlobalPoemModalOpen(true); setMobileMenuOpen(false); }}
                    onOpenChat={() => { if (isChatting) setIsChatResultOpen(true); else setIsChatModalOpen(true); setMobileMenuOpen(false); }}
                    onOpenGame={() => { setIsGameModalOpen(true); setMobileMenuOpen(false); }}
                    onOpenAbout={() => { setIsAboutModalOpen(true); setMobileMenuOpen(false); }}
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
              className="fixed right-6 lg:right-12 top-24 z-50 w-[90vw] sm:w-80 lg:w-96 clay-card p-0 bg-white pointer-events-auto shadow-[4px_4px_0_#1E1B4B] border-[2px] border-clay-dark max-h-[calc(100vh-180px)] flex flex-col overflow-hidden"
            >
              {/* Header with Poet Info and Close Button */}
              <div className="sticky top-0 p-4 sm:p-6 bg-white z-20 border-b-[2px] border-slate-50 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border-[2px] border-clay-dark flex items-center justify-center text-lg sm:text-2xl font-[900] shadow-[2px_2px_0_#1E1B4B] shrink-0"
                    style={{ backgroundColor: selectedNode.color, color: '#fff' }}
                  >
                    {selectedNode.id[0]}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl sm:text-2xl font-[1000] text-clay-dark leading-tight tracking-tight">{selectedNode.id}</h2>
                      <span className="px-1.5 py-0.5 bg-dopa-yellow text-[8px] sm:text-[9px] text-clay-dark font-black rounded-md border-2 border-clay-dark shadow-[1.5px_1.5px_0_#1E1B4B] uppercase whitespace-nowrap mt-1">
                        影响力 {selectedNode.val}
                      </span>
                    </div>
                    {(selectedNode.birth || selectedNode.death) && (
                      <p className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">
                        {selectedNode.birth || '?'}-{selectedNode.death || '?'}
                      </p>
                    )}
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedNode(null)}
                  className="p-2 bg-slate-50 hover:bg-slate-100 rounded-full border-[2px] border-clay-dark transition-colors group"
                >
                  <X size={16} className="text-clay-dark group-hover:rotate-90 transition-transform" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 sm:p-6 scrollbar-thin">
                <div className="relative z-10">
                  <div className="bg-slate-50 border-[2px] border-clay-dark p-3 rounded-xl mb-4 shadow-inner relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-dopa-pink" />
                    <p className="text-[11px] sm:text-[12px] text-clay-dark leading-relaxed font-bold">
                      {selectedNode.desc || "这位诗人的创作跨越了时代的鸿沟，其作品在中华文化脉络中具有深远的意义。"}
                    </p>
                  </div>

                  {/* AI Quick Actions */}
                  <div className="flex gap-2 mb-4">
                    <button
                      onClick={handleDetailAnalysis}
                      className="flex-1 px-3 py-2 bg-dopa-blue/10 hover:bg-dopa-blue/20 text-dopa-blue border-[2px] border-dopa-blue/30 hover:border-dopa-blue rounded-xl font-[900] text-[10px] sm:text-xs transition-colors flex items-center justify-center gap-1.5 active:scale-95"
                    >
                      <Sparkles size={14} className={isDetailing ? 'animate-spin' : 'animate-pulse'} />
                      <span>{isDetailing ? '查看流体...' : '✨ 展开讲讲'}</span>
                    </button>
                    <button
                      onClick={() => { if (isPoeming) setIsPoemResultModalOpen(true); else { setPoemTopic(''); setIsPoemInputModalOpen(true); } }}
                      className="flex-1 px-3 py-2 bg-dopa-pink/10 hover:bg-dopa-pink/20 text-dopa-pink border-[2px] border-dopa-pink/30 hover:border-dopa-pink rounded-xl font-[900] text-[10px] sm:text-xs transition-colors flex items-center justify-center gap-1.5 active:scale-95"
                    >
                      <BrainCircuit size={14} />
                      <span>✍️ 模仿作诗</span>
                    </button>
                  </div>

                  {/* 社交圈 - 深度连接 (Moved above works) */}
                  {socialConnections.length > 0 && (() => {
                    const realConns = socialConnections.filter((c: any) => !c.types.every((t: string) => t === '同时代'));
                    const contemporaryConns = socialConnections.filter((c: any) => c.types.every((t: string) => t === '同时代'));
                    return (
                    <div className="mb-6 pt-4 border-t-2 border-slate-100/50">
                      <div className="text-[8px] font-black text-dopa-blue uppercase tracking-widest mb-3 flex items-center gap-2">
                         <Sparkles size={12} className="text-dopa-blue animate-pulse" />
                         <span>社交名士圈</span>
                      </div>
                      <div className="flex flex-col gap-2.5">
                        {realConns.map((conn: any, i: number) => (
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
                        {contemporaryConns.length > 0 && (
                          <div className="p-2.5 rounded-xl border-[2px] border-slate-100 bg-slate-50/50 text-[11px] font-bold text-slate-500">
                            与{contemporaryConns[0].node.id}等 <span className="font-black text-dopa-blue">{contemporaryConns.length}</span> 位诗人生卒年有交集
                          </div>
                        )}
                      </div>
                    </div>
                    );
                  })()}

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
                              </span>
                              <ChevronRight size={12} className="text-slate-300 group-hover:text-dopa-pink group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <div className="text-[8px] text-slate-400 mt-1 line-clamp-1 font-bold group-hover:text-slate-500 transition-colors">
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
              className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-clay-dark/70 lg:bg-clay-dark/40 lg:backdrop-blur-md pointer-events-auto"
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
                        if (isSceneGenerating) setIsSceneModalOpen(true);
                        else handleGenerateScene(selectedWork);
                      }}
                      className="p-2 bg-dopa-blue text-white hover:bg-dopa-blue/90 rounded-full border-[2px] border-clay-dark transition-all shadow-[2.5px_2.5px_0_#1E1B4B] active:shadow-none active:translate-x-0.5 active:translate-y-0.5 group"
                      title="AI 画境生成描述"
                    >
                      <ImagePlus size={18} className="group-hover:scale-110 transition-transform" />
                    </button>
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
                <div 
                  ref={poemContentRef}
                  className="flex-1 overflow-x-auto overflow-y-hidden p-5 sm:p-12 flex bg-[#fdfcf8] pattern-dots scrollbar-thin"
                >
                  <div className="classical-vertical h-full mx-auto text-xl sm:text-4xl font-bold text-clay-dark leading-[2] tracking-[0.2em] whitespace-pre-wrap py-2 pr-2 pl-6 sm:pr-4 sm:pl-12 min-w-max border-r-[2px] border-slate-100">
                    {selectedWork.content.replace(/([，。！？])/g, '$1\n')}
                  </div>
                </div>

                {/* Modal Footer - Appreciation */}
                <div className="p-4 sm:p-6 bg-white border-t-[2px] border-clay-dark flex flex-col gap-3 sm:gap-4">
                  <div className="bg-dopa-blue/5 border-[2px] border-clay-dark p-3 sm:p-4 rounded-xl sm:rounded-2xl relative mt-2 sm:mt-0">
                    <div className="absolute -top-3 left-4 sm:left-6 px-3 py-0.5 bg-dopa-blue text-[9px] text-white font-black rounded-full border-[2px] border-clay-dark shadow-[1.5px_1.5px_0_#1E1B4B]">
                      文豪赏析
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-clay-dark leading-relaxed italic">
                      这首作品展现了{selectedNode?.id}卓越的艺术成就与深厚的人文底蕴，通过凝练的笔触勾勒出旷达而深邃的意境，是中华诗词宝库中璀璨的明珠。
                    </p>
                  </div>

                  {/* AI Deep Analysis Trigger */}
                  <div className="mt-1 sm:mt-2 w-full sm:w-auto self-end">
                    <button 
                      onClick={handleDeepAnalysis}
                      className="w-full sm:w-auto px-4 py-2 sm:py-2 bg-clay-dark text-white rounded-xl border-[2px] border-clay-dark shadow-[3px_3px_0_#dopa-pink] hover:translate-y-[-2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center gap-2 text-xs font-black"
                    >
                      <BrainCircuit size={14} className={isAnalyzing ? 'animate-spin' : 'animate-pulse'} />
                      <span>{isAnalyzing ? '查看赏析...' : 'AI 深度赏析'}</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="fixed bottom-3 right-4 z-[100] text-[7px] sm:text-[9px] text-white font-[900] uppercase tracking-[0.2em] text-right leading-relaxed pointer-events-none opacity-40">
          <div className="flex items-center justify-end gap-2 drop-shadow-sm">
            <span>LaoA's AI Lab // 诗外星辰项目</span>
          </div>
        </div>

        {/* Global Full Screen UI Elements - Placed at the very end for proper layering and centering */}
        <AnimatePresence>
          {isFullScreen && (
            <>
              {/* Top Unit: Search + Toggle */}
              <motion.div 
                initial={{ opacity: 0, y: -50, x: '-50%' }}
                animate={{ opacity: 1, y: 0, x: '-50%' }}
                exit={{ opacity: 0, y: -50, x: '-50%' }}
                className="fixed top-8 left-1/2 z-[100] pointer-events-auto flex items-center gap-2 p-1.5 bg-white/95 backdrop-blur-md border-[2px] border-clay-dark rounded-2xl shadow-[6px_6px_0_#1E1B4B]"
              >
                <div className="relative group min-w-[180px]">
                  <input 
                    type="text"
                    placeholder="搜索文豪..."
                    onChange={(e) => handleSearch(e.target.value)}
                    value={searchQuery}
                    className="w-full px-4 py-2 pr-10 text-xs sm:text-sm bg-slate-50 border-[2px] border-clay-dark/10 rounded-xl focus:outline-none focus:border-dopa-pink transition-all font-[900] text-clay-dark placeholder:text-slate-400"
                  />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-clay-dark/40 group-focus-within:text-dopa-pink transition-colors" size={14} strokeWidth={2.5} />
                </div>
                
                <div className="w-[2px] h-6 bg-clay-dark/10 mx-1" />

                <button 
                  onClick={() => setViewMode(viewMode === 'day' ? 'night' : 'day')}
                  className={`flex items-center justify-center w-9 h-9 rounded-xl border-[2px] border-clay-dark transition-all active:scale-95 ${
                    viewMode === 'day' ? 'bg-dopa-yellow text-clay-dark' : 'bg-clay-dark text-white'
                  }`}
                >
                  {viewMode === 'day' ? (
                    <Sparkles size={16} className="animate-dopa-bounce text-dopa-pink" />
                  ) : (
                    <Star size={16} className="text-dopa-yellow" fill="currentColor" />
                  )}
                </button>
              </motion.div>

              {/* Bottom Unit: Gesture Button + Exit Button */}
              <motion.div
                initial={{ opacity: 0, y: 50, x: '-50%' }}
                animate={{ opacity: 1, y: 0, x: '-50%' }}
                exit={{ opacity: 0, y: 50, x: '-50%' }}
                className="fixed bottom-10 left-1/2 z-[100] pointer-events-auto flex items-center gap-3"
              >
                {/* 手势控制开关按钮 */}
                <button
                  onClick={() => setIsGestureMode((g) => !g)}
                  className={`px-5 py-3 border-[2px] border-clay-dark rounded-2xl flex items-center gap-2 shadow-[4px_4px_0_#1E1B4B] font-[900] text-sm uppercase tracking-widest active:translate-x-1 active:translate-y-1 active:shadow-none transition-all ${
                    isGestureMode
                      ? 'bg-dopa-pink text-white animate-pulse'
                      : 'bg-white/95 backdrop-blur-md text-clay-dark hover:bg-clay-dark hover:text-white'
                  }`}
                >
                  <Hand size={18} />
                  <span>{isGestureMode ? '手势 ON' : '启动手势'}</span>
                </button>

                <button
                  onClick={() => setIsFullScreen(false)}
                  className="px-8 py-3 bg-white/95 backdrop-blur-md border-[2px] border-clay-dark rounded-2xl flex items-center gap-3 shadow-[6px_6px_0_#1E1B4B] group hover:bg-clay-dark hover:text-white transition-all font-[900] text-sm uppercase tracking-widest active:translate-x-1 active:translate-y-1 active:shadow-none"
                >
                  <Minimize size={18} />
                  <span>退出沉浸全屏</span>
                </button>
              </motion.div>


            </>
          )}
        </AnimatePresence>
      </div>

      {/* Timeline Slider Overlay */}
      <AnimatePresence>
        {isTimelineMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed z-[150] pointer-events-auto transition-all duration-500 ${
              isLargeScreen 
              ? "top-1/2 right-6 -translate-y-1/2 w-[85px] h-[75vh]" 
              : "bottom-8 left-1/2 -translate-x-1/2 w-[90vw] max-w-2xl"
            }`}
          >
            <div className="bg-white/95 backdrop-blur-md border-[3px] border-clay-dark p-3 lg:py-6 lg:px-2 rounded-[1.5rem] lg:rounded-3xl shadow-[4px_4px_0_#1E1B4B] lg:shadow-[8px_8px_0_#1E1B4B] w-full h-full">
              
              {/* === MOBILE LAYOUT (Horizontal) === */}
              <div className="flex lg:hidden flex-col justify-between h-full gap-2">
                {/* Header Info */}
                <div className="flex items-center justify-between px-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-dopa-pink border-[2px] border-clay-dark flex items-center justify-center shadow-[3px_3px_0_#1E1B4B] shrink-0">
                      <History size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-[1000] text-clay-dark tracking-tighter whitespace-nowrap">
                        公元 <span className="text-dopa-pink font-black">{currentYear}</span> 年
                      </h4>
                      <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mt-1">
                         {dynasty === 'tang' ? '大唐盛世' : '大宋风华'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button onClick={() => setIsPlaying(!isPlaying)} className={`w-10 h-10 rounded-full border-[3px] border-clay-dark flex items-center justify-center transition-all active:scale-95 shadow-[4px_4px_0_#1E1B4B] ${isPlaying ? 'bg-dopa-yellow' : 'bg-clay-dark text-white'}`}>
                      {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} className="ml-0.5" fill="currentColor" />}
                    </button>
                    <button onClick={() => setIsTimelineMode(false)} className="p-2 hover:bg-slate-100 rounded-full text-slate-400">
                      <X size={20} />
                    </button>
                  </div>
                </div>

                {/* Slider Area */}
                <div className="px-2 py-1 flex-1 flex flex-col justify-center">
                  <div className="w-full flex items-center justify-center">
                     <input 
                       type="range" min={dynastyYears[dynasty].start} max={dynastyYears[dynasty].end} 
                       value={currentYear} onChange={(e) => { setCurrentYear(parseInt(e.target.value)); setIsPlaying(false); }} 
                       className="w-full h-2.5 bg-slate-100 rounded-full appearance-none cursor-pointer border-[2px] border-clay-dark accent-dopa-pink [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-dopa-pink [&::-webkit-slider-thumb]:border-[2px] [&::-webkit-slider-thumb]:border-clay-dark [&::-webkit-slider-thumb]:shadow-[2px_2px_0_#1E1B4B]" 
                     />
                  </div>
                  
                  {/* Time markers */}
                  <div className="flex justify-between mt-3 text-[9.px] font-black text-slate-400 uppercase tracking-tighter w-full">
                    <span>{dynastyYears[dynasty].start} AD</span>
                    <div className="flex gap-4">
                        <span className="text-dopa-pink/40">初现</span>
                        <span className="text-dopa-pink/60">成长</span>
                        <span className="text-dopa-pink/80">鼎盛</span>
                    </div>
                    <span>{dynastyYears[dynasty].end} AD</span>
                  </div>
                </div>
              </div>

              {/* === DESKTOP LAYOUT (Vertical) === */}
              <div className="hidden lg:flex flex-col items-center justify-between h-full w-full">
                {/* 1. Top Icon */}
                <div className="w-10 h-10 rounded-xl bg-dopa-pink border-[2px] border-clay-dark flex items-center justify-center shadow-[3px_3px_0_#1E1B4B] shrink-0">
                  <History size={18} className="text-white" />
                </div>

                {/* 2. Middle Vertical Slider */}
                <div className="flex-1 w-full my-4 flex flex-col items-center justify-center relative">
                  
                  {/* Start Year directly ABOVE slider */}
                  <span className="text-[10px] font-black text-slate-400 uppercase mb-2">
                    {dynastyYears[dynasty].start}
                  </span>

                  <div className="relative h-full flex justify-center items-center w-full min-h-[38vh]">
                    
                    {/* Slider Wrapper */}
                    <div className="relative w-8 h-full flex items-center justify-center z-20">
                      <input 
                        type="range"
                        min={dynastyYears[dynasty].start}
                        max={dynastyYears[dynasty].end}
                        value={currentYear}
                        onChange={(e) => {
                          setCurrentYear(parseInt(e.target.value));
                          setIsPlaying(false);
                        }}
                        style={{
                          width: "38vh",
                          height: "0.5rem",
                          transformOrigin: "center center",
                          transform: "rotate(90deg)"
                        }}
                        className="absolute bg-slate-100 rounded-full appearance-none cursor-pointer border-[2px] border-clay-dark accent-dopa-pink [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-dopa-pink [&::-webkit-slider-thumb]:border-[2px] [&::-webkit-slider-thumb]:border-clay-dark [&::-webkit-slider-thumb]:shadow-[2px_2px_0_#1E1B4B]"
                      />
                    </div>

                    {/* Right markers (Stages - Top, Center, Bottom) */}
                    <div className="absolute top-1/2 left-[calc(50%+12px)] transform -translate-y-1/2 flex flex-col justify-between h-[95%] text-[10px] sm:text-[11px] font-[1000] text-dopa-pink pointer-events-none z-10">
                      <span className="opacity-40 select-none" style={{ writingMode: 'vertical-rl', letterSpacing: '0.1em' }}>初现</span>
                      <span className="opacity-70 select-none" style={{ writingMode: 'vertical-rl', letterSpacing: '0.1em' }}>成长</span>
                      <span className="opacity-100 select-none" style={{ writingMode: 'vertical-rl', letterSpacing: '0.1em' }}>鼎盛</span>
                    </div>

                  </div>

                  {/* End Year directly BELOW slider */}
                  <span className="text-[10px] font-black text-slate-400 uppercase mt-2">
                    {dynastyYears[dynasty].end}
                  </span>

                </div>

                {/* 3. Bottom Controls */}
                <div className="flex flex-col items-center gap-4 w-full">
                  <div className="text-center flex flex-col items-center gap-1">
                    <h4 className="flex flex-col items-center text-sm font-[1000] text-clay-dark tracking-tighter whitespace-nowrap">
                      <span>公元</span>
                      <span className="text-dopa-pink font-black text-2xl leading-none mt-1">{currentYear}年</span>
                    </h4>
                    <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mt-1">
                       {dynasty === 'tang' ? '大唐盛世' : '大宋风华'}
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-2 mt-2 w-full">
                    <button onClick={() => setIsPlaying(!isPlaying)} className={`w-12 h-12 rounded-full border-[3px] border-clay-dark flex items-center justify-center transition-all active:scale-95 shadow-[4px_4px_0_#1E1B4B] ${isPlaying ? 'bg-dopa-yellow' : 'bg-clay-dark text-white'}`}>
                      {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} className="ml-1" fill="currentColor" />}
                    </button>

                    <button onClick={() => setIsTimelineMode(false)} className="mt-3 text-slate-400 hover:text-clay-dark p-2 hover:bg-slate-100 rounded-full border-[2px] border-transparent hover:border-clay-dark transition-all">
                      <X size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* Engine Settings Modal */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-clay-dark/60 backdrop-blur-md pointer-events-auto"
            onClick={() => setShowSettings(false)}
          >
            <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white border-[3px] border-clay-dark rounded-[2.5rem] shadow-[12px_12px_0_#1E1B4B] max-w-md w-full p-8 relative overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-dopa-pink/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-dopa-blue/10 rounded-full blur-2xl" />

                <div className="flex justify-between items-center mb-8 relative z-10">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-clay-dark flex items-center justify-center shadow-[4px_4px_0_#dopa-pink]">
                            <Settings size={24} className="text-white animate-spin-slow" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-[1000] text-clay-dark tracking-tighter">引擎配置</h3>
                            <p className="text-[10px] font-black text-slate-400 tracking-widest uppercase">V5.0 AI 动力赋能</p>
                        </div>
                    </div>
                    <button onClick={() => setShowSettings(false)} className="p-2 hover:bg-slate-100 rounded-full border-2 border-clay-dark transition-colors">
                        <X size={20} />
                    </button>
                </div>

                <div className="space-y-6 relative z-10">
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-xs font-black text-clay-dark uppercase tracking-widest">
                            <Key size={14} className="text-dopa-pink" />
                            <span>API 秘钥 (Key)</span>
                        </label>
                        <input 
                            type="password"
                            placeholder="sk-..."
                            defaultValue={llmConfig?.apiKey}
                            id="apiKey"
                            className="w-full px-4 py-3 rounded-xl border-[2px] border-clay-dark bg-slate-50 focus:bg-white transition-all font-bold text-sm focus:ring-4 focus:ring-dopa-pink/20"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-xs font-black text-clay-dark uppercase tracking-widest">
                            <Globe size={14} className="text-dopa-blue" />
                            <span>接口基址 (Base URL)</span>
                        </label>
                        <input 
                            type="text"
                            placeholder="https://api.openai.com/v1"
                            defaultValue={llmConfig?.baseUrl || 'https://api.openai.com/v1'}
                            id="baseUrl"
                            className="w-full px-4 py-3 rounded-xl border-[2px] border-clay-dark bg-slate-50 focus:bg-white transition-all font-bold text-sm focus:ring-4 focus:ring-dopa-blue/20"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-xs font-black text-clay-dark uppercase tracking-widest">
                            <BrainCircuit size={14} className="text-dopa-green" />
                            <span>模型名称 (Model)</span>
                        </label>
                        <input 
                            type="text"
                            placeholder="gpt-4 / claude-3-opus"
                            defaultValue={llmConfig?.model || 'gpt-4'}
                            id="model"
                            className="w-full px-4 py-3 rounded-xl border-[2px] border-clay-dark bg-slate-50 focus:bg-white transition-all font-bold text-sm focus:ring-4 focus:ring-dopa-green/20"
                        />
                    </div>

                    <button 
                        onClick={() => {
                            const config = {
                                apiKey: (document.getElementById('apiKey') as HTMLInputElement).value,
                                baseUrl: (document.getElementById('baseUrl') as HTMLInputElement).value,
                                model: (document.getElementById('model') as HTMLInputElement).value,
                            };
                            localStorage.setItem('poet_stargraph_llm_config', JSON.stringify(config));
                            setLlmConfig(config);
                            setShowSettings(false);
                        }}
                        className="w-full py-4 bg-dopa-pink text-white rounded-2xl border-[3px] border-clay-dark shadow-[6px_6px_0_#1E1B4B] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all font-[1000] text-lg uppercase tracking-widest mt-4 flex items-center justify-center gap-2 group"
                    >
                        <Save size={20} className="group-hover:scale-110 transition-transform" />
                        <span>保存配置</span>
                    </button>
                    
                    <p className="text-[9px] text-center text-slate-400 font-bold px-4 leading-relaxed">
                        注意：您的秘钥将加密存储在本地浏览器缓存中，不会经过我们的服务器，请放心使用。
                    </p>
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Deep Analysis Result Modal */}
      <AnimatePresence>
        {isAnalysisModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-clay-dark/60 backdrop-blur-md pointer-events-auto"
            onClick={() => setIsAnalysisModalOpen(false)}
          >
            <div className="w-full h-full flex items-center justify-center p-6 sm:p-10 box-border">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-[#fefaf0] border-[3px] border-clay-dark rounded-2xl shadow-[12px_12px_0_#1E1B4B] w-full max-w-lg relative"
                style={{ maxHeight: 'calc(100vh - 5rem)' }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header - 固定在卡片顶部 */}
                <div className="p-5 pb-3 flex justify-between items-start border-b-[2px] border-clay-dark/10">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-dopa-pink border-[2px] border-clay-dark flex items-center justify-center shadow-[3px_3px_0_#1E1B4B] shrink-0">
                      <BrainCircuit size={22} className="text-white animate-pulse" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[1000] text-clay-dark tracking-tight">AI 深度赏析</h3>
                      <p className="text-[9px] font-black text-dopa-pink uppercase tracking-widest">
                        《{selectedWork?.title}》· {selectedNode?.id}
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setIsAnalysisModalOpen(false)}
                    className="p-2 hover:bg-dopa-pink/10 rounded-full border-[2px] border-clay-dark transition-all active:scale-95 shrink-0"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Content - 独立滚动区 */}
                <div className="overflow-y-auto p-5" style={{ maxHeight: 'calc(100vh - 16rem)' }}>
                  <div className="text-base font-bold text-clay-dark leading-relaxed whitespace-pre-wrap font-serif italic text-justify">
                    {aiAnalysis.trim().replace(/^\n+/, '') || (isAnalyzing ? '正在跨越千年时空，为您呈上文豪的真意...' : '加载失败，请重试。')}
                  </div>
                  <div ref={(el) => el?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })} />
                </div>

                {/* Footer - 固定在卡片底部 */}
                <div className="p-4 pt-3 border-t-[2px] border-clay-dark/10 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                     <Sparkles size={14} className="text-dopa-yellow" />
                     <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest italic">
                       智能解析引擎
                     </span>
                  </div>
                  {aiAnalysis && !isAnalyzing && (
                    <button 
                      onClick={() => setIsAnalysisModalOpen(false)}
                      className="px-5 py-1.5 bg-clay-dark text-white rounded-full font-black text-[9px] uppercase shadow-[3px_3px_0_#1E1B4B] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all"
                    >
                      收起画卷
                    </button>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* AI Detail Modal (Expand) */}
      <AnimatePresence>
        {isDetailModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-clay-dark/60 backdrop-blur-md pointer-events-auto overflow-hidden"
            onClick={() => setIsDetailModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              className="bg-[#fefaf0] border-[4px] border-clay-dark rounded-[2rem] shadow-[16px_16px_0_#1E1B4B] max-w-lg w-[calc(100vw-2.5rem)] sm:w-full max-h-[calc(100vh-2rem)] p-6 relative overflow-hidden flex flex-col gap-3"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-dopa-blue/5 rounded-full -mr-16 -mt-16 blur-3xl" />
              <div className="flex justify-between items-start relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-dopa-blue border-[2px] border-clay-dark flex items-center justify-center shadow-[3px_3px_0_#1E1B4B]">
                    <Sparkles size={24} className="text-white animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-xl font-[1000] text-clay-dark tracking-tighter">生平与名士交集</h3>
                    <p className="text-[10px] font-black text-dopa-blue uppercase tracking-widest mt-0.5">
                      文豪 {selectedNode?.id} 的星辰轨迹
                    </p>
                  </div>
                </div>
                <button onClick={() => setIsDetailModalOpen(false)} className="p-2 hover:bg-slate-200 rounded-full border-[2px] border-clay-dark transition-colors">
                  <X size={16} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto max-h-[50vh] scrollbar-thin relative z-10">
                <div className="text-sm font-bold text-clay-dark leading-relaxed whitespace-pre-wrap text-justify p-1 decoration-dopa-blue/10 underline-offset-4">
                  {aiDetailContent.trim().replace(/^\n+/, '') || (isDetailing ? '正在翻阅前尘往事...' : '加载失败')}
                </div>
                <div ref={(el) => el?.scrollIntoView({ behavior: 'smooth' })} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* About Modal */}
      <AnimatePresence>
        {isAboutModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-clay-dark/70 backdrop-blur-xl pointer-events-auto"
            onClick={() => setIsAboutModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              className="bg-[#fefaf0] border-[4px] border-clay-dark rounded-[2rem] sm:rounded-[2.5rem] shadow-[16px_16px_0_#1E1B4B] sm:shadow-[24px_24px_0_#1E1B4B] max-w-xl w-full max-h-[calc(100vh-2rem)] p-5 sm:p-8 relative overflow-y-auto overflow-x-hidden scrollbar-thin"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative elements */}
              <div className="absolute -top-24 -right-24 w-48 h-48 sm:w-64 sm:h-64 bg-dopa-pink/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 sm:w-64 sm:h-64 bg-dopa-blue/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-5 sm:mb-8">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-clay-dark flex items-center justify-center shadow-[3px_3px_0_#dopa-pink] sm:shadow-[4px_4px_0_#dopa-pink]">
                      <Info size={20} className="text-white sm:hidden" />
                      <Info size={28} className="text-white hidden sm:block" />
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-2xl font-[1000] text-clay-dark tracking-tighter">关于本站</h2>
                      <p className="text-[8px] sm:text-[10px] font-black text-dopa-pink uppercase tracking-[0.1em] sm:tracking-[0.2em] mt-0.5 sm:mt-1">Poet Stargraph / 诗人星图</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setIsAboutModalOpen(false)}
                    className="p-2 sm:p-3 hover:bg-slate-200 rounded-xl sm:rounded-2xl border-[2px] border-clay-dark transition-all active:scale-90"
                  >
                    <X size={16} className="sm:hidden" />
                    <X size={20} className="hidden sm:block" />
                  </button>
                </div>

                <div className="space-y-4 sm:space-y-6 text-clay-dark leading-relaxed font-serif">
                  <p className="text-base sm:text-lg font-bold italic border-l-4 border-dopa-pink pl-3 sm:pl-4 py-0.5 sm:py-1">
                    让跨越千年的诗意，在星辰间重构。
                  </p>
                  
                  <div className="text-xs sm:text-sm font-medium space-y-3 sm:space-y-4 text-justify opacity-95">
                    <p>
                      以前读诗，总觉得那是纸面上的只言片语。想要真正读懂一首诗，往往需要去翻阅诗人的生平、探寻当时的时代大背景、甚至要理清那错综复杂的文人社交圈……这些资料散落在各处，收集起来既繁琐又破碎，这种断裂感常让原有的诗意打了折扣。
                    </p>
                    
                    <p className="font-extrabold text-dopa-pink/90">
                      于是，我做了这个《诗人星图》。
                    </p>
                    
                    <p>
                      把那些伟大的灵魂从故纸堆中请出，放进这一座 3D 交互的数字星系中：
                    </p>
                    
                    <ul className="space-y-2.5 sm:space-y-3 pl-1 sm:pl-2">
                      <li className="flex gap-2.5 sm:gap-3 items-start">
                        <span className="text-dopa-pink shrink-0 mt-0.5">✨</span>
                        <span><b>诗人不再是孤岛</b>：他们是璀璨的星辰，通过作品与交游相互连接。</span>
                      </li>
                      <li className="flex gap-2.5 sm:gap-3 items-start">
                        <span className="text-dopa-blue shrink-0 mt-0.5">🌌</span>
                        <span><b>视角不再是平面</b>：你可以穿梭于朝代星云间，看透千年文脉。</span>
                      </li>
                      <li className="flex gap-2.5 sm:gap-3 items-start">
                        <span className="text-dopa-yellow shrink-0 mt-0.5">🤖</span>
                        <span><b>赏析不再是负担</b>：集成 AI 实时解构意蕴，是你的数智文学顾问。</span>
                      </li>
                    </ul>

                    <p className="pt-3 sm:pt-4 border-t border-clay-dark/10 text-[10px] sm:text-xs italic opacity-60">
                      这不仅是一个技术项目，更是一场沉浸式的文学巡礼，期待与你找回中国文化里最纯粹的共鸣。
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>



      {/* AI Poem Input Modal */}
      <AnimatePresence>
        {isPoemInputModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-clay-dark/60 backdrop-blur-md pointer-events-auto"
            onClick={() => setIsPoemInputModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white border-[3px] border-clay-dark rounded-[2rem] shadow-[12px_12px_0_#1E1B4B] max-w-sm w-[calc(100vw-2.5rem)] sm:w-full p-6 relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-dopa-pink border-[2px] border-clay-dark flex items-center justify-center shadow-[2px_2px_0_#1E1B4B]">
                    <BrainCircuit size={20} className="text-white" />
                  </div>
                  <h3 className="text-xl font-[1000] text-clay-dark tracking-tighter">赋予灵感片段</h3>
                </div>
                <button onClick={() => setIsPoemInputModalOpen(false)} className="p-2 hover:bg-slate-100 rounded-full border-[2px] border-clay-dark transition-colors">
                  <X size={16} />
                </button>
              </div>
              <div className="space-y-4">
                <input 
                  type="text"
                  maxLength={10}
                  placeholder="限制10个字，例如：赛博中秋"
                  value={poemTopic}
                  onChange={(e) => setPoemTopic(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-[2px] border-clay-dark bg-slate-50 focus:bg-white transition-all font-bold text-base sm:text-sm focus:ring-4 focus:ring-dopa-pink/20"
                />
                <button 
                  onClick={handleImitatePoem}
                  disabled={!poemTopic.trim() || poemTopic.length > 10}
                  className="w-full py-3 bg-dopa-pink text-white rounded-xl border-[2px] border-clay-dark shadow-[4px_4px_0_#1E1B4B] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all font-[1000] uppercase tracking-widest disabled:opacity-50"
                >
                  开始创作
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Poem Result Modal */}
      <AnimatePresence>
        {isPoemResultModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-clay-dark/60 backdrop-blur-md pointer-events-auto"
            onClick={() => setIsPoemResultModalOpen(false)}
          >
            <div className="w-full h-full flex items-center justify-center p-6 sm:p-10 box-border">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-[#fefaf0] border-[3px] border-clay-dark rounded-2xl shadow-[12px_12px_0_#1E1B4B] w-full max-w-lg relative"
                style={{ maxHeight: 'calc(100vh - 5rem)' }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="p-5 pb-3 flex justify-between items-start border-b-[2px] border-clay-dark/10">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-dopa-pink border-[2px] border-clay-dark flex items-center justify-center shadow-[3px_3px_0_#1E1B4B] shrink-0">
                      <BrainCircuit size={22} className="text-white animate-pulse" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[1000] text-clay-dark tracking-tight">《{poemTopic}》</h3>
                      <p className="text-[9px] font-black text-dopa-pink uppercase tracking-widest">
                        AI {selectedNode?.id} 仿作
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setIsPoemResultModalOpen(false)} 
                    className="p-2 hover:bg-dopa-pink/10 rounded-full border-[2px] border-clay-dark transition-all active:scale-95 shrink-0"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Content */}
                <div className="overflow-y-auto p-5" style={{ maxHeight: 'calc(100vh - 14rem)' }}>
                  <div className="text-[15px] font-bold text-clay-dark leading-[2] whitespace-pre-wrap font-serif italic text-justify">
                    {aiPoemContent.trim().replace(/^\n+/, '') || (isPoeming ? '落笔生风，稍候片刻...' : '加载失败')}
                  </div>
                  <div ref={(el) => el?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })} />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* Global AI Poem Input Modal */}
      <AnimatePresence>
        {isGlobalPoemModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-clay-dark/60 backdrop-blur-md pointer-events-auto"
            onClick={() => setIsGlobalPoemModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white border-[3px] border-clay-dark rounded-[2rem] shadow-[12px_12px_0_#1E1B4B] max-w-sm w-[calc(100vw-2.5rem)] sm:w-full p-6 relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-dopa-pink border-[2px] border-clay-dark flex items-center justify-center shadow-[2px_2px_0_#1E1B4B]">
                    <PenTool size={20} className="text-white" />
                  </div>
                  <h3 className="text-xl font-[1000] text-clay-dark tracking-tighter">AI 命题作诗</h3>
                </div>
                <button onClick={() => setIsGlobalPoemModalOpen(false)} className="p-2 hover:bg-slate-100 rounded-full border-[2px] border-clay-dark transition-colors">
                  <X size={16} />
                </button>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-black uppercase text-slate-400 mb-1 block">朝代基调</label>
                    <select 
                      value={globalPoemParams.dynasty}
                      onChange={e => setGlobalPoemParams(p => ({ ...p, dynasty: e.target.value }))}
                      className="w-full px-3 py-2 rounded-xl border-[2px] border-clay-dark bg-slate-50 font-bold text-sm focus:outline-none"
                    >
                      <option value="tang">盛唐</option>
                      <option value="song">大宋</option>
                      <option value="yuan">大元</option>
                      <option value="ming">大明</option>
                      <option value="qing">大清</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase text-slate-400 mb-1 block">词风情感</label>
                    <select 
                      value={globalPoemParams.emotion}
                      onChange={e => setGlobalPoemParams(p => ({ ...p, emotion: e.target.value }))}
                      className="w-full px-3 py-2 rounded-xl border-[2px] border-clay-dark bg-slate-50 font-bold text-sm focus:outline-none"
                    >
                      <option value="豪放">豪放不羁</option>
                      <option value="婉约">婉约柔情</option>
                      <option value="咏史">咏史怀古</option>
                      <option value="田园">山水田园</option>
                      <option value="边塞">边塞风云</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase text-slate-400 mb-1 block">核心主题 (限10字)</label>
                  <input 
                    type="text"
                    maxLength={10}
                    placeholder="如：月下独酌"
                    value={globalPoemParams.topic}
                    onChange={(e) => setGlobalPoemParams(p => ({ ...p, topic: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border-[2px] border-clay-dark bg-slate-50 focus:bg-white transition-all font-bold text-base sm:text-sm focus:ring-4 focus:ring-dopa-pink/20"
                  />
                </div>
                <button 
                  onClick={handleGlobalPoem}
                  disabled={!globalPoemParams.topic.trim() || globalPoemParams.topic.length > 10}
                  className="w-full py-3 bg-dopa-pink text-white rounded-xl border-[2px] border-clay-dark shadow-[4px_4px_0_#1E1B4B] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all font-[1000] uppercase tracking-widest disabled:opacity-50 mt-2"
                >
                  星辰流转，凝结诗篇
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global AI Poem Result Modal */}
      <AnimatePresence>
        {isGlobalPoemResultOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-clay-dark/60 backdrop-blur-md pointer-events-auto overflow-hidden"
            onClick={() => setIsGlobalPoemResultOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50, rotate: -2 }}
              animate={{ scale: 1, y: 0, rotate: 0 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              className="bg-[#fefaf0] border-[4px] border-clay-dark rounded-[2rem] shadow-[20px_20px_0_#1E1B4B] max-w-lg w-[calc(100vw-2.5rem)] sm:w-full max-h-[calc(100vh-2rem)] p-6 sm:p-8 relative overflow-hidden flex flex-col gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-dopa-pink/5 rounded-full -mr-16 -mt-16 blur-3xl" />
              <div className="flex justify-between items-start relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-dopa-pink border-[2px] border-clay-dark flex items-center justify-center shadow-[3px_3px_0_#1E1B4B]">
                    <PenTool size={24} className="text-white animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-xl font-[1000] text-clay-dark tracking-tighter">《{globalPoemParams.topic}》</h3>
                    <p className="text-[10px] font-black text-dopa-pink uppercase tracking-widest mt-0.5">
                      AI 寰宇诗作 · {globalPoemParams.emotion}
                    </p>
                  </div>
                </div>
                <button onClick={() => setIsGlobalPoemResultOpen(false)} className="p-2 hover:bg-slate-200 rounded-full border-[2px] border-clay-dark transition-colors">
                  <X size={16} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto max-h-[60vh] scrollbar-thin relative z-10 pr-4">
                <div className="text-[15px] font-bold text-clay-dark leading-[2] whitespace-pre-wrap font-serif italic text-justify pt-2">
                  {globalPoemContent.trim().replace(/^\n+/, '') || (isGlobalPoeming ? '斗转星移，妙笔生花...' : '加载失败')}
                </div>
                <div ref={(el) => el?.scrollIntoView({ behavior: 'smooth' })} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Chat Input Modal */}
      <AnimatePresence>
        {isChatModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-clay-dark/60 backdrop-blur-md pointer-events-auto"
            onClick={() => setIsChatModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white border-[3px] border-clay-dark rounded-[2rem] shadow-[12px_12px_0_#1E1B4B] max-w-sm w-[calc(100vw-2.5rem)] sm:w-full p-6 relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-dopa-blue border-[2px] border-clay-dark flex items-center justify-center shadow-[2px_2px_0_#1E1B4B]">
                    <MessageSquare size={20} className="text-white" />
                  </div>
                  <h3 className="text-xl font-[1000] text-clay-dark tracking-tighter">跨时空圆桌</h3>
                </div>
                <button onClick={() => setIsChatModalOpen(false)} className="p-2 hover:bg-slate-100 rounded-full border-[2px] border-clay-dark transition-colors">
                  <X size={16} />
                </button>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-black uppercase text-slate-400 mb-1 block">文豪 A</label>
                    <input 
                      type="text"
                      maxLength={5}
                      placeholder="李白"
                      value={chatParticipantA}
                      onChange={(e) => setChatParticipantA(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-[2px] border-clay-dark bg-slate-50 focus:bg-white transition-all font-bold text-base sm:text-sm focus:ring-4 focus:ring-dopa-blue/20"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase text-slate-400 mb-1 block">文豪 B</label>
                    <input 
                      type="text"
                      maxLength={5}
                      placeholder="杜甫"
                      value={chatParticipantB}
                      onChange={(e) => setChatParticipantB(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-[2px] border-clay-dark bg-slate-50 focus:bg-white transition-all font-bold text-base sm:text-sm focus:ring-4 focus:ring-dopa-blue/20"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase text-slate-400 mb-1 block">论题 (如: 饮酒与明月)</label>
                  <input 
                    type="text"
                    maxLength={20}
                    placeholder="输入论题..."
                    value={chatTopic}
                    onChange={(e) => setChatTopic(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-[2px] border-clay-dark bg-slate-50 focus:bg-white transition-all font-bold text-base sm:text-sm focus:ring-4 focus:ring-dopa-blue/20"
                  />
                </div>
                <button 
                  onClick={handleChat}
                  disabled={!chatParticipantA.trim() || !chatParticipantB.trim() || !chatTopic.trim()}
                  className="w-full py-3 bg-dopa-blue text-white rounded-xl border-[2px] border-clay-dark shadow-[4px_4px_0_#1E1B4B] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all font-[1000] uppercase tracking-widest disabled:opacity-50 mt-2"
                >
                  开启时空长谈
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Chat Result Modal */}
      <AnimatePresence>
        {isChatResultOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-clay-dark/60 backdrop-blur-md pointer-events-auto overflow-hidden"
            onClick={() => setIsChatResultOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              className="bg-[#fefaf0] border-[4px] border-clay-dark rounded-[2rem] shadow-[20px_20px_0_#1E1B4B] max-w-lg w-[calc(100vw-2.5rem)] sm:w-full max-h-[calc(100vh-2rem)] p-6 relative overflow-hidden flex flex-col gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-dopa-blue/5 rounded-full -mr-16 -mt-16 blur-3xl" />
              <div className="flex justify-between items-start relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-dopa-blue border-[2px] border-clay-dark flex items-center justify-center shadow-[3px_3px_0_#1E1B4B]">
                    <MessageSquare size={24} className="text-white animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-xl font-[1000] text-clay-dark tracking-tighter">
                      {chatParticipantA} <span className="text-slate-300 mx-1">×</span> {chatParticipantB}
                    </h3>
                    <p className="text-[10px] font-black text-dopa-blue uppercase tracking-widest mt-0.5">
                      论道：{chatTopic}
                    </p>
                  </div>
                </div>
                <button onClick={() => setIsChatResultOpen(false)} className="p-2 hover:bg-slate-200 rounded-full border-[2px] border-clay-dark transition-colors">
                  <X size={16} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto min-h-[300px] max-h-[60vh] scrollbar-thin relative z-10 pr-4">
                <div className="text-[14px] font-bold text-clay-dark leading-[2.2] whitespace-pre-wrap text-justify pt-2 font-sans">
                  {aiChatContent.trim().replace(/^\n+/, '') || (isChatting ? '正在接引时空涟漪，请聆听先贤之音...' : '加载失败')}
                </div>
                <div ref={(el) => el?.scrollIntoView({ behavior: 'smooth' })} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Poetry Game Modal */}
      <AnimatePresence>
        {isGameModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-clay-dark/60 backdrop-blur-md pointer-events-auto overflow-hidden"
            onClick={() => setIsGameModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#fefaf0] border-[4px] border-clay-dark rounded-[2rem] shadow-[16px_16px_0_#1E1B4B] max-w-md w-[calc(100vw-2.5rem)] sm:w-full max-h-[calc(100vh-2rem)] p-6 relative overflow-hidden flex flex-col h-[70vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-dopa-green/5 rounded-full -mr-16 -mt-16 blur-3xl" />
              
              <div className="flex justify-between items-start relative z-10 mb-4 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-dopa-green border-[2px] border-clay-dark flex items-center justify-center shadow-[3px_3px_0_#1E1B4B]">
                    <Swords size={24} className="text-white animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-xl font-[1000] text-clay-dark tracking-tighter">飞花令对决</h3>
                    <p className="text-[10px] font-black text-dopa-green uppercase tracking-widest mt-0.5">
                      与 AI 古人一决高下
                    </p>
                  </div>
                </div>
                <button onClick={() => setIsGameModalOpen(false)} className="p-2 hover:bg-slate-200 rounded-full border-[2px] border-clay-dark transition-colors">
                  <X size={16} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto scrollbar-thin relative z-10 pr-2 flex flex-col gap-4 py-2">
                {gameHistory.length === 0 && (
                  <div className="text-center text-slate-400 font-bold text-xs mt-10">
                    请出题，例如：包含“月”字的诗句...
                  </div>
                )}
                {gameHistory.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-2xl border-[2px] border-clay-dark text-sm font-bold shadow-sm ${
                      msg.isUser 
                        ? 'bg-white text-clay-dark rounded-br-sm' 
                        : 'bg-dopa-green/10 text-clay-dark rounded-bl-sm'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {/* Auto Scroll Anchor */}
                <div ref={(el) => el?.scrollIntoView({ behavior: 'smooth' })} />
              </div>

              <div className="pt-4 mt-2 border-t-[2px] border-clay-dark/10 relative z-10 shrink-0 flex gap-2">
                <input 
                  type="text"
                  placeholder="输入诗句..."
                  value={gameInput}
                  onChange={(e) => setGameInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleGame()}
                  className="flex-1 px-4 py-3 rounded-xl border-[2px] border-clay-dark bg-white focus:bg-slate-50 transition-all font-bold text-base sm:text-sm focus:outline-none focus:ring-4 focus:ring-dopa-green/20"
                />
                <button 
                  onClick={handleGame}
                  disabled={!gameInput.trim() || isGaming}
                  className="px-5 py-3 bg-dopa-green text-white rounded-xl border-[2px] border-clay-dark shadow-[3px_3px_0_#1E1B4B] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all font-[1000] tracking-widest disabled:opacity-50"
                >
                  发送
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 朝代切换提示 Toast */}
      <AnimatePresence>
        {dynastyToast && (
          <motion.div
            key={dynastyToast}
            initial={{ opacity: 0, y: 24, scale: 0.88 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.92 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            style={{ pointerEvents: 'none' }}
            className="fixed top-[38%] left-1/2 -translate-x-1/2 z-[500] flex flex-col items-center gap-1"
          >
            <div className="bg-white/15 backdrop-blur-xl border border-white/30 rounded-2xl px-8 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.35)] flex flex-col items-center gap-0.5">
              <span className="text-white/60 text-xs font-semibold tracking-[0.2em] uppercase">切换至</span>
              <span className="text-white text-3xl font-black tracking-wider" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}>
                {DYNASTY_NAMES[dynastyToast]}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Scene Director Modal */}
      <AnimatePresence>
        {isSceneModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[160] flex items-center justify-center p-4 bg-clay-dark/60 backdrop-blur-md pointer-events-auto overflow-hidden"
            onClick={() => setIsSceneModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50, rotate: 1 }}
              animate={{ scale: 1, y: 0, rotate: 0 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              className="bg-[#fefaf0] border-[4px] border-clay-dark rounded-[2rem] shadow-[20px_20px_0_#1E1B4B] max-w-xl w-[calc(100vw-2.5rem)] sm:w-full max-h-[calc(100vh-2rem)] p-6 relative overflow-hidden flex flex-col gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-dopa-blue/5 rounded-full -mr-16 -mt-16 blur-3xl" />
              <div className="flex justify-between items-start relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-dopa-blue border-[2px] border-clay-dark flex items-center justify-center shadow-[3px_3px_0_#1E1B4B]">
                    <ImagePlus size={24} className="text-white animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-xl font-[1000] text-clay-dark tracking-tighter">AI 画境工坊</h3>
                    <p className="text-[10px] font-black text-dopa-blue uppercase tracking-widest mt-0.5">
                      解构《{selectedWork?.title}》
                    </p>
                  </div>
                </div>
                <button onClick={() => setIsSceneModalOpen(false)} className="p-2 hover:bg-slate-200 rounded-full border-[2px] border-clay-dark transition-colors">
                  <X size={16} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto min-h-[350px] max-h-[65vh] scrollbar-thin relative z-10 pr-4">
                <div className="text-[14px] font-bold text-clay-dark leading-[2] whitespace-pre-wrap font-sans text-justify pt-4 selected-text-pink selection:bg-dopa-pink/30">
                  {scenePrompt.trimStart() || (isSceneGenerating ? '正在神驰形外，勾勒绝美分镜头脚本...' : '加载失败')}
                </div>
                <div ref={(el) => el?.scrollIntoView({ behavior: 'smooth' })} />
              </div>
              <div className="flex flex-col gap-2 relative z-10">
                <div className="text-[9px] font-black uppercase text-slate-400 text-center tracking-widest">
                  复制上方脚本可输入至 Midjourney 或类似工具生成画作
                </div>
                <div className="flex justify-center mt-2">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(scenePrompt);
                      setIsCopied(true);
                      setTimeout(() => setIsCopied(false), 2000);
                    }}
                    className={`flex items-center gap-2 px-6 py-2 rounded-full border-[2px] border-clay-dark font-black text-xs transition-all shadow-[4px_4px_0_#1E1B4B] active:shadow-none active:translate-x-1 active:translate-y-1 ${
                      isCopied ? 'bg-dopa-green text-white' : 'bg-white text-clay-dark hover:bg-slate-50'
                    }`}
                  >
                    {isCopied ? <Check size={14} /> : <Copy size={14} />}
                    <span>{isCopied ? '已复制到剪贴板' : '一键复制提示词'}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
