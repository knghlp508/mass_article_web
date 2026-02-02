<script setup lang="ts">
import { ref } from 'vue'
import { useThemeStore } from '../stores/theme'

const themeStore = useThemeStore()

const tasks = ref([
  {
    id: 1,
    name: '2024年1月产品推广活动',
    description: '推广新产品，增加品牌知名度',
    articleCount: 5,
    apps: ['X', 'Instagram', '微信公众号'],
    createdAt: '2024-01-15 10:30'
  },
  {
    id: 2,
    name: '春节营销活动',
    description: '春节期间的特别促销活动',
    articleCount: 3,
    apps: ['Instagram', '抖音'],
    createdAt: '2024-02-08 14:20'
  }
])
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
        <router-link to="/" class="nav-item active">
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
          <h1>任务列表</h1>
          <p>管理您的群发任务</p>
        </div>
        <div class="header-right">
          <button class="btn btn-primary">创建任务</button>
        </div>
      </header>
      <div class="task-grid">
        <div v-for="task in tasks" :key="task.id" class="task-card">
          <div class="task-left">
            <div class="task-info">
              <h3>{{ task.name }}</h3>
              <p>{{ task.description }}</p>
            </div>
          </div>
          <div class="task-actions">
            <button class="btn-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            </button>
            <button class="btn-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
            </button>
          </div>
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
  border: 1px solid #e5e7eb;
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
  position: relative;
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

.btn {
  padding: 10px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary {
  background: var(--theme-primary);
  color: #FFFFFF;
  box-shadow: 0 2px 8px rgba(254, 55, 86, 0.3);
}

.btn-primary:hover {
  background: var(--theme-primary-hover);
}

.task-grid {
  display: grid;
  gap: 16px;
}

.task-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #FAFAFA;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.task-left {
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
}

.task-info h3 {
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 4px 0;
}

.task-info p {
  font-size: 13px;
  color: #6b7280;
  margin: 0;
}

.task-actions {
  display: flex;
  gap: 8px;
}

.btn-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-icon:hover {
  background: #f3f4f6;
}
</style>
