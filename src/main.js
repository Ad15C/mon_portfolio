import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
import Menu from './components/Menu.vue'
import Homepage from './views/Homepage.vue'
import About from './views/About.vue'
import MyProject from './views/MyProject.vue'
import MyContact from './views/MyContact.vue'
import NotFound from './views/NotFound.vue'

const app = createApp(App)

app.component('MyHeader', MyHeader)
app.component('Menu', Menu)
app.component('MyFooter', MyFooter)


app.use(router)
app.mount('#app')
