// pages/index/index.js
Page({
  data: {
    // 这里替换成您部署后的 H5 域名
    url: 'https://poet-stargraph.vercel.app/'
  },
  onLoad: function (options) {
    if (options.path) {
      this.setData({
        url: decodeURIComponent(options.path)
      });
    }
  },
  onShareAppMessage: function () {
    return {
      title: '诗外星辰 - 诗人图谱可视化',
      path: '/pages/index/index?path=' + encodeURIComponent(this.data.url)
    };
  }
})
