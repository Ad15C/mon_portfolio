import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/views/Homepage.vue'
import MyContact from '@/views/MyContact.vue'
import MyProject from '@/views/MyProject.vue'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Accueil', component: () => import('@/views/Homepage.vue') },
    { path: '/MesProjets', name: 'Mes Projets', component: () => import('@/views/MyProject.vue') },
    { path: '/Contact', name: 'Contact', component: () => import('@/views/MyContact.vue') },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/NotFound.vue') }
  ]
})
//Ajout de l'exportation par défaut
export default router
