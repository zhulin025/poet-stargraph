# 诗外星辰 (Verses & Voids) V3.0 深度社交版

**探索诗词背后的社交宇宙。**

一个基于多巴胺波普风格 (Dopamine Pop Style) 的 3D 文人关系时空观测站。利用 3D 引力图可视化从盛唐到大清历代诗人的社交网络、影响力矩阵及传世名篇。

![项目主截图](public/screenshot.png)
![诗词展示](public/screenshot2.png)

## ✨ V3.0 新特性

- **始终可见的 3D 标签**：为 3D 图谱中的每个节点增加了始终保持水平、面向摄像机的名字标签，极大地提升了星系的可读性。
- **深度社交名士圈**：诗人卡片上方新增“名士圈”模块，展示紧密关联的圈内好友，支持点击实时穿梭与对焦。
- **时空同台自动识别**：基于生卒年与足迹地点，动态识别诗人间的“时空交集点”，在卡片中提示历史上的真实偶遇。
- **互赠诗词穿梭交互**：在作品列表中高亮“赠予 [某人]”的作品，点击名字可直接在 3D 空间中飞向目标。
- **全朝代社交渊源补全**：精修了唐、宋、元、明、清全朝代核心人物的社交关系描述，修复了多处历史数据冲突。

## 🛠 核心技术栈

- **框架**: Next.js 14 (App Router)
- **渲染**: Three.js / React Force Graph 3D
- **样式**: Vanilla CSS (Dopamine Clay Style)
- **排印**: Noto Serif SC (古典衬线竖排系统)
- **逻辑**: 使用 `useMemo` 与 `Web Workers` 优化千万级关系路径计算
- **动画**: Framer Motion & CSS keyframes

## 🚀 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

---

**LaoA's AI Lab // 诗外星辰项目 // Version 3.0 Release**

