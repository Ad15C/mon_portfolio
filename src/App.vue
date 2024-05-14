<template>
  <main>
    <MyHeader />
    <nav>
      <RouterLink to="Accueil">Accueil</RouterLink>
      <RouterLink to="Projets">Projets</RouterLink>
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
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Barlow', sans-serif;
  font-weight: 300;
  font-style: normal;
  font-optical-sizing: auto;
}

template {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
}

nav {
  height: 50px;
  word-spacing: 8%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #f2f2f2;
  text-decoration: underline;
  font-size: large;
}
</style>
