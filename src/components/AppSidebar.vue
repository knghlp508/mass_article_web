<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useThemeStore } from '../stores/theme'

const route = useRoute()
const themeStore = useThemeStore()

// 根据当前路由判断激活的导航项
// 任务、文章和应用相关页面 → 高亮"任务列表"
// 历史记录相关页面 → 高亮"历史记录"
const activeNav = computed(() => {
  const path = route.path
  if (path === '/history') {
    return 'history'
  }
  return 'tasks'
})

const handleToggleMode = () => {
  themeStore.toggleMode()
}

const isDarkMode = computed(() => themeStore.currentMode === 'dark')
</script>

<template>
  <div class="sidebar">
    <div class="logo">
      <div class="logo-icon"></div>
      <span class="logo-text">群发助手</span>
      <button class="theme-toggle" @click="handleToggleMode">
        <span class="toggle-thumb" :class="{ dark: isDarkMode }">
          <svg v-if="!isDarkMode" class="icon sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
          <svg v-else class="icon moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </span>
      </button>
    </div>
    <nav class="navigation">
      <router-link to="/" class="nav-item" :class="{ active: activeNav === 'tasks' }">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
        <span>任务列表</span>
      </router-link>
      <router-link to="/history" class="nav-item" :class="{ active: activeNav === 'history' }">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        <span>历史记录</span>
      </router-link>
    </nav>
    <div class="theme-switcher">
      <div class="theme-btn pink" :class="{ active: themeStore.currentTheme === 'pink' }" @click="themeStore.setTheme('pink')"></div>
      <div class="theme-btn green" :class="{ active: themeStore.currentTheme === 'green' }" @click="themeStore.setTheme('green')"></div>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  width: 260px;
  height: 100%;
  padding: 16px;
  border-right: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: var(--sidebar-bg);
}

.logo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  gap: 12px;
}

.logo-icon {
  width: 36px;
  height: 36px;
  background: #FE3756;
  border-radius: 10px;
}

.logo-text {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
}

.theme-toggle {
  width: 48px;
  height: 24px;
  background: var(--bg-hover);
  border-radius: 999px;
  border: 1px solid var(--border-color);
  position: relative;
  cursor: pointer;
  transition: all 0.3s;
}

.toggle-thumb {
  position: absolute;
  left: 2px;
  top: 2px;
  width: 20px;
  height: 20px;
  background: var(--bg-primary);
  border-radius: 999px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.toggle-thumb.dark {
  left: 26px;
}

.toggle-thumb .icon {
  width: 14px;
  height: 14px;
  color: var(--text-secondary);
}

.toggle-thumb .icon.sun {
  color: #f59e0b;
}

.toggle-thumb .icon.moon {
  color: #6366f1;
}

.navigation {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 8px;
  color: var(--text-primary);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
}

.nav-item:hover {
  background: var(--bg-hover);
}

.nav-item.active {
  background: var(--theme-primary);
  color: #FFFFFF;
}

.nav-item svg {
  width: 20px;
  height: 20px;
}

.theme-switcher {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
}

.theme-btn {
  width: 24px;
  height: 24px;
  border-radius: 6px;
  cursor: pointer;
  transition: transform 0.2s;
  position: relative;
}

.theme-btn:hover {
  transform: scale(1.1);
}

.theme-btn.pink {
  background: #FE3756;
}

.theme-btn.pink.active::after {
  content: '';
  position: absolute;
  top: 5px;
  left: 5px;
  width: 14px;
  height: 14px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E") center/contain;
}

.theme-btn.green.active::after {
  content: '';
  position: absolute;
  top: 5px;
  left: 5px;
  width: 14px;
  height: 14px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E") center/contain;
}

.theme-btn.green {
  background: #A1CE50;
}
</style>
