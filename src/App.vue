<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useThemeStore } from './stores/theme'
import { watch } from 'vue'

const themeStore = useThemeStore()

const updateCSSVariables = () => {
  const root = document.documentElement
  const isDark = themeStore.currentMode === 'dark'

  // 设置颜色主题变量
  root.style.setProperty('--theme-primary', themeStore.currentColor())
  root.style.setProperty('--theme-primary-hover', themeStore.currentHoverColor())

  // 设置深色/浅色模式变量
  if (isDark) {
    // 深色模式 - 背景 #1A1A1A，字体颜色变成浅色
    root.style.setProperty('--bg-primary', '#1A1A1A')
    root.style.setProperty('--bg-secondary', '#262626')
    root.style.setProperty('--bg-card', '#262626')
    root.style.setProperty('--bg-hover', '#333333')
    root.style.setProperty('--border-color', '#404040')

    // 字体颜色 - 浅色
    root.style.setProperty('--text-primary', '#FAFAFA')
    root.style.setProperty('--text-secondary', '#A3A3A3')
    root.style.setProperty('--text-tertiary', '#737373')

    // 侧边栏
    root.style.setProperty('--sidebar-bg', '#1A1A1A')
    root.style.setProperty('--sidebar-border', '#404040')
  } else {
    // 浅色模式 - 背景 #FFFFFF，字体颜色保留现有的黑色和灰色
    root.style.setProperty('--bg-primary', '#FFFFFF')
    root.style.setProperty('--bg-secondary', '#FAFAFA')
    root.style.setProperty('--bg-card', '#FAFAFA')
    root.style.setProperty('--bg-hover', '#f3f4f6')
    root.style.setProperty('--border-color', '#e5e7eb')

    // 字体颜色 - 黑色和灰色（保持现有颜色）
    root.style.setProperty('--text-primary', '#1a1a1a')
    root.style.setProperty('--text-secondary', '#6b7280')
    root.style.setProperty('--text-tertiary', '#9ca3af')

    // 侧边栏
    root.style.setProperty('--sidebar-bg', '#FFFFFF')
    root.style.setProperty('--sidebar-border', '#e5e7eb')
  }
}

// Initialize theme on mount
updateCSSVariables()

// Watch for theme changes
watch(() => themeStore.currentTheme, () => {
  updateCSSVariables()
})

watch(() => themeStore.currentMode, () => {
  updateCSSVariables()
})
</script>

<template>
  <RouterView />
</template>

<style>
#app {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
}
</style>
