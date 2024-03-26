import Home from '@/views/Home.vue'
import { createRouter, createMemoryHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/NotFound.vue') }
]

const router = createRouter(options, {
  history: createMemoryHistory(),
  routes
})

export default router
