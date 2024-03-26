import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

createApp(rootComponent, App).use(plugin, router).mount(rootContainer, '#app')
