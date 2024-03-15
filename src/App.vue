<template>
  <MyHeader />

  <MyPage :about-me="aboutMe" :user="user" />
  <input type="text" v-model.trim="user.yourName" /><br />
  <input type="email" v-model.trim="user.yourMail" /><br />
  <input type="textarea" v-model.trim="user.yourMessage" /><br />
  <button>Envoyer</button>

  <MyFooter />
</template>

<script setup>
import MyHeader from '@/components/MyHeader.vue'
import MyPage from '@/components/MyPage.vue'
import MyFooter from '@/components/MyFooter'
import { reactive } from 'vue';

const aboutMe = 'Ma mission consiste à aider mes clients à réaliser leurs projets'

const user = reactive(target: {
  yourName = 'Veuillez indiquer votre Nom',
  yourMail = 'Veuillez indiquer votre Mail',
  yourMessage = 'Veuillez saisir votre message',
})

const display => () {
  console.log (user.yourName, user.yourMail, user.yourMessage);
}
</script>

<style scoped>
main {
  background-color: #e6e6e6;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-around;
}
</style>
