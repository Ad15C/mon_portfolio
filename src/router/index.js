import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'

const router = createRouter(options, {
  history: createWebHistory(),
  routes: [{ path: '/', name: 'Home', component: 'Home' }]
})
