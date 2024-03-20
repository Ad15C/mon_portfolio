import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'

const app = createApp(App).use(plugin, router)
app.mount('#app')
