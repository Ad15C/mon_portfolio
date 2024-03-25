<template>
  <MyHeader />

  <MyPage :about-me="aboutMe" :my-projects="myProjects" />
  <MyForm />

  <MyFooter />

  <RouterLink to="/">Home</RouterLink>|

  <router-view></router-view>
</template>

<script setup>
import MyHeader from './components/MyHeader.vue'
import MyPage from './components/MyPage.vue'
import MyForm from './components/MyForm.vue'
import MyFooter from './components/MyFooter.vue'

const aboutMe = 'Ma mission consiste à aider mes clients à réaliser leurs projets.....'

const myProjects = 'Ci-dessous, vous trouverez les derniers projets réalisés dernièrement:'
</script>

<style scoped></style>
