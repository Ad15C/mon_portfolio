import Home from '@/views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter(options, {
  history: createWebHistory(),
  routes: [{ path: '/', name: 'Home', component: Home }]
})

export default router
