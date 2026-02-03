<script setup lang="ts">
import { ref } from 'vue'
import AppSidebar from '../components/AppSidebar.vue'

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
    <AppSidebar />
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
  background: var(--bg-primary);
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
  color: var(--text-primary);
  margin: 0;
}

.header-left p {
  font-size: 14px;
  color: var(--text-secondary);
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
  background: var(--bg-card);
  border-radius: 12px;
  border: 1px solid var(--border-color);
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
  border: 2px solid var(--border-color);
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
  background: var(--bg-hover);
  display: flex;
  align-items: center;
  justify-content: center;
}

.article-info h3 {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 4px 0;
}

.article-meta {
  font-size: 13px;
  color: var(--text-secondary);
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
  border: 1px solid var(--border-color);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-icon:hover {
  background: var(--bg-hover);
}

.bulk-action-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background: var(--bg-card);
  border-radius: 12px;
  border: 1px solid var(--border-color);
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.05);
}

.selected-count {
  font-size: 14px;
  color: var(--text-secondary);
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
  border: 1px solid var(--border-color);
  background: var(--bg-card);
  cursor: pointer;
  transition: all 0.2s;
  color: var(--text-primary);
}

.btn:hover {
  background: var(--bg-hover);
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
