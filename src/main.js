import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

//Importation des Pages
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
import Homepage from './views/Homepage.vue'
import MyProject from './views/MyProject.vue'
import MyContact from './views/MyContact.vue'

const app = createApp(App)

//Montage des pages
app._component('MyHeader', MyHeader);
app._component('MyFooter', MyFooter);
app._component('Homepage', Homepage);
app._component('MyProject', MyProject);
app._component('MyContact', MyContact);

app.use(router)
app.mount('#app')
