<template>
  <main>
    <MyHeader />
    <nav>
      <RouterLink to="Accueil">Accueil</RouterLink>
      <RouterLink to="Mes Projets">Mes Projets</RouterLink>
      <RouterLink to="Contact">Contact</RouterLink>
    </nav>
    <RouterView />

    <MyFooter />
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
</script>

<style scoped>
template {
  width: 1500px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
}

nav {
  height: 50px;
  word-spacing: 4%;
  display: flex;
  flex-direction: row;
  background-color: pink;
}
</style>
