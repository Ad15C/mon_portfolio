<template>
  <MyHeader />

  <MyPage :about-me="aboutMe" :user="user" />
  <input type="text" v-model="user.yourName" /><br />
  <input type="email" v-model="user.yourMail" /><br />
  <input type="textarea" v-model="user.yourMessage" /><br />
  <button>Envoyer</button>
</template>

<script setup>
import MyHeader from '@/components/MyHeader.vue'
import MyPage from '@/components/MyPage.vue'
import { reactive } from 'vue';

const aboutMe = 'Ma mission consiste à aider mes clients à réaliser leurs projets'

const user = reactive(target: {
  yourName = 'Veuillez indiquer votre Nom',
  yourMail = 'Veuillez indiquer votre Mail',
  yourMessage = 'Veuillez saisir votre message',
})

const display => () {
  console.log (user);
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
