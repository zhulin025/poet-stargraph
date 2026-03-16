export const yuanData = {
  nodes: [
    { id: '元好问', group: 1, val: 250, color: '#fbbf24', desc: '金末元初文坛盟主，北方文雄' },
    { id: '关汉卿', group: 2, val: 280, color: '#60a5fa', desc: '元曲四大家之首，戏剧之祖' },
    { id: '白朴', group: 2, val: 180, color: '#60a5fa', desc: '元曲四大家，兰谷先生' },
    { id: '马致远', group: 2, val: 200, color: '#60a5fa', desc: '曲状元，秋思之祖' },
    { id: '郑光祖', group: 2, val: 150, color: '#60a5fa', desc: '元曲四大家，南方剧坛领袖' },
    { id: '王实甫', group: 2, val: 170, color: '#60a5fa', desc: '西厢记作者，辞采华茂' },
    { id: '赵孟頫', group: 3, val: 260, color: '#a78bfa', desc: '元代书画大师，文学领袖' },
    { id: '萨都剌', group: 4, val: 120, color: '#34d399', desc: '色目诗人，边塞豪放风格' },
    { id: '杨维桢', group: 1, val: 140, color: '#fbbf24', desc: '铁崖体，晚元文坛奇才' }
  ],
  links: [
    { source: '元好问', target: '白朴', value: 10, type: '师徒' },
    { source: '关汉卿', target: '马致远', value: 8, type: '同辈' },
    { source: '关汉卿', target: '白朴', value: 7, type: '同辈' },
    { source: '马致远', target: '郑光祖', value: 6, type: '传承' },
    { source: '王实甫', target: '关汉卿', value: 7, type: '同行' },
    { source: '赵孟頫', target: '元好问', value: 5, type: '仰慕' },
    { source: '杨维桢', target: '赵孟頫', value: 4, type: '传承' }
  ]
};
