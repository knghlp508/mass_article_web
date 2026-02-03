<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AppSidebar from '../components/AppSidebar.vue'

const router = useRouter()

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

const goToArticles = (taskId: number) => {
  router.push({ name: 'articles', params: { taskId } })
}
</script>

<template>
  <div class="page-container">
    <AppSidebar />
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
            <button class="btn-icon" @click="goToArticles(task.id)">
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
  background: var(--bg-card);
  border-radius: 16px;
  border: 1px solid var(--border-color);
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
  color: var(--text-primary);
  margin: 0 0 4px 0;
}

.task-info p {
  font-size: 13px;
  color: var(--text-secondary);
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
  border: 1px solid var(--border-color);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-icon:hover {
  background: var(--bg-hover);
}
</style>
