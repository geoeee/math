import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI Math Roadmap',
  description: '数学基础 → AI 原理 → Agent 构建',
  base: '/math/',
  
  markdown: {
    math: true
  },

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '路线图', link: '/roadmap' },
      { text: '参考资料', link: '/references/' }
    ],

    sidebar: [
      {
        text: '线性代数',
        items: [
          { text: '概览', link: '/01-linear-algebra/' },
          { text: 'Week 1: 向量空间与线性变换', link: '/01-linear-algebra/week1-vector-spaces' },
          { text: 'Week 1: 练习卷 🖨️', link: '/01-linear-algebra/week1-exercises' }
        ]
      },
      {
        text: '概率与统计',
        items: [
          { text: '概览', link: '/02-probability/' }
        ]
      },
      {
        text: '优化',
        items: [
          { text: '概览', link: '/03-optimization/' }
        ]
      },
      {
        text: '信息论',
        items: [
          { text: '概览', link: '/04-information-theory/' }
        ]
      },
      {
        text: '应用',
        items: [
          { text: '概览', link: '/05-applied/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/geoeee/math' }
    ],

    outline: {
      level: [2, 3],
      label: '目录'
    }
  }
})
