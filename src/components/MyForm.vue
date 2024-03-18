<template>
  <form @submit.prevent="addInfo" id="myForm">
    <label for="lastName">Votre Nom:</label><br />
    <input type="text" id="lastName" v-model.trim="user.lastName" /><br />

    <label for="firstName">Votre Nom:</label><br />
    <input type="text" id="firstName" v-model.trim="user.fisrtName" /><br />

    <label for="mail">Votre Email:</label><br />
    <input type="email" id="yourMail" v-model.trim="user.yourMail" /> <br />

    <label for="message">Votre Message:</label><br />
    <input type="text" id="yourMessage" v-model.trim="yourMessage" /><br />

    <button type="submit" @click="addInfo">Envoyer</button>
  </form>
</template>

<script>
import { ref } from 'vue'

export default {
  setup(props, context) {
    const user = {
      lastName: ref('Veuillez indiquer votre nom'),
      firstName: ref('Veuillez indiquer votre Prénom'),
      yourMail: ref('Vreuillez indiquer votre adresse Email'),
      yourMessage: ref('Veuillez saisir votre demande')
    }

    const addInfo = function () {
      console.log('myForm | addInfo() | user', user.value), context.emit('add', user.value)

      addInfo.value = ''

      return {
        lastName,
        firstName,
        yourMail,
        yourMessage,
        addInfo
      }
    }
  }
}
</script>

<style scoped></style>
