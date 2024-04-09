import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Homepage from './views/Homepage.vue'

const router = createRouter(options, {
  history: createWebHistory(),
  routes: [{ path: '/', name: 'Accueil', component: Homepage }]
})

const app = createApp(App)
app.use(plugin, router)
app.mount('#app')
