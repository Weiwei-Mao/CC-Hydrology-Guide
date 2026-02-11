/**
 * 侧边栏菜单配置
 *
 * @see sidebar https://vitepress.vuejs.org/guide/theme-sidebar#sidebar
 */

export const sidebar = {
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
}

/**
 * 中文版侧边栏
 */
export const sidebarZh = {
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
}
