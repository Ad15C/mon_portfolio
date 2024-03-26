<template>
  <MyHeader />

  <MyPage :my-projects="myProjects" />
  <MyForm />

  <MyFooter />

  <router-link to="/">Home</router-link>

  <router-view />
</template>

<script setup>
import MyHeader from './components/MyHeader.vue'
import MyPage from './components/MyPage.vue'
import MyForm from './components/MyForm.vue'
import MyFooter from './components/MyFooter.vue'
import { routerLink, routerView } from 'vue-router'

const myProjects = 'Ci-dessous, vous trouverez les derniers projets réalisés dernièrement:'
</script>

<style scoped></style>
