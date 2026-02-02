<script setup lang="ts">
import { ref } from 'vue'
import { useThemeStore } from '../stores/theme'

const themeStore = useThemeStore()

const articles = ref([
  {
    id: 1,
    title: '如何提高社交媒体营销效果',
    author: '张三',
    abstract: '本文分享了5个实用的社交媒体营销技巧',
    cover: '',
    createdAt: '2024-01-15 10:30'
  },
  {
    id: 2,
    title: '2024年电商发展趋势分析',
    author: '李四',
    abstract: '深度解析2024年电商行业的发展方向和机遇',
    cover: '',
    createdAt: '2024-01-20 14:20'
  },
  {
    id: 3,
    title: '品牌建设的核心要素',
    author: '王五',
    abstract: '探讨如何打造强大的品牌影响力',
    cover: '',
    createdAt: '2024-01-25 09:15'
  }
])

const selectedArticles = ref<string[]>([])
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
          <h1>文章管理</h1>
          <p>管理和编辑您的文章内容</p>
        </div>
      </header>
      <div class="article-list">
        <div v-for="article in articles" :key="article.id" class="article-card">
          <div class="article-left">
            <div class="checkbox">
              <input type="checkbox" :id="`article-${article.id}`" v-model="selectedArticles" :value="article.id">
              <label :for="`article-${article.id}`"></label>
            </div>
            <div class="article-cover">
              <svg v-if="!article.cover" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </div>
            <div class="article-info">
              <h3>{{ article.title }}</h3>
              <p class="article-meta">作者：{{ article.author }}</p>
            </div>
          </div>
          <div class="article-right">
            <button class="btn-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="bulk-action-bar">
        <div class="bulk-left">
          <span class="selected-count">已选择 {{ selectedArticles.length }} 篇文章</span>
        </div>
        <div class="bulk-right">
          <button class="btn">全选</button>
          <button class="btn btn-primary">前往群发</button>
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

.article-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.article-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: #FAFAFA;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
}

.article-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.checkbox {
  position: relative;
}

.checkbox input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkbox label {
  display: block;
  width: 20px;
  height: 20px;
  border: 2px solid #d1d5db;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.checkbox input[type="checkbox"]:checked + label {
  background: var(--theme-primary);
  border-color: var(--theme-primary);
}

.checkbox input[type="checkbox"]:checked + label::after {
  content: '';
  position: absolute;
  left: 5px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.article-cover {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
}

.article-info h3 {
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 4px 0;
}

.article-meta {
  font-size: 13px;
  color: #6b7280;
  margin: 0;
}

.article-right {
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

.bulk-action-bar {
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

.bulk-right {
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

.btn:hover {
  background: #f3f4f6;
}

.btn-primary {
  background: var(--theme-primary);
  color: #FFFFFF;
  border-color: var(--theme-primary);
}

.btn-primary:hover {
  background: var(--theme-primary-hover);
}
</style>
