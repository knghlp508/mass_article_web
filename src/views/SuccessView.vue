<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AppSidebar from '../components/AppSidebar.vue'

const router = useRouter()

// Mock data - in real app this would come from route params or state
const taskName = ref('产品推广活动')
const articleCount = ref(3)
const platforms = ref('X、Instagram、微信公众号')
const publishTime = ref(new Date().toLocaleString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).replace(/\//g, '-'))

const goToTasks = () => {
  router.push('/')
}

const goToHistory = () => {
  router.push('/history')
}
</script>

<template>
  <div class="page-container">
    <AppSidebar />
    <div class="main-content">
      <div class="success-wrapper">
        <!-- Success Icon and Message -->
        <div class="top-section">
          <div class="success-icon">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h1 class="success-title">群发成功！</h1>
          <p class="success-desc">您的内容已成功发布到选定的平台</p>
        </div>

        <!-- Details Frame -->
        <div class="details-frame">
          <h2 class="details-title">发布详情</h2>
          <div class="detail-row">
            <span class="detail-label">任务名称：</span>
            <span class="detail-value">{{ taskName }}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">发布文章：</span>
            <span class="detail-value">{{ articleCount }} 篇</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">发布平台：</span>
            <span class="detail-value">{{ platforms }}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">发布时间：</span>
            <span class="detail-value">{{ publishTime }}</span>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="button-container">
          <button class="btn btn-secondary" @click="goToTasks">
            返回任务列表
          </button>
          <button class="btn btn-primary" @click="goToHistory">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            查看历史记录
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
}

.success-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
}

.top-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.success-icon {
  width: 120px;
  height: 120px;
  background: #A1CE50;
  border-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.success-title {
  font-size: 32px;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

.success-desc {
  font-size: 16px;
  color: var(--text-secondary);
  margin: 0;
}

.details-frame {
  width: 640px;
  padding: 24px;
  background: var(--bg-card);
  border-radius: 12px;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.details-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.detail-row {
  display: flex;
  gap: 16px;
  height: 24px;
  align-items: center;
}

.detail-label {
  font-size: 14px;
  color: var(--text-secondary);
  width: 100px;
  flex-shrink: 0;
}

.detail-value {
  font-size: 14px;
  color: var(--text-primary);
  font-weight: 500;
}

.button-container {
  display: flex;
  gap: 16px;
  align-items: center;
  height: 48px;
}

.btn {
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid var(--border-color);
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 8px;
}

.btn-secondary {
  background: var(--bg-card);
  color: var(--text-primary);
  width: 180px;
  justify-content: center;
}

.btn-secondary:hover {
  background: var(--bg-hover);
}

.btn-primary {
  background: var(--theme-primary);
  color: #FFFFFF;
  border-color: var(--theme-primary);
  width: 180px;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(254, 55, 86, 0.2);
}

.btn-primary:hover {
  background: var(--theme-primary-hover);
}
</style>
