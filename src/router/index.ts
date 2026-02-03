import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'tasks',
    component: () => import('../views/TasksView.vue')
  },
  {
    path: '/articles/:taskId',
    name: 'articles',
    component: () => import('../views/ArticlesView.vue')
  },
  {
    path: '/apps',
    name: 'apps',
    component: () => import('../views/AppsView.vue')
  },
  {
    path: '/history',
    name: 'history',
    component: () => import('../views/HistoryView.vue')
  },
  {
    path: '/success',
    name: 'success',
    component: () => import('../views/SuccessView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
