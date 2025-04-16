import AppAbout from '@/components/About/AppAbout.vue'
import AppHome from '@/components/Home/AppHome.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: AppHome },
    { path: '/about', component: AppAbout },
  ],
})

export default router
