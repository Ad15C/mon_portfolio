<template>
  <MyHeader />

  <MyPage
    :about-me="aboutMe"
    :your-name="yourName"
    :your-mail="yourMail"
    :your-message="yourMessage"
  />
  <input type="text" v-model="yourName" /><br />
  <input type="email" v-model="yourMail" /><br />
  <input type="text" v-model="yourMessage" /><br />
  <button>Envoyer</button>
</template>

<script setup>
import MyHeader from '@/components/MyHeader.vue'
import MyPage from '@/components/MyPage.vue'

const aboutMe = 'Ma mission consiste à aider mes clients à réaliser leurs projets'

const yourName = 'Veuillez indiquer votre Nom'
const yourMail = 'Veuillez indiquer votre Mail'
const yourMessage = 'Veuillez saisir votre message'
</script>

<style scoped></style>
