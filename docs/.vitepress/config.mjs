import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '我的博客',
  description: '分享技术、记录生活',
  lang: 'zh-CN',
  lastUpdated: true,
  
  themeConfig: {
    logo: '/logo.svg',
    
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
      { text: '关于', link: '/about' },
    ],
    
    sidebar: {
      '/posts/': [
        {
          text: '文章列表',
          items: [
            { text: '博客搭建完成', link: '/posts/first-post' },
            { text: 'Markdown 示例', link: '/posts/markdown-demo' },
          ]
        }
      ]
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourname' }
    ],
    
    footer: {
      message: '使用 VitePress 构建',
      copyright: 'Copyright © 2026'
    },
    
    search: {
      provider: 'local'
    },
    
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    
    outline: {
      label: '页面导航'
    },
    
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    }
  },
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ]
})
