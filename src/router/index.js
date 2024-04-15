import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/views/Homepage.vue'
import { component } from 'vue/types/umd'
import NotFound from '@/views/NotFound.vue'

const routes = [
  { path: '/', name: 'Accueil', component: Homepage },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default routes
