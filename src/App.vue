<template>
  <MyHeader />
  <RouterLink to="Accueil">Accueil</RouterLink>
  <RouterView />

  <MyFooter />
</template>

<script setup>
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
</script>

<style scoped>
template {
  width: 1500px;
}
</style>
