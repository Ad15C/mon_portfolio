import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Accueil', component: () => import('@/views/Homepage.vue') },
    { path: '/MesProjets', name: 'Mes Projets', component: () => import('@/views/Projets.vue') },
    { path: '/Contact', name: 'Contact', component: () => import('@/views/Contact.vue') },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/NotFound.vue') }
  ]
})

export default router
