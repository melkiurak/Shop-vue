import AppHome from '@/components/Home/AppHome.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/', component: AppHome }],
})

export default router
