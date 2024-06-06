<template>
  <div id="App">
    <!--Importation des Pages-->
    <MyHeader />
    <main>
      <RouterView />
      <MyProject />
      <MyContact />
    </main>
    <MyFooter />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
import MyProject from './views/MyProject.vue'
import MyContact from './views/MyContact.vue'
</script>

<style scoped></style>
