<template>
  <MyHeader />

  <nav>
    <RouterLink to="/">Accueil</RouterLink>
  </nav>
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
  height: auto;
}
</style>
