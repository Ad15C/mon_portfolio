<template>
  <body>
    <header>
      <MyHeader />
    </header>

    <main>
      <MyPage :about-me="aboutMe" :my-projects="myProjects" />
      <MyForm :my-contact="myContact" />
    </main>

    <footer>
      <MyFooter />
    </footer>
  </body>
</template>

<script setup>
import MyHeader from './components/MyHeader.vue'
import MyPage from './components/MyPage.vue'
import MyForm from './components/MyForm.vue'
import MyFooter from './components/MyFooter.vue'

const aboutMe = 'Ma mission consiste à aider mes clients à réaliser leurs projets.....'

const myProjects = 'Ci-dessous, vous trouverez les derniers projets réalisés dernièrement:'

const myContact =
  'Pour toutes informations, remplissez le formulaire et je reviendrai vers vous dés que possisble'
</script>

<style scoped>
body {
  display: block;
}
</style>
