<template>
  <MyHeader />

  <MyPage :about-me="aboutMe" :my-projects="myProjects" :user="user" />
  <input type="text" v-model.trim="user.yourName" @input="display" /><br />
  <input type="email" v-model.trim="user.yourMail" /><br />
  <input type="textarea" v-model.trim="user.yourMessage" /><br />
  <button>Envoyer</button>

  <MyFooter />
</template>

<script setup>
import MyHeader from '@/components/MyHeader.vue'
import MyPage from '@/components/MyPage.vue'
import MyFooter from '@/components/MyFooter.vue'
import { reactive } from 'vue'

const aboutMe = 'Ma mission consiste à aider mes clients à réaliser leurs projets'

const myProjects = 'Ci-dessous, vous trouverez les derniers projets réalisés'

const user = reactive({
  yourName: 'Veuillez indiquer votre Nom',
  yourMail: 'Veuillez indiquer votre Mail',
  yourMessage: 'Veuillez saisir votre message'
})

const display = 0
{
  console.log(user.yourName.value, user.yourMail.value, user.yourMessage.value)
}
</script>

<style scoped></style>
