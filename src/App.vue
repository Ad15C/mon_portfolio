<template>
  <MyHeader />

  <nav>
    <RouterLink to="/">Accueil</RouterLink>
  </nav>

  <MyPage :my-projects="myProjects" />

  <MyForm />

  <MyFooter />

  <RouterView />
</template>

<script setup>
import MyHeader from './components/MyHeader.vue'
import MyPage from './components/MyPage.vue'
import MyForm from './components/MyForm.vue'
import MyFooter from './components/MyFooter.vue'

const myProjects = 'Ci-dessous, vous trouverez les derniers projets réalisés dernièrement:'
</script>

<style scoped>
template {
  width: 1500px;
  height: auto;
}
</style>
