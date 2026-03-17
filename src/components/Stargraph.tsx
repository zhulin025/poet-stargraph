'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ForceGraph3D, { ForceGraphMethods } from 'react-force-graph-3d';
import * as THREE from 'three';
import { Node, Link, GraphData } from '../types';

interface StargraphProps {
  data: GraphData;
  isRotating: boolean;
  onNodeHover?: (node: Node | null) => void;
  onNodeClick: (node: Node | null) => void;
  searchQuery?: string;
  triggerFlip: number;
  selectedNodeId?: string;
  onExportFinish?: () => void;
  triggerExport?: number;
}

const Stargraph: React.FC<StargraphProps> = ({ 
  data, 
  isRotating, 
  onNodeHover, 
  onNodeClick,
  searchQuery,
  triggerFlip,
  selectedNodeId,
  onExportFinish,
  triggerExport
}) => {
  const fgRef = useRef<ForceGraphMethods>();
  const [highlightNodes, setHighlightNodes] = useState<Set<string>>(new Set());
  const [highlightLinks, setHighlightLinks] = useState<Set<any>>(new Set());
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  // Texture cache to prevent redundant Canvas creation
  const materialCache = useRef<Map<string, THREE.SpriteMaterial>>(new Map());

  // Clear cache when highlight state changes significantly or on unmount
  useEffect(() => {
    return () => {
      materialCache.current.forEach(m => {
        if (m.map) m.map.dispose();
        m.dispose();
      });
      materialCache.current.clear();
    };
  }, [data]); // Clear cache when data (dynasty) changes

  // Compute contemporary links dynamically
  const augmentedData = useMemo(() => {
    if (!data || !data.nodes) return { nodes: [], links: [] };
    
    const nodes = data.nodes;
    const initialLinks = data.links || [];
    const augmentedLinks = [...initialLinks];
    
    // Check for contemporary relations (birth/death overlap)
    // Only perform this if birth/death data exists to avoid unnecessary iterations
    const hasTimeline = nodes.some(n => n.birth !== undefined && n.death !== undefined);
    
    if (hasTimeline) {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeA = nodes[i];
          const nodeB = nodes[j];
          
          if (nodeA.birth !== undefined && nodeA.death !== undefined && 
              nodeB.birth !== undefined && nodeB.death !== undefined) {
            const start = Math.max(nodeA.birth, nodeB.birth);
            const end = Math.min(nodeA.death, nodeB.death);
            
            if (start <= end) {
              const overlap = end - start;
              // Check if link already exists (comparing by ID strings)
              const exists = augmentedLinks.some(l => {
                const s = typeof l.source === 'string' ? l.source : (l.source as any).id;
                const t = typeof l.target === 'string' ? l.target : (l.target as any).id;
                return (s === nodeA.id && t === nodeB.id) || (s === nodeB.id && t === nodeA.id);
              });
              
              if (!exists && overlap >= 5) {
                augmentedLinks.push({
                  source: nodeA.id,
                  target: nodeB.id,
                  value: Math.min(Math.floor(overlap / 10) + 1, 5),
                  type: '同时代'
                });
              }
            }
          }
        }
      }
    }
    
    return { nodes, links: augmentedLinks };
  }, [data]);

  // Update dimensions for full screen
  useEffect(() => {
    const updateSize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const getCartoonColor = useCallback((baseColor: string) => {
    const colorMap: Record<string, string> = {
      '#fbbf24': '#FFE800',
      '#60a5fa': '#4F46E5',
      '#a78bfa': '#FF3366',
      '#34d399': '#1AD511',
      '#ef4444': '#FF3366',
      '#fb923c': '#FF8A00',
    };
    return colorMap[baseColor.toLowerCase()] || baseColor;
  }, []);

  // Manage highlight state based on selection or hover
  useEffect(() => {
    const nodes = new Set<string>();
    const links = new Set<any>();

    // Priority: hovered node or selected node
    const activeId = hoveredNodeId || selectedNodeId;

    if (activeId) {
      nodes.add(activeId);
      augmentedData.links.forEach((link: any) => {
        const s = typeof link.source === 'string' ? link.source : (link.source as any).id;
        const t = typeof link.target === 'string' ? link.target : (link.target as any).id;
        
        if (s === activeId || t === activeId) {
          nodes.add(s);
          nodes.add(t);
          links.add(link);
        }
      });
    }

    setHighlightNodes(nodes);
    setHighlightLinks(links);
  }, [selectedNodeId, hoveredNodeId, augmentedData]);

  const nodeThreeObject = useCallback((node: any) => {
    const group = new THREE.Group();
    // If something is highlighted, check if this node is in the set.
    // If nothing is highlighted, everything is normal brightness.
    const isGlobalDimmed = highlightNodes.size > 0;
    const isNodeHighlighted = highlightNodes.has(node.id);
    
    const baseSize = Math.log(node.val + 2) * 2.5;
    const cartoonColor = getCartoonColor(node.color);
    
    // Core Sphere
    const geometry = new THREE.SphereGeometry(baseSize, 32, 32);
    const material = new THREE.MeshToonMaterial({
      color: cartoonColor,
      transparent: true,
      opacity: isGlobalDimmed ? (isNodeHighlighted ? 1 : 0.1) : 1
    });
    const sphere = new THREE.Mesh(geometry, material);
    group.add(sphere);

    // Name Label (Sprite) - Optimized 2x HD Sampling
    const cacheKey = `${node.id}_${isGlobalDimmed}_${isNodeHighlighted}`;
    let spriteMaterial = materialCache.current.get(cacheKey);

    if (!spriteMaterial) {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d', { alpha: true });
      if (ctx) {
        // Switching to KaiTi (Chinese Brush style)
        canvas.width = 512;
        canvas.height = 128;
        
        ctx.font = 'bold 80px "STKaiti", "KaiTi", "楷体", "BiauKai", serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Text Shadow/Stroke for high contrast
        ctx.strokeStyle = '#1E1B4B';
        ctx.lineWidth = 14; 
        ctx.strokeText(node.id, 256, 64);
        
        // Main Text
        ctx.fillStyle = isGlobalDimmed && !isNodeHighlighted ? '#ffffff33' : '#ffffff';
        ctx.fillText(node.id, 256, 64);
        
        const texture = new THREE.CanvasTexture(canvas);
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        
        spriteMaterial = new THREE.SpriteMaterial({ 
          map: texture,
          transparent: true,
          opacity: isGlobalDimmed ? (isNodeHighlighted ? 1 : 0.2) : 0.9
        });
        
        materialCache.current.set(cacheKey, spriteMaterial);
      }
    }

    if (spriteMaterial) {
      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.scale.set(baseSize * 4, baseSize, 1);
      sprite.position.y = baseSize + 5; 
      group.add(sprite);
    }
    
    if (isNodeHighlighted) {
      const outlineGeo = new THREE.SphereGeometry(baseSize * 1.1, 32, 32);
      const outlineMat = new THREE.MeshBasicMaterial({
        color: 0x1E1B4B,
        side: THREE.BackSide,
        transparent: true,
        opacity: 0.8
      });
      group.add(new THREE.Mesh(outlineGeo, outlineMat));
      
      const glowGeo = new THREE.SphereGeometry(baseSize * 1.5, 32, 32);
      const glowMat = new THREE.MeshBasicMaterial({
        color: cartoonColor,
        transparent: true,
        opacity: node.id === (hoveredNodeId || selectedNodeId) ? 0.3 : 0.1,
        blending: THREE.AdditiveBlending
      });
      group.add(new THREE.Mesh(glowGeo, glowMat));
    }
    
    return group;
  }, [highlightNodes, getCartoonColor, hoveredNodeId, selectedNodeId]);


  useEffect(() => {
    if (!fgRef.current) return;
    const fg = fgRef.current;
    fg.d3Force('link')?.distance(180);
    fg.d3Force('charge')?.strength(-600);

    const scene = fg.scene();
    if (!scene.userData.lightsAdded) {
      scene.add(new THREE.AmbientLight(0xffffff, 1.2));
      const dl = new THREE.DirectionalLight(0xffffff, 1);
      dl.position.set(100, 100, 100);
      scene.add(dl);
      scene.userData.lightsAdded = true;
    }
  }, []);

  useEffect(() => {
    if (fgRef.current) {
      const controls = fgRef.current.controls() as any;
      if (controls) {
        controls.autoRotate = isRotating && !isHovered;
        controls.autoRotateSpeed = 0.5;
      }
    }
  }, [isRotating, isHovered]);

  // Sync camera on search
  useEffect(() => {
    if (searchQuery && fgRef.current) {
      const node = data.nodes.find(n => 
        n.id.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (node && node.x !== undefined && node.y !== undefined && node.z !== undefined) {
        // 直接看向节点的物理坐标，深度设为 200 以保证节点位于视野中心且比例和谐
        fgRef.current.cameraPosition(
          { x: node.x, y: node.y, z: node.z + 200 }, // 相机新位置
          { x: node.x, y: node.y, z: node.z },       // 相机看向的点
          1200                                      // 过渡时长 1.2s
        );
      }
    }
  }, [searchQuery, data.nodes]);

  // Handle view reset on triggerFlip
  useEffect(() => {
    if (fgRef.current && triggerFlip > 1) {
      fgRef.current.cameraPosition(
        { x: 0, y: 0, z: 800 }, // 初始 Z 轴深度
        { x: 0, y: 0, z: 0 },   // 看向原点
        1500                   // 1.5s 平滑回归
      );
    }
  }, [triggerFlip]);

  // Handle Export Screenshot
  useEffect(() => {
    if (triggerExport && triggerExport > 0 && fgRef.current) {
      const fg = fgRef.current;
      // The force graph uses three.js internally. 
      // To capture the canvas correctly, we might need to ensure preserveDrawingBuffer is true. 
      // react-force-graph exposes its renderer through certain methods.
      
      const capture = () => {
        try {
          const originalCanvas = document.querySelector('canvas');
          if (originalCanvas) {
            // Create a temporary canvas for watermarking
            const tempCanvas = document.createElement('canvas');
            tempCanvas.width = originalCanvas.width;
            tempCanvas.height = originalCanvas.height;
            const ctx = tempCanvas.getContext('2d');
            
            if (ctx) {
              // Draw the original graph
              ctx.drawImage(originalCanvas, 0, 0);
              
              // Configure Watermark (Significantly larger and visible on white)
              const fontSize = Math.max(20, originalCanvas.width / 35);
              ctx.font = `bold ${fontSize}px "Inter", sans-serif`;
              ctx.textAlign = 'right';
              ctx.textBaseline = 'bottom';
              
              const text = "LaoA's AI Lab // 诗外星辰项目";
              const margin = fontSize;
              const x = originalCanvas.width - margin;
              const y = originalCanvas.height - margin;

              // High contrast shadow/stroke for visibility on pure white
              ctx.shadowColor = 'rgba(30, 27, 75, 0.8)';
              ctx.shadowBlur = 8;
              ctx.strokeStyle = '#1E1B4B';
              ctx.lineWidth = Math.max(2, fontSize / 12);
              ctx.strokeText(text, x, y);
              
              // Watermark Text
              ctx.fillStyle = '#ffffff';
              ctx.globalAlpha = 0.9;
              ctx.fillText(text, x, y);
              
              // Export
              const dataURL = tempCanvas.toDataURL('image/png');
              const link = document.createElement('a');
              link.download = `stargraph_v3_2_${new Date().getTime()}.png`;
              link.href = dataURL;
              link.click();
            }
          }
        } catch (err) {
          console.error('Export failed:', err);
        } finally {
          onExportFinish?.();
        }
      };

      // Wait a bit for any UI to settle
      setTimeout(capture, 100);
    }
  }, [triggerExport, onExportFinish]);

  return (
    <div 
      style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ForceGraph3D
        ref={fgRef}
        graphData={augmentedData}
        width={dimensions.width}
        height={dimensions.height}
        nodeThreeObject={nodeThreeObject}
        nodeLabel="id"
        linkWidth={(link: any) => {
          if (highlightNodes.size > 0 && !highlightLinks.has(link)) return 0.2;
          return link.type === '同时代' ? 0.5 : 2;
        }}
        linkColor={(link: any) => {
          const isHighlighted = highlightLinks.has(link);
          const isGlobalDimmed = highlightNodes.size > 0;
          if (isGlobalDimmed && !isHighlighted) return '#ffffff11';
          return link.type === '同时代' ? '#ffffff44' : '#1E1B4B';
        }}
        linkDirectionalParticles={(link: any) => {
          if (highlightNodes.size > 0 && !highlightLinks.has(link)) return 0;
          return link.type === '同时代' ? 0 : 3;
        }}
        linkDirectionalParticleSpeed={0.015}
        linkDirectionalParticleWidth={(link: any) => highlightLinks.has(link) ? 6 : 4}
        linkDirectionalParticleColor={(link: any) => highlightLinks.has(link) ? '#FFEB3B' : '#FF3366'}
        backgroundColor="rgba(0,0,0,0)"
        onNodeHover={(node: any) => {
          setHoveredNodeId(node ? node.id : null);
          onNodeHover?.(node);
        }}
        onNodeClick={(node: any) => {
          if (node) {
            onNodeClick(node);
            
            // Look at clicked node
            if (fgRef.current && node.x !== undefined) {
              fgRef.current.cameraPosition(
                { x: node.x, y: node.y, z: node.z + 200 },
                { x: node.x, y: node.y, z: node.z },
                1000
              );
            }
          }
        }}
        onBackgroundClick={(event) => {
          // Add a small threshold or check if we are actually clicking the background
          onNodeClick(null);
        }}
        enableNodeDrag={false}
        nodeRelSize={10} // Increase invisible picking area
        showNavInfo={false}
        controlType="orbit"
        rendererConfig={{ preserveDrawingBuffer: true }}
      />
    </div>
  );
};

export default Stargraph;
