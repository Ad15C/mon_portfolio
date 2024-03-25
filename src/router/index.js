import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import App from '@/App.vue'
import Home from './views/Home.vue'

const routes = [{ path: '/', name: 'Home', component: Home }]

const router = createRouter(options, {
  history: createWebHistory(),
  routes
})

export default router
