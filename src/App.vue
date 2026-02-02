<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useThemeStore } from './stores/theme'
import { watch } from 'vue'

const themeStore = useThemeStore()

const updateCSSVariables = () => {
  const root = document.documentElement
  root.style.setProperty('--theme-primary', themeStore.currentColor())
  root.style.setProperty('--theme-primary-hover', themeStore.currentHoverColor())
}

// Initialize theme on mount
updateCSSVariables()

// Watch for theme changes
watch(() => themeStore.currentTheme, () => {
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
