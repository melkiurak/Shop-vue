import AppHome from '@/page/Home/AppHome.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: AppHome,
      meta: {
        products: [],
      },
    },
  ],
})

export default router
