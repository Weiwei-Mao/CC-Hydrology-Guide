import { defineConfig } from 'vitepress'
import { nav, navZh } from './config/nav'
import { sidebar, sidebarZh } from './config/sidebar'
import type MarkdownIt from 'markdown-it'

/**
 * VitePress 配置文件
 * 更多配置项参考：https://vitepress.vuejs.com/config/
 */
export default defineConfig({
  title: 'Claude Code Guide for Hydrological Research',
  description: 'A Practical Guide to Claude Code for Hydrological Research',

  // Base path for GitHub Pages
  base: '/CC-Hydrology-Guide/',

  // Ignore dead links during build (references to files outside docs folder)
  ignoreDeadLinks: true,

  // 缓存目录
  cacheDir: '../../node_modules/.vitepress',

  // 是否显示最后更新时间
  lastUpdated: true,

  // 主题配置
  themeConfig: {
    // 最后更新时间的文案显示
    lastUpdatedText: 'Last Updated',

    // 配置导航栏图标
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Weiwei-Mao/CC-Hydrology-Guide'
      }
    ],

    // 搜索配置
    search: {
      provider: 'local'
    },

    // 页脚配置
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 Weiwei Mao'
    },

    // 导航栏
    nav,

    // 侧边栏
    sidebar
  },

  // 国际化配置
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        lastUpdatedText: 'Last Updated',
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2025 Weiwei Mao'
        }
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        lastUpdatedText: '最后更新时间',
        nav: navZh,
        sidebar: sidebarZh,
        footer: {
          message: '基于 MIT 许可证发布',
          copyright: 'Copyright © 2025 Weiwei Mao'
        }
      }
    }
  },

  // Markdown 配置
  markdown: {
    // 配置 Markdown-it 实例
    config: (md: MarkdownIt) => {
      // 导入表格插件
      const { PluginTable } = require('./plugin')
      md.use(PluginTable)
    }
  }
})
