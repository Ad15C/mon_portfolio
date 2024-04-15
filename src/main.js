import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
import Homepage from './views/Homepage.vue'
import NotFound from './views/NotFound.vue'

const app = createApp(App)

app.use(router)
app.mount('#app')
