/**
 * VitePress 自定义主题
 * 继承默认主题，添加自定义组件
 *
 * @see Extending the Default Theme https://vitepress.vuejs.org/guide/custom-theme#extending-the-default-theme
 */
import DefaultTheme from 'vitepress/theme-without-fonts'
import type { Theme } from 'vitepress'
import './style.css'

/**
 * 导出自定义首页组件
 */
import Home from './components/Home.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('HomePage', Home)
  }
} satisfies Theme
