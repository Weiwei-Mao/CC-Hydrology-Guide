<script setup lang="ts">
/**
 * 自定义首页组件
 * 专为水文研究指南设计
 * 兼容 SSR (Server-Side Rendering)
 */
import { computed, onMounted, ref } from 'vue'

// 使用 ref 来追踪语言状态，避免 SSR 问题
const isZh = ref(false)

// 在客户端挂载后检测语言
onMounted(() => {
  isZh.value = window.location.pathname.startsWith('/zh/')
})

// 英文内容
const contentEn = {
  title: 'Claude Code Guide for Hydrological Research',
  tagline: 'A Practical Guide for Hydrological Research',
  subtitle: 'For hydrological research and related fields',
  actions: [
    { text: 'Get Started', link: '/guide/getting-started', primary: true },
    { text: 'View on GitHub', link: 'https://github.com/Weiwei-Mao/CC-Hydrology-Guide', primary: false }
  ],
  features: [
    {
      icon: '📊',
      title: 'Data Analysis',
      desc: 'Learn how to efficiently process hydrological time series data with AI assistance.'
    },
    {
      icon: '📈',
      title: 'Visualization',
      desc: 'Quickly generate scientific visualization charts for your research.'
    },
    {
      icon: '📚',
      title: 'Literature Management',
      desc: 'Manage references and assist with paper writing using Claude Code.'
    },
    {
      icon: '🌊',
      title: 'Hydrological Modeling',
      desc: 'Practical tips for using AI in hydrological modeling workflows.'
    },
    {
      icon: '🌍',
      title: 'Bilingual Documentation',
      desc: 'Available in both English and Chinese for broader accessibility.'
    },
    {
      icon: '💡',
      title: 'Practical Examples',
      desc: 'Real-world use cases from actual hydrological research scenarios.'
    }
  ],
  disclaimer: 'This guide reflects my personal experience and is by no means exhaustive. Hydrology is a vast field—this just covers the scenarios I\'ve encountered in my research. Feel free to adapt and extend these examples for your own needs.'
}

// 中文内容
const contentZh = {
  title: 'Claude Code 水文研究指南',
  tagline: '专为水文研究人员打造的实用指南',
  subtitle: '或许适用于环境及相关领域',
  actions: [
    { text: '开始阅读', link: '/zh/guide/getting-started', primary: true },
    { text: '查看 GitHub', link: 'https://github.com/Weiwei-Mao/CC-Hydrology-Guide', primary: false }
  ],
  features: [
    {
      icon: '📊',
      title: '数据分析',
      desc: '学习如何利用 AI 高效处理水文时间序列数据。'
    },
    {
      icon: '📈',
      title: '科研可视化',
      desc: '快速生成研究用的科学可视化图表。'
    },
    {
      icon: '📚',
      title: '文献管理',
      desc: '使用 Claude Code 管理参考文献和辅助论文写作。'
    },
    {
      icon: '🌊',
      title: '水文建模',
      desc: '在水文建模工作流程中使用 AI 的实用技巧。'
    },
    {
      icon: '🌍',
      title: '中英双语',
      desc: '提供中英文双语版本，方便更多读者使用。'
    },
    {
      icon: '💡',
      title: '实用案例',
      desc: '来自真实水文研究场景的实际应用示例。'
    }
  ],
  disclaimer: '本指南反映的是作者个人经验，绝非水文研究的全部内容。水文研究领域博大精深——这里只涵盖了作者在自己的研究中遇到过的场景。欢迎根据你自己的需求进行调整和扩展。'
}

const content = computed(() => isZh.value ? contentZh : contentEn)
</script>

<template>
  <div class="home-container">
    <!-- Hero Section -->
    <div class="home-hero">
      <h1>{{ content.title }}</h1>
      <p class="tagline">{{ content.tagline }}</p>
      <p class="subtitle">{{ content.subtitle }}</p>

      <div class="home-actions">
        <a v-for="action in content.actions" :key="action.text"
           :href="action.link"
           :class="['home-btn', action.primary ? 'primary' : 'alt']">
          {{ action.text }}
        </a>
      </div>
    </div>

    <!-- Features Section -->
    <div class="home-features">
      <div v-for="feature in content.features" :key="feature.title" class="home-feature">
        <div class="home-feature-icon">{{ feature.icon }}</div>
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.desc }}</p>
      </div>
    </div>

    <!-- Disclaimer Section -->
    <div class="home-disclaimer">
      <p><strong>💡 {{ isZh ? '免责声明' : 'Disclaimer' }}</strong></p>
      <p>{{ content.disclaimer }}</p>
    </div>
  </div>
</template>

<style scoped>
/* 样式已定义在 theme/style.css 中 */
</style>
