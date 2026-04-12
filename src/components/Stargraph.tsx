'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ForceGraph3D, { ForceGraphMethods } from 'react-force-graph-3d';
import * as THREE from 'three';
import { Node, Link, GraphData } from '../types';

/** v6.0 命令式手势 API，由 page.tsx 持有 ref，绕开 React 状态管道实现零延迟旋转 */
export interface GestureApi {
  /** 叠加旋转速度（每帧自动衰减，产生惯性感） */
  addRotateVelocity: (azimuth: number, polar: number) => void;
  /** 立即执行缩放 */
  addZoom: (factor: number) => void;
}

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
  viewMode?: 'day' | 'night';
  showContemporary?: boolean;
  /** v6.0 命令式手势 API ref（旋转/缩放），由外部写入，Stargraph 内部 rAF 消费 */
  gestureApiRef?: React.MutableRefObject<GestureApi | null>;
  /** G3 食指停留触发后的屏幕坐标（像素），Stargraph 内部用 Raycaster 命中节点 */
  gestureSelectPos?: { x: number; y: number } | null;
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
  triggerExport,
  viewMode = 'night',
  showContemporary = true,
  gestureApiRef,
  gestureSelectPos,
}) => {
  const fgRef = useRef<ForceGraphMethods>();

  const [highlightNodes, setHighlightNodes] = useState<Set<string>>(new Set());
  const [highlightLinks, setHighlightLinks] = useState<Set<any>>(new Set());
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768);
  }, []);

  // Texture cache to prevent redundant Canvas creation
  const materialCache = useRef<Map<string, THREE.SpriteMaterial>>(new Map());

  // Explicit WebGL cleanup on unmount
  useEffect(() => {
    return () => {
      // 1. Dispose Material Cache
      materialCache.current.forEach(m => {
        if (m.map) m.map.dispose();
        m.dispose();
      });
      materialCache.current.clear();

      // 2. Dispose Renderer and Scene
      if (fgRef.current) {
        try {
          const renderer = fgRef.current.renderer() as THREE.WebGLRenderer;
          if (renderer) {
            renderer.setClearColor(0x000000, 0); // 确保背景完全透明
            renderer.dispose();
            renderer.forceContextLoss(); // Release the context slot back to browser
          }
          
          const scene = fgRef.current.scene();
          if (scene) {
            scene.traverse((object: any) => {
              if (object.geometry) object.geometry.dispose();
              if (object.material) {
                if (Array.isArray(object.material)) {
                  object.material.forEach((m: any) => m.dispose());
                } else {
                  object.material.dispose();
                }
              }
            });
          }
        } catch (e) {
          console.warn('WebGL cleanup failed:', e);
        }
      }
    };
  }, []);



  // Sync cache with viewMode changes (to refresh text contrast)
  useEffect(() => {
    materialCache.current.forEach(m => {
      if (m.map) m.map.dispose();
      m.dispose();
    });
    materialCache.current.clear();
  }, [viewMode]); 

  // Filter links based on showContemporary toggle
  const graphData = useMemo(() => {
    const nodes = data.nodes || [];
    const links = (data.links || []).filter((l: any) =>
      showContemporary || l.type !== '同时代'
    );
    return { nodes, links };
  }, [data, showContemporary]);

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
      graphData.links.forEach((link: any) => {
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
  }, [selectedNodeId, hoveredNodeId, graphData]);


  // nodeThreeObject: creates geometry ONCE per node, no highlight dependency
  const nodeThreeObject = useCallback((node: any) => {
    const group = new THREE.Group();
    group.userData.nodeId = node.id;

    const baseSize = Math.log(node.val + 2) * 2.5;
    const cartoonColor = getCartoonColor(node.color);

    // Core Sphere — mobile uses lower poly count
    const segments = isMobile ? 12 : 32;
    const geometry = new THREE.SphereGeometry(baseSize, segments, segments);
    const material = new THREE.MeshToonMaterial({
      color: cartoonColor,
      transparent: true,
      opacity: 1
    });
    material.userData.role = 'core';
    const sphere = new THREE.Mesh(geometry, material);
    group.add(sphere);

    // Name Label (Sprite)
    const cacheKey = `${node.id}_label`;
    let spriteMaterial = materialCache.current.get(cacheKey);

    if (!spriteMaterial) {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d', { alpha: true });
      if (ctx) {
        const scale = isMobile ? 0.5 : 1;
        canvas.width = 512 * scale;
        canvas.height = 128 * scale;
        const fontSize = 80 * scale;
        const centerX = 256 * scale;
        const centerY = 64 * scale;

        ctx.font = `bold ${fontSize}px "STKaiti", "KaiTi", "楷体", "BiauKai", serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        ctx.strokeStyle = viewMode === 'day' ? '#ffffff' : '#1E1B4B';
        ctx.lineWidth = 14 * scale;
        ctx.strokeText(node.id, centerX, centerY);

        ctx.fillStyle = viewMode === 'day' ? '#1E1B4B' : '#ffffff';
        ctx.fillText(node.id, centerX, centerY);

        const texture = new THREE.CanvasTexture(canvas);
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;

        spriteMaterial = new THREE.SpriteMaterial({
          map: texture,
          transparent: true,
          opacity: 1, // Increased from 0.9 for better legibility
          depthWrite: false
        });
        spriteMaterial.userData.role = 'label';

        materialCache.current.set(cacheKey, spriteMaterial);
      }
    }

    if (spriteMaterial) {
      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.scale.set(baseSize * 4, baseSize, 1);
      sprite.position.y = baseSize + 5;
      sprite.userData.role = 'label';
      group.add(sprite);
    }

    // Pre-create outline + glow meshes (hidden by default, toggled by highlight effect)
    const outlineGeo = new THREE.SphereGeometry(baseSize * 1.1, segments, segments);
    const outlineMat = new THREE.MeshBasicMaterial({
      color: 0x1E1B4B,
      side: THREE.BackSide,
      transparent: true,
      opacity: 0
    });
    outlineMat.userData.role = 'outline';
    const outlineMesh = new THREE.Mesh(outlineGeo, outlineMat);
    outlineMesh.visible = false;
    outlineMesh.userData.role = 'outline';
    group.add(outlineMesh);

    const glowGeo = new THREE.SphereGeometry(baseSize * 1.5, segments, segments);
    const glowMat = new THREE.MeshBasicMaterial({
      color: cartoonColor,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending
    });
    glowMat.userData.role = 'glow';
    const glowMesh = new THREE.Mesh(glowGeo, glowMat);
    glowMesh.visible = false;
    glowMesh.userData.role = 'glow';
    group.add(glowMesh);

    return group;
  }, [getCartoonColor, isMobile, viewMode]);

  // Highlight effect: traverse scene and update materials without rebuilding objects
  useEffect(() => {
    if (!fgRef.current) return;
    const scene = fgRef.current.scene();
    const isGlobalDimmed = highlightNodes.size > 0;
    const activeId = hoveredNodeId || selectedNodeId || null;

    scene.traverse((obj: any) => {
      if (!obj.userData?.nodeId) return;
      const nodeId = obj.userData.nodeId;
      const isHighlighted = highlightNodes.has(nodeId);

      obj.children.forEach((child: any) => {
        const mat = child.material;
        if (!mat) return;
        const role = mat.userData?.role || child.userData?.role;

        if (role === 'core') {
          mat.opacity = isGlobalDimmed ? (isHighlighted ? 1 : 0.1) : 1;
        } else if (role === 'label') {
          mat.opacity = isGlobalDimmed ? (isHighlighted ? 1 : 0.2) : 0.9;
        } else if (role === 'outline') {
          child.visible = isHighlighted;
          mat.opacity = isHighlighted ? 0.8 : 0;
        } else if (role === 'glow') {
          child.visible = isHighlighted;
          mat.opacity = isHighlighted ? (nodeId === activeId ? 0.3 : 0.1) : 0;
        }
      });
    });
  }, [highlightNodes, hoveredNodeId, selectedNodeId]);


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

  // v6.0 命令式手势旋转/缩放：惯性 rAF 循环 + gestureApiRef
  // 绕开 React 状态管道（gesture→setState→render→useEffect 链路有 2-3 帧延迟）
  // 改为：gesture hook 直接写 velocity ref → 本循环每帧读取 → 平滑衰减
  const velAzRef = useRef(0);
  const velPolRef = useRef(0);

  // 60fps rAF 循环（只建立一次，通过 ref 读最新数据）
  useEffect(() => {
    const DAMPING = 0.78;      // 每帧速度衰减系数（越小越快停）
    const MIN_VEL = 0.00008;   // 低于此值停止计算，避免 Inf 迭代
    let rafId: number;

    const tick = () => {
      const az = velAzRef.current;
      const pol = velPolRef.current;

      if ((Math.abs(az) > MIN_VEL || Math.abs(pol) > MIN_VEL) && fgRef.current) {
        const cam = fgRef.current.camera() as THREE.PerspectiveCamera;
        const controls = fgRef.current.controls() as any;
        if (cam && controls) {
          const target = controls.target ?? new THREE.Vector3(0, 0, 0);
          const offset = cam.position.clone().sub(target);
          const radius = offset.length();
          if (radius >= 1) {
            let theta = Math.atan2(offset.x, offset.z);
            let phi = Math.acos(Math.max(-1, Math.min(1, offset.y / radius)));
            theta += az;
            phi = Math.max(0.1, Math.min(Math.PI - 0.1, phi + pol));
            offset.set(
              radius * Math.sin(phi) * Math.sin(theta),
              radius * Math.cos(phi),
              radius * Math.sin(phi) * Math.cos(theta)
            );
            cam.position.copy(target).add(offset);
            cam.lookAt(target);
            controls.update();
          }
        }
        velAzRef.current *= DAMPING;
        velPolRef.current *= DAMPING;
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []); // 空依赖：循环只建立一次

  // 将 API 写入外部 ref，供 page.tsx 的手势回调直接调用
  useEffect(() => {
    if (!gestureApiRef) return;
    gestureApiRef.current = {
      addRotateVelocity: (az, pol) => {
        velAzRef.current += az;
        velPolRef.current += pol;
      },
      addZoom: (factor) => {
        if (!fgRef.current) return;
        const cam = fgRef.current.camera() as THREE.PerspectiveCamera;
        const controls = fgRef.current.controls() as any;
        if (!cam || !controls) return;
        const target = controls.target ?? new THREE.Vector3(0, 0, 0);
        const offset = cam.position.clone().sub(target);
        const newDist = Math.max(50, Math.min(2000, offset.length() * factor));
        offset.setLength(newDist);
        cam.position.copy(target).add(offset);
        controls.update();
      },
    };
    return () => { if (gestureApiRef) gestureApiRef.current = null; };
  }, [gestureApiRef]);

  // v6.0 G3 食指停留选节点：用 Three.js Raycaster 在 Stargraph 内部命中节点
  useEffect(() => {
    if (!gestureSelectPos || !fgRef.current) return;
    const cam = fgRef.current.camera() as THREE.PerspectiveCamera;
    const scene = fgRef.current.scene() as THREE.Scene;
    if (!cam || !scene) return;

    // 将屏幕像素坐标转换为 NDC（归一化设备坐标，范围 [-1, 1]）
    const ndcX = (gestureSelectPos.x / window.innerWidth) * 2 - 1;
    const ndcY = -(gestureSelectPos.y / window.innerHeight) * 2 + 1;

    const raycaster = new THREE.Raycaster();
    // 稍微放大射线的 near 检测球，提升命中容错
    raycaster.params.Points = { threshold: 8 };
    raycaster.setFromCamera(new THREE.Vector2(ndcX, ndcY), cam);

    // three-forcegraph 将 __graphObjType = 'node' 直接挂在 Three.js 对象上
    // 节点原始数据存在 obj.__data
    const nodeObjects: THREE.Object3D[] = [];
    scene.traverse((obj) => {
      if ((obj as any).__graphObjType === 'node') {
        nodeObjects.push(obj);
      }
    });

    if (nodeObjects.length === 0) return;

    const intersects = raycaster.intersectObjects(nodeObjects, true);

    if (intersects.length > 0) {
      // 沿父链向上找带有 __data 的节点对象
      let hit: THREE.Object3D | null = intersects[0].object;
      while (hit) {
        if ((hit as any).__data) {
          onNodeClick((hit as any).__data as Node);
          return;
        }
        hit = hit.parent;
      }
    }

    // 射线未命中时退化为最近节点（容错半径 80px）
    // 遍历所有节点对象，找屏幕投影距离最近的
    let closestNode: Node | null = null;
    let closestDist = 80; // 像素阈值
    for (const obj of nodeObjects) {
      const nodeData = (obj as any).__data as Node | undefined;
      if (!nodeData) continue;
      const pos3d = new THREE.Vector3();
      obj.getWorldPosition(pos3d);
      pos3d.project(cam);
      const sx = (pos3d.x + 1) / 2 * window.innerWidth;
      const sy = (1 - pos3d.y) / 2 * window.innerHeight;
      const dist = Math.hypot(sx - gestureSelectPos.x, sy - gestureSelectPos.y);
      if (dist < closestDist) {
        closestDist = dist;
        closestNode = nodeData;
      }
    }
    if (closestNode) onNodeClick(closestNode);
  }, [gestureSelectPos, onNodeClick]);

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
          const originalCanvas = fgRef.current?.renderer().domElement as HTMLCanvasElement;
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
      style={{ width: '100vw', height: '100vh', position: 'relative' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ForceGraph3D
        ref={fgRef}
        graphData={graphData}
        width={dimensions.width}
        height={dimensions.height}
        nodeThreeObject={nodeThreeObject}
        nodeLabel="id"
        linkWidth={(link: any) => {
          if (highlightNodes.size > 0 && !highlightLinks.has(link)) return 0.2;
          const isDay = viewMode === 'day';
          // Desktop: 0.4/0.5 (contemporary), 1.0/1.8 (others)
          // Mobile: roughly revert to previous thicker style (base * 1.5)
          const baseWidth = link.type === '同时代' ? (isDay ? 0.2 : 0.25) : (isDay ? 0.5 : 0.9);
          return isMobile ? baseWidth * 2.5 : baseWidth;
        }}
        linkColor={(link: any) => {
          const isHighlighted = highlightLinks.has(link);
          const isGlobalDimmed = highlightNodes.size > 0;
          if (viewMode === 'day') {
            if (isGlobalDimmed && !isHighlighted) return '#1E1B4B11';
            return link.type === '同时代' ? '#64748B' : '#0F172A';
          } else {
            if (isGlobalDimmed && !isHighlighted) return '#ffffff22';
            return link.type === '同时代' ? '#ffffff88' : '#4F46E5';
          }
        }}
        linkDirectionalParticles={(link: any) => {
          if (isMobile) return 0; // Disable all particles on mobile
          if (highlightNodes.size > 0 && !highlightLinks.has(link)) return 0;
          return link.type === '同时代' ? 0 : 4;
        }}
        linkDirectionalParticleSpeed={0.015}
        linkDirectionalParticleWidth={(link: any) => {
          const baseWidth = highlightLinks.has(link) ? 7 : 5;
          return isMobile ? baseWidth * 0.6 : baseWidth;
        }}
        linkDirectionalParticleColor={(link: any) => {
          if (viewMode === 'day') {
             return highlightLinks.has(link) ? '#FF3366' : '#4F46E5';
          }
          return highlightLinks.has(link) ? '#FFE800' : '#FF3366';
        }}
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
          onNodeClick(null);
        }}
        enableNodeDrag={false}
        nodeRelSize={10} // Increase invisible picking area
        showNavInfo={false}
        controlType="orbit"
        rendererConfig={{
          preserveDrawingBuffer: true,
          antialias: !isMobile,
          alpha: true,              // 允许透明背景（手势模式下露出摄像头画面）
          powerPreference: "high-performance"
        }}
      />
    </div>
  );
};

export default Stargraph;
