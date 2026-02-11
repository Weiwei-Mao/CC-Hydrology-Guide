import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Claude Code Guide for Hydrological Research',
  description: 'A Practical Guide to Claude Code for Hydrological Research',

  // Base path for GitHub Pages
  base: '/CC-Hydrology-Guide/',

  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        nav: [
          { text: '指南', link: '/zh/guide/', items: [
            { text: '基础入门', link: '/zh/guide/getting-started' },
            { text: '常用功能', link: '/zh/guide/common-features' },
            { text: '水文场景案例', link: '/zh/guide/hydrology-use-cases' },
            { text: '进阶技巧', link: '/zh/guide/advanced-tips' }
          ]}
        ],

        sidebar: {
          '/zh/guide/': [
            {
              text: '指南',
              items: [
                { text: '基础入门', link: '/zh/guide/getting-started' },
                { text: '常用功能', link: '/zh/guide/common-features' },
                { text: '水文场景案例', link: '/zh/guide/hydrology-use-cases' },
                { text: '进阶技巧', link: '/zh/guide/advanced-tips' }
              ]
            }
          ]
        },

        footer: {
          message: '基于 MIT 许可证发布',
          copyright: 'Copyright © 2025 Weiwei Mao'
        }
      }
    }
  },

  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/', items: [
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Common Features', link: '/guide/common-features' },
        { text: 'Hydrology Use Cases', link: '/guide/hydrology-use-cases' },
        { text: 'Advanced Tips', link: '/guide/advanced-tips' }
      ]}
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Common Features', link: '/guide/common-features' },
            { text: 'Hydrology Use Cases', link: '/guide/hydrology-use-cases' },
            { text: 'Advanced Tips', link: '/guide/advanced-tips' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Weiwei-Mao/CC-Hydrology-Guide' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 Weiwei Mao'
    }
  }
})
