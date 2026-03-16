'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import ForceGraph3D, { ForceGraphMethods } from 'react-force-graph-3d';
import * as THREE from 'three';

interface Node {
  id: string;
  group: number;
  val: number;
  color: string;
  desc?: string;
  x?: number;
  y?: number;
  z?: number;
}

interface Link {
  source: string | Node;
  target: string | Node;
  value: number;
}

interface StargraphProps {
  data: {
    nodes: Node[];
    links: Link[];
  };
  isRotating: boolean;
  onNodeHover: (node: Node | null) => void;
  searchQuery?: string;
  triggerFlip: number;
}

const Stargraph: React.FC<StargraphProps> = ({ 
  data, 
  isRotating, 
  onNodeHover, 
  searchQuery,
  triggerFlip 
}) => {
  const fgRef = useRef<ForceGraphMethods>();
  const [highlightNodes, setHighlightNodes] = useState<Set<string>>(new Set());
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

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
        controls.autoRotate = isRotating;
        controls.autoRotateSpeed = 0.5;
      }
    }
  }, [isRotating]);

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

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0 }}>
      <ForceGraph3D
        ref={fgRef}
        graphData={data}
        width={dimensions.width}
        height={dimensions.height}
        nodeThreeObject={nodeThreeObject}
        nodeLabel="id"
        linkWidth={1.5}
        linkColor={() => '#1E1B4B'}
        linkDirectionalParticles={2}
        linkDirectionalParticleSpeed={0.01}
        linkDirectionalParticleWidth={4}
        linkDirectionalParticleColor={() => '#FF3366'}
        backgroundColor="rgba(0,0,0,0)"
        onNodeHover={(node: any) => {
          const nodes = new Set<string>();
          if (node) nodes.add(node.id);
          setHighlightNodes(nodes);
          onNodeHover(node);
        }}
        showNavInfo={false}
      />
    </div>
  );
};

export default Stargraph;
