<template>
  <form @submit.prevent="validateInfo" id="myForm" method="post">
    <p>{{ props.myContact }}</p>
    <br />

    <label for="lastName">Votre Nom:</label><br />
    <input type="text" id="lastName" v-model.trim="user.lastName" /><br />

    <label for="firstName">Votre Prénom:</label><br />
    <input type="text" id="firstName" v-model.trim="user.firstName" /><br />

    <label for="yourMail">Votre Email:</label><br />
    <input type="email" id="yourMail" v-model.trim="user.yourMail" /> <br />

    <label for="yourMessages">Votre Message:</label><br />
    <input
      type="textarea"
      name="yourMessages"
      id="yourMessages"
      v-model.trim="user.yourMessages"
    /><br />

    <button type="submit">Envoyer</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps(['myContact'])

const user = ref({
  lastName: '',
  firstName: '',
  yourMail: '',
  yourMessages: ''
})

const display = () => {
  console.log(user)
}
</script>

<style scoped>
form {
  width: 1500px;
}
</style>
