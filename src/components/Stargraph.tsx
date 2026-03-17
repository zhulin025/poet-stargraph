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
}

const Stargraph: React.FC<StargraphProps> = ({ 
  data, 
  isRotating, 
  onNodeHover, 
  onNodeClick,
  searchQuery,
  triggerFlip 
}) => {
  const fgRef = useRef<ForceGraphMethods>();
  const [highlightNodes, setHighlightNodes] = useState<Set<string>>(new Set());
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });
  const [isHovered, setIsHovered] = useState(false);

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

  const nodeThreeObject = useCallback((node: any) => {
    const group = new THREE.Group();
    const isHighlighted = highlightNodes.has(node.id) || highlightNodes.size === 0;
    const baseSize = Math.log(node.val + 2) * 2.5;
    const cartoonColor = getCartoonColor(node.color);
    
    const geometry = new THREE.SphereGeometry(baseSize, 32, 32);
    const material = new THREE.MeshToonMaterial({
      color: cartoonColor,
      transparent: true,
      opacity: isHighlighted ? 1 : 0.2
    });
    const sphere = new THREE.Mesh(geometry, material);
    
    if (isHighlighted) {
      const outlineGeo = new THREE.SphereGeometry(baseSize * 1.1, 32, 32);
      const outlineMat = new THREE.MeshBasicMaterial({
        color: 0x1E1B4B,
        side: THREE.BackSide
      });
      group.add(new THREE.Mesh(outlineGeo, outlineMat));
      
      const glowGeo = new THREE.SphereGeometry(baseSize * 1.5, 32, 32);
      const glowMat = new THREE.MeshBasicMaterial({
        color: cartoonColor,
        transparent: true,
        opacity: 0.15,
        blending: THREE.AdditiveBlending
      });
      group.add(new THREE.Mesh(glowGeo, glowMat));
    }
    
    group.add(sphere);
    return group;
  }, [highlightNodes, getCartoonColor]);

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
        linkWidth={(link: any) => link.type === '同时代' ? 0.5 : 1.5}
        linkColor={(link: any) => link.type === '同时代' ? '#ffffff22' : '#1E1B4B'}
        linkDirectionalParticles={(link: any) => link.type === '同时代' ? 0 : 2}
        linkDirectionalParticleSpeed={0.01}
        linkDirectionalParticleWidth={4}
        linkDirectionalParticleColor={() => '#FF3366'}
        backgroundColor="rgba(0,0,0,0)"
        onNodeHover={(node: any) => {
          const nodes = new Set<string>();
          if (node) nodes.add(node.id);
          setHighlightNodes(nodes);
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
      />
    </div>
  );
};

export default Stargraph;
