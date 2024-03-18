<template>
  <form @submit.prevent="addInfo" id="myForm_1">
    <label for="lastName">Votre Nom:</label><br />
    <input type="text" id="lastName" v-model.trim="user.lastName.value" /><br />

    <label for="firstName">Votre Prénom:</label><br />
    <input type="text" id="firstName" v-model.trim="user.firstName.value" /><br />

    <label for="yourMail">Votre Email:</label><br />
    <input type="email" id="yourMail" v-model.trim="user.yourMail.value" /> <br />

    <label for="yourMessages">Votre Message:</label><br />
    <input
      type="text"
      name="yourMessages"
      id="yourMessages"
      v-model.trim="user.yourMessages.value"
    /><br />

    <button type="submit">Envoyer</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const user = {
  lastName: ref('Veuillez indiquer votre nom'),
  firstName: ref('Veuillez indiquer votre Prénom'),
  yourMail: ref('Veuillez indiquer votre adresse Email'),
  yourMessages: ref('Veuillez saisir votre demande')
}

const addInfo = function () {
  console.log('myForm | addInfo() | user', user.value), (addInfo.value = '')

  return {
    lastName,
    firstName,
    yourMail,
    yourMessages,
    addInfo
  }
}
</script>

<style scoped></style>
