import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import MyHeader from './components/MyHeader.vue'
import Homepage from './views/Homepage.vue'
import MyProject from './views/MyProject.vue'
import MyContact from './views/MyContact.vue'
import MyFooter from './components/MyFooter.vue'

const app = createApp(App)

app.component('MyHeader', MyHeader),
  app.component('Homepage', Homepage),
  app.component('MyProject', MyProject),
  app.component('MyContact', MyContact),
  app.component('MyFooter', MyFooter)

app.use(router)
app.mount('#app')
