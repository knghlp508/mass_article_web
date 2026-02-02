<script setup lang="ts">
import { ref } from 'vue'
import { useThemeStore } from '../stores/theme'

const themeStore = useThemeStore()

interface App {
  id: number
  name: string
  account: string
  icon: string
  color: string
  connected: boolean
}

const apps = ref<App[]>([
  { id: 1, name: 'X', account: '@myaccount', icon: 'x', color: '#000000', connected: true },
  { id: 2, name: 'Instagram', account: '@myaccount', icon: 'instagram', color: '#E4405F', connected: true },
  { id: 3, name: '微信公众号', account: '我的公众号', icon: 'message-circle', color: '#07C160', connected: true },
  { id: 4, name: '小红书', account: '@myaccount', icon: 'shopping-bag', color: '#FF2442', connected: false },
  { id: 5, name: '抖音', account: '@myaccount', icon: 'radio', color: '#000000', connected: false },
  { id: 6, name: '微博', account: '@myaccount', icon: 'at-sign', color: '#E6162D', connected: false },
  { id: 7, name: 'Facebook', account: '@myaccount', icon: 'facebook', color: '#1877F2', connected: false },
  { id: 8, name: '微信服务号', account: '@myaccount', icon: 'message-circle', color: '#FF9500', connected: false }
])

const selectedApps = ref<number[]>([])
</script>

<template>
  <div class="page-container">
    <div class="sidebar">
      <div class="logo">
        <div class="logo-icon"></div>
        <span class="logo-text">群发助手</span>
        <button class="theme-toggle">
          <span class="toggle-thumb"></span>
        </button>
      </div>
      <nav class="navigation">
        <router-link to="/" class="nav-item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
          <span>任务列表</span>
        </router-link>
        <router-link to="/history" class="nav-item">
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
    <div class="main-content">
      <header class="page-header">
        <div class="header-left">
          <h1>应用管理</h1>
          <p>选择群发应用</p>
        </div>
      </header>
      <div class="apps-grid">
        <div v-for="app in apps" :key="app.id" class="app-card" :class="{ selected: selectedApps.includes(app.id) }">
          <div class="app-left">
            <div class="checkbox" :class="{ checked: selectedApps.includes(app.id) }">
              <input type="checkbox" :id="`app-${app.id}`" v-model="selectedApps" :value="app.id">
              <label :for="`app-${app.id}`">
                <svg v-if="selectedApps.includes(app.id)" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </label>
            </div>
            <div class="app-icon" :style="{ background: `${app.color}15` }">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" :stroke="app.color" stroke-width="2">
                <path v-if="app.icon === 'x'" d="M18 6L6 18M6 6l12 12"></path>
                <circle v-else-if="app.icon === 'instagram'" cx="12" cy="12" r="10"></circle>
                <path v-else-if="app.icon === 'message-circle'" d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4 7 7 0 0 1-4.2-2.9 6.06 6.06 0 0 1-3.5-.5 8.5 8.5 0 0 1-2.8-.5 8.48 8.48 0 0 1 7.6-4 8.38 8.38 0 0 1 3.8-.9"></path>
                <path v-else-if="app.icon === 'shopping-bag'" d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <circle v-else-if="app.icon === 'radio'" cx="12" cy="12" r="2"></circle>
                <path v-else-if="app.icon === 'radio'" d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>
                <circle v-else-if="app.icon === 'at-sign'" cx="12" cy="12" r="4"></circle>
                <path v-else-if="app.icon === 'at-sign'" d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.74"></path>
                <path v-else-if="app.icon === 'facebook'" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </div>
            <div class="app-info">
              <h3>{{ app.name }}</h3>
              <p>{{ app.account }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="submit-action-bar">
        <div class="submit-left">
          <span class="selected-count">已选择 {{ selectedApps.length }} 个应用</span>
        </div>
        <div class="submit-right">
          <button class="btn">全选</button>
          <button class="btn btn-primary" :disabled="selectedApps.length === 0">确认提交</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  display: flex;
  width: 100%;
  height: 100%;
}

.sidebar {
  width: 260px;
  height: 100%;
  padding: 16px;
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  gap: 8px;
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
  color: #1a1a1a;
}

.theme-toggle {
  width: 48px;
  height: 24px;
  background: #e5e7eb;
  border-radius: 999px;
  border: 1px solid #d1d5db;
  position: relative;
  cursor: pointer;
}

.toggle-thumb {
  position: absolute;
  left: 2px;
  top: 2px;
  width: 20px;
  height: 20px;
  background: #FAFAFA;
  border-radius: 999px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
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
  color: #1a1a1a;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
}

.nav-item:hover {
  background: #f3f4f6;
}

.nav-item.router-link-active {
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
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}

.theme-btn {
  width: 24px;
  height: 24px;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
}

.theme-btn.pink {
  background: #FE3756;
}

.theme-btn.green {
  background: #A1CE50;
}

.theme-btn.pink.active::after,
.theme-btn.green.active::after {
  content: '';
  position: absolute;
  top: 5px;
  left: 5px;
  width: 14px;
  height: 14px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E") center/contain;
}

.main-content {
  flex: 1;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-left h1 {
  font-size: 32px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
}

.header-left p {
  font-size: 14px;
  color: #6b7280;
  margin: 8px 0 0 0;
}

.apps-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.app-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: #FAFAFA;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  cursor: pointer;
  transition: all 0.2s;
}

.app-card:hover {
  border-color: var(--theme-primary);
}

.app-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.checkbox {
  position: relative;
  width: 24px;
  height: 24px;
}

.checkbox input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkbox label {
  display: block;
  width: 24px;
  height: 24px;
  border: 2px solid #d1d5db;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.checkbox.checked label {
  background: var(--theme-primary);
  border-color: var(--theme-primary);
}

.app-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.app-info h3 {
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 4px 0;
}

.app-info p {
  font-size: 13px;
  color: #6b7280;
  margin: 0;
}

.submit-action-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background: #FAFAFA;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.05);
}

.selected-count {
  font-size: 14px;
  color: #6b7280;
}

.submit-right {
  display: flex;
  gap: 12px;
}

.btn {
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid #e5e7eb;
  background: #FAFAFA;
  cursor: pointer;
  transition: all 0.2s;
}

.btn:hover:not(:disabled) {
  background: #f3f4f6;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-primary {
  background: var(--theme-primary);
  color: #FFFFFF;
  border-color: var(--theme-primary);
}

.btn-primary:hover:not(:disabled) {
  background: var(--theme-primary-hover);
}
</style>
