import './globals.css';

export const metadata = {
  title: '诗外星辰 (Verses & Voids) - 探索诗词背后的社交宇宙',
  description: '基于 3D 知识图谱探索历代诗人的社交关系网络与传世作品。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
