export const tangData = {
  nodes: [
    { id: '李白', group: 1, val: 280, color: '#fbbf24', desc: '诗仙，盛唐浪漫主义' },
    { id: '杜甫', group: 2, val: 260, color: '#60a5fa', desc: '诗圣，现实主义' },
    { id: '白居易', group: 3, val: 180, color: '#a78bfa', desc: '诗魔，新乐府运动' },
    { id: '王维', group: 4, val: 150, color: '#34d399', desc: '诗佛，山山水水' },
    { id: '李商隐', group: 5, val: 120, color: '#f472b6', desc: '晚唐，无题诗' },
    { id: '杜牧', group: 5, val: 100, color: '#f472b6', desc: '小杜，晚唐' },
    { id: '韩愈', group: 6, val: 90, color: '#fb923c', desc: '文起八代之衰' },
    { id: '柳宗元', group: 6, val: 85, color: '#fb923c', desc: '唐宋八大家' },
    { id: '孟浩然', group: 4, val: 80, color: '#34d399', desc: '山水田园' },
    { id: '王昌龄', group: 7, val: 70, color: '#ef4444', desc: '七绝圣手' },
    { id: '高适', group: 7, val: 55, color: '#ef4444', desc: '边塞诗人' },
    { id: '岑参', group: 7, val: 52, color: '#ef4444', desc: '边塞诗人' }
  ],
  links: [
    { source: '李白', target: '杜甫', value: 10, type: '李杜' },
    { source: '李白', target: '孟浩然', value: 8, type: '好友' },
    { source: '李白', target: '王昌龄', value: 6, type: '好友' },
    { source: '杜甫', target: '白居易', value: 7, type: '传承' },
    { source: '杜甫', target: '韩愈', value: 6, type: '影响' },
    { source: '白居易', target: '李商隐', value: 5, type: '影响' },
    { source: '王维', target: '孟浩然', value: 8, type: '同派' },
    { source: '李商隐', target: '杜牧', value: 7, type: '小李杜' },
    { source: '韩愈', target: '柳宗元', value: 9, type: '同道' },
    { source: '高适', target: '岑参', value: 7, type: '同派' },
    { source: '高适', target: '王昌龄', value: 6, type: '同派' }
  ]
};
