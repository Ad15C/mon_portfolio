import { createRouter, createWebHistory } from 'vue-router'

//Personnalisation des routes
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
