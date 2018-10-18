module.exports = {
  title: '熊大叔',
  description: '熊大叔放学习笔记的地方',
  themeConfig: {
    // navbar: false,
    nav: [
      // { text: '首页', link: '/' },
      // { text: 'Guide', link: '/guide/' },
      // { text: 'External', link: 'https://google.com' },
    ],
    lastUpdated: '最后更新时间',
    // sidebar: 'auto'
    sidebar: [
      {
        title: 'Unix哲学读书笔记',
        children: [
          '/Unix/PhilOverview',
          '/Unix/PhilModel',
          '/Unix/PhilClear',
          '/Unix/PhilCompose',
          '/Unix/PhilSplit',
          '/Unix/PhilConcise',
          '/Unix/PhilStingy',
          '/Unix/PhilTransparent',
          '/Unix/PhilRobustness'
        ]
      }
    ]
  }
}