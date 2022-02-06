const { sidebar } = require('./configs/sidebar.js');
const { navbar } = require('./configs/navbar.js');

module.exports = {
  lang: 'zh-CN',
  title: 'CityU Wiki',
  description: 'A comprehensive guide for CityU',
  head: [['link', { rel: 'icon', href: '/images/logo-dark.svg' }]],
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'images/logo.svg',
    logoDark: 'images/logo-dark.svg',
    docsDir: 'docs',

    navbar: navbar,
    sidebar: sidebar,
    sidebarDepth: 2,
    repo: 'https://github.com/FyisFe/CityU-Wiki',
    notFound: [
      '看起来我们迷路了',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接',
    ],
  },
  plugins: [
    [
      '@vuepress/plugin-google-analytics',
      {
        id: 'G-K194THLEF0',
      },
    ],
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Press "/" ',
          },
        },
        hotKeys: ['/'],
      },
    ],
  ],
};
