# 📜 宋代诗人关系星云 · 诗云星图

基于 **3D-Force-Graph** 的诗人关系可视化网站，复刻"苏轼朋友圈"动态星云效果。

---

## 🚀 快速启动

### 方式一：直接打开（最简单）
```bash
open /Users/zhulin/clawd/projects/poet-stargraph/index.html
```

### 方式二：本地服务器（推荐）
```bash
cd /Users/zhulin/clawd/projects/poet-stargraph
python3 -m http.server 8080
open http://localhost:8080
```

### 方式三：用 Vite（开发模式）
```bash
npm install -g vite
cd /Users/zhulin/clawd/projects/poet-stargraph
vite --port 8080
```

---

## ✨ 功能特性

### 视觉效果
- ✅ **3D 力导向布局** - 节点自动散开形成星云
- ✅ **发光节点** - 诗人影响力越大节点越大越亮
- ✅ **粒子连线** - 关系连线带流动粒子效果
- ✅ **光晕效果** - 节点周围有扩散光晕
- ✅ **自动旋转** - 360 度展示星云结构

### 交互功能
- 🔍 **搜索诗人** - 输入名字快速定位
- 📅 **朝代切换** - 宋/唐诗人一键切换
- 🔄 **旋转控制** - 开始/停止自动旋转
- 🔃 **Y 轴翻转** - 切换视角
- 📐 **布局调整** - 改变力导向参数
- ✨ **特效开关** - 光晕/粒子效果独立控制

### 数据说明
- **节点大小** = 诗人影响力（被提及次数）
- **连线粗细** = 关系强度（唱和、赠诗、引用）
- **节点颜色** = 诗人群体分类

---

## 🎨 技术栈

| 技术 | 用途 |
|------|------|
| **3D-Force-Graph** | 3D 力导向图库 |
| **Three.js** | WebGL 3D 渲染 |
| **d3-force-3d** | 物理力学模拟 |
| **原生 JS** | 无框架依赖 |

---

## 📊 数据结构

### 节点（诗人）
```json
{
  "id": "苏轼",
  "group": 1,        // 分组（用于颜色）
  "val": 316,        // 影响力值（节点大小）
  "color": "#fbbf24" // 节点颜色
}
```

### 连线（关系）
```json
{
  "source": "苏轼",
  "target": "王安石",
  "value": 8  // 关系强度（连线粗细）
}
```

---

## 🛠️ 自定义

### 添加新诗人
编辑 `index.html` 中的 `poetsData.nodes` 数组：
```javascript
{ id: '新诗人', group: 1, val: 50, color: '#ff0000' }
```

### 添加新关系
编辑 `poetsData.links` 数组：
```javascript
{ source: '苏轼', target: '新诗人', value: 5 }
```

### 调整视觉效果
```javascript
// 节点排斥力（越大越散开）
.d3Force('charge', d3.forceManyBody().strength(-150))

// 连线长度（越大越松）
.d3Force('link', d3.forceLink().distance(100))

// 自动旋转速度
Graph.controls().autoRotateSpeed = 0.5
```

---

## 📱 浏览器兼容性

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

---

## 🎯 扩展方向

1. **真实数据** - 替换为《全宋词》NLP 挖掘的真实关系
2. **后端 API** - 用 Python 爬取诗词数据生成 JSON
3. **更多朝代** - 添加元、明、清诗人数据
4. **导出图片** - 添加截图功能
5. **VR 模式** - 支持 WebXR 虚拟现实

---

## 📄 许可证

MIT License

---

## 🔗 相关链接

- [3D-Force-Graph 官方文档](https://github.com/vasturiano/3d-force-graph)
- [Three.js 文档](https://threejs.org/)
- [d3-force-3d](https://github.com/vasturiano/d3-force-3d)

---

*项目生成时间：2026-03-16*
