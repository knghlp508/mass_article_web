<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AppSidebar from '../components/AppSidebar.vue'

const route = useRoute()
const router = useRouter()
const taskId = computed(() => Number(route.params.taskId))

// 模拟任务数据
const tasks = {
  1: {
    id: 1,
    name: '2024年1月产品推广活动',
    description: '推广新产品，增加品牌知名度'
  },
  2: {
    id: 2,
    name: '春节营销活动',
    description: '春节期间的特别促销活动'
  }
}

// 模拟每个任务的文章数据
const articlesMap = {
  1: [
    {
      id: 1,
      title: '如何提高社交媒体营销效果',
      author: '张三',
      abstract: '本文分享了5个实用的社交媒体营销技巧，帮助您快速提升品牌影响力',
      cover: '',
      createdAt: '2024-01-15 10:30'
    },
    {
      id: 2,
      title: '2024年电商发展趋势分析',
      author: '李四',
      abstract: '深度解析2024年电商行业的发展方向和机遇，为您揭示行业新动向',
      cover: '',
      createdAt: '2024-01-20 14:20'
    },
    {
      id: 3,
      title: '品牌建设的核心要素',
      author: '王五',
      abstract: '探讨如何打造强大的品牌影响力，从战略定位到视觉传达',
      cover: '',
      createdAt: '2024-01-25 09:15'
    },
    {
      id: 4,
      title: '内容营销实战指南',
      author: '赵六',
      abstract: '从0到1教你如何建立完整的内容营销体系',
      cover: '',
      createdAt: '2024-01-28 16:45'
    },
    {
      id: 5,
      title: '短视频运营技巧',
      author: '孙七',
      abstract: '掌握短视频爆款内容的制作与推广方法',
      cover: '',
      createdAt: '2024-02-01 11:20'
    }
  ],
  2: [
    {
      id: 6,
      title: '春节营销活动策划方案',
      author: '周八',
      abstract: '围绕春节主题的完整营销策划方案设计思路',
      cover: '',
      createdAt: '2024-02-05 09:00'
    },
    {
      id: 7,
      title: '节日促销活动执行手册',
      author: '吴九',
      abstract: '春节期间各类促销活动的具体执行流程和注意事项',
      cover: '',
      createdAt: '2024-02-06 14:30'
    },
    {
      id: 8,
      title: '春节主题文案创作',
      author: '郑十',
      abstract: '精选春节主题营销文案合集，适用于多种场景',
      cover: '',
      createdAt: '2024-02-07 10:15'
    }
  ]
}

const currentTask = computed(() => tasks[taskId.value as keyof typeof tasks])
const articles = computed(() => articlesMap[taskId.value as keyof typeof articlesMap] || [])
const selectedArticles = ref<string[]>([])

const goBack = () => {
  router.push('/')
}

const handleSelectAll = () => {
  if (selectedArticles.value.length === articles.value.length) {
    selectedArticles.value = []
  } else {
    selectedArticles.value = articles.value.map(a => String(a.id))
  }
}

const handleGoToApps = () => {
  router.push('/apps')
}
</script>

<template>
  <div class="page-container">
    <AppSidebar />
    <div class="main-content">
      <header class="page-header">
        <div class="header-left">
          <button class="btn-back" @click="goBack">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <div class="header-title">
            <h1>{{ currentTask?.name }}</h1>
            <p>{{ currentTask?.description }} · {{ articles.length }} 篇文章</p>
          </div>
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
              <svg v-if="!article.cover" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--border-color)" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </div>
            <div class="article-info">
              <h3>{{ article.title }}</h3>
              <p class="article-meta">{{ article.author }} · {{ article.createdAt }}</p>
            </div>
          </div>
          <div class="article-right">
            <button class="btn-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            </button>
            <button class="btn-icon btn-icon-danger">
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
      <div class="bulk-action-bar">
        <div class="bulk-left">
          <span class="selected-count">已选择 {{ selectedArticles.length }} 篇文章</span>
        </div>
        <div class="bulk-right">
          <button class="btn" @click="handleSelectAll">全选</button>
          <button class="btn btn-go-to-apps" @click="handleGoToApps" :disabled="selectedArticles.length === 0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
          前往群发
        </button>
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

.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.btn-back {
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
  color: var(--text-primary);
}

.btn-back:hover {
  background: var(--bg-hover);
}

.header-title h1 {
  font-size: 32px;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

.header-title p {
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

.btn-icon-danger:hover {
  background: #FEE2E2;
  border-color: #FECACA;
  color: #EF4444;
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

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-go-to-apps {
  background: var(--theme-primary);
  color: #FFFFFF;
  border-color: var(--theme-primary);
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 2px 8px rgba(161, 206, 80, 0.2);
}

.btn-go-to-apps:hover:not(:disabled) {
  background: var(--theme-primary-hover);
  border-color: var(--theme-primary-hover);
}
</style>
