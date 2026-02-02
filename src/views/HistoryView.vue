<script setup lang="ts">
import { ref } from 'vue'
import { useThemeStore } from '../stores/theme'

const themeStore = useThemeStore()

interface Article {
  title: string
  author: string
  abstract: string
  cover: string
}

interface Task {
  id: number
  name: string
  sendTime: string
  articleCount: number
  apps: Array<{ name: string; icon: string; color: string }>
  expanded: boolean
  articles: Article[]
}

const tasks = ref<Task[]>([
  {
    id: 1,
    name: '2024年1月产品推广活动',
    sendTime: '2024-01-15 10:30',
    articleCount: 2,
    apps: [
      { name: 'X', icon: 'x', color: '#000000' },
      { name: 'Instagram', icon: 'instagram', color: '#E4405F' },
      { name: '微信公众号', icon: 'message-circle', color: '#07C160' }
    ],
    expanded: true,
    articles: [
      { title: '如何提高社交媒体营销效果', author: '张三', abstract: '本文分享了5个实用的社交媒体营销技巧，帮助您快速提升品牌影响力...', cover: '' },
      { title: '2024年电商发展趋势分析', author: '李四', abstract: '深度解析2024年电商行业的发展方向和机遇，为您揭示行业新动向...', cover: '' }
    ]
  },
  {
    id: 2,
    name: '春节营销活动',
    sendTime: '2024-02-08 14:20',
    articleCount: 3,
    apps: [
      { name: 'Instagram', icon: 'instagram', color: '#E4405F' },
      { name: '抖音', icon: 'radio', color: '#000000' }
    ],
    expanded: false,
    articles: []
  },
  {
    id: 3,
    name: '新品发布会宣传',
    sendTime: '2024-03-01 09:00',
    articleCount: 8,
    apps: [
      { name: 'X', icon: 'x', color: '#000000' },
      { name: 'Instagram', icon: 'instagram', color: '#E4405F' },
      { name: '抖音', icon: 'radio', color: '#000000' },
      { name: '微信公众号', icon: 'message-circle', color: '#07C160' }
    ],
    expanded: false,
    articles: []
  },
  {
    id: 4,
    name: '客户回访活动',
    sendTime: '2024-03-15 16:45',
    articleCount: 2,
    apps: [
      { name: '微信公众号', icon: 'message-circle', color: '#07C160' }
    ],
    expanded: false,
    articles: []
  }
])

const toggleExpand = (task: Task) => {
  task.expanded = !task.expanded
}

const currentPage = ref(1)
const totalPages = 3
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
        <router-link to="/history" class="nav-item active">
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
          <h1>历史记录</h1>
          <p>查看所有群发任务的执行记录</p>
        </div>
      </header>
      <div class="task-history-list">
        <div v-for="task in tasks" :key="task.id" class="task-card">
          <div class="task-card-header" @click="toggleExpand(task)">
            <div class="expand-icon" :class="{ expanded: task.expanded }">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline v-if="task.expanded" points="6 9 12 15 18 9"></polyline>
                <polyline v-else points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
            <div class="task-info">
              <h3>{{ task.name }}</h3>
              <p>发送时间：{{ task.sendTime }}</p>
            </div>
            <div class="task-stats">
              <div class="article-count">文章数：{{ task.articleCount }}</div>
              <div class="app-icons">
                <svg v-for="app in task.apps" :key="app.name" width="16" height="16" viewBox="0 0 24 24" fill="none" :stroke="app.color" stroke-width="2">
                  <path v-if="app.icon === 'x'" d="M18 6L6 18M6 6l12 12"></path>
                  <circle v-else-if="app.icon === 'instagram'" cx="12" cy="12" r="10"></circle>
                  <path v-else-if="app.icon === 'message-circle'" d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4 7 7 0 0 1-4.2-2.9 6.06 6.06 0 0 1-3.5-.5 8.5 8.5 0 0 1-2.8-.5 8.48 8.48 0 0 1 7.6-4 8.38 8.38 0 0 1 3.8-.9"></path>
                  <circle v-else-if="app.icon === 'radio'" cx="12" cy="12" r="2"></circle>
                  <path v-else-if="app.icon === 'radio'" d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>
                </svg>
              </div>
            </div>
          </div>
          <div v-if="task.expanded && task.articles.length > 0" class="expanded-articles">
            <div v-for="(article, index) in task.articles" :key="index" class="article-item">
              <div class="article-cover-placeholder">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" stroke-width="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </div>
              <div class="article-info">
                <h4>{{ article.title }}</h4>
                <p class="article-author">作者：{{ article.author }}</p>
                <p class="article-abstract">{{ article.abstract }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination">
        <button class="page-btn prev" :disabled="currentPage === 1">上一页</button>
        <div class="page-numbers">
          <button v-for="page in totalPages" :key="page" class="page-num" :class="{ active: page === currentPage }">
            {{ page }}
          </button>
        </div>
        <button class="page-btn next" :disabled="currentPage === totalPages">下一页</button>
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

.task-history-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.task-card {
  background: #FAFAFA;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  overflow: hidden;
}

.task-card-header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  height: 64px;
  cursor: pointer;
  transition: background 0.2s;
}

.task-card-header:hover {
  background: #f9fafb;
}

.expand-icon {
  width: 24px;
  height: 24px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.task-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
}

.task-info h3 {
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
}

.task-info p {
  font-size: 13px;
  color: #6b7280;
  margin: 0;
}

.task-stats {
  display: flex;
  gap: 16px;
  align-items: center;
}

.article-count {
  font-size: 13px;
  color: #6b7280;
}

.app-icons {
  display: flex;
  gap: 8px;
}

.expanded-articles {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 8px 20px 16px 20px;
  border-top: 1px solid #e5e7eb;
}

.article-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: #f9fafb;
  border-radius: 8px;
}

.article-cover-placeholder {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.article-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
}

.article-info h4 {
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
}

.article-author {
  font-size: 12px;
  color: #6b7280;
  margin: 0;
}

.article-abstract {
  font-size: 12px;
  color: #6b7280;
  margin: 0;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.page-btn {
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid #e5e7eb;
  background: #FAFAFA;
  cursor: pointer;
  transition: all 0.2s;
}

.page-btn:disabled {
  color: #9ca3af;
  cursor: not-allowed;
}

.page-btn:not(:disabled):hover {
  background: #f3f4f6;
}

.page-numbers {
  display: flex;
  gap: 4px;
}

.page-num {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid #e5e7eb;
  background: #FAFAFA;
  cursor: pointer;
  transition: all 0.2s;
}

.page-num:hover {
  background: #f3f4f6;
}

.page-num.active {
  background: var(--theme-primary);
  color: #FFFFFF;
  border-color: var(--theme-primary);
}
</style>
