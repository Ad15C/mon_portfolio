<template>
  <form @submit.prevent="validateForm" id="myForm" method="post">
    <p>
      Pour toutes informations, remplissez le formulaire et je reviendrai vers vous dés que
      possisble.
    </p>
    <br />

    <label for="lastName">Votre Nom:</label><br />
    <input type="text" id="lastName" v-model.trim="user.lastName" /><br />

    <label for="firstName" id="firstName">Votre Prénom:</label><br />
    <input type="text" id="firstName" v-model.trim="user.firstName" /><br />

    <label for="yourMail" id="yourMail">Votre Email:</label><br />
    <input type="email" id="yourMail" v-model.trim="user.yourMail" /><br />

    <label for="yourMessages" id="yourMessages">Votre Message:</label><br />
    <textarea v-model.trim="user.yourMessages"> </textarea><br />

    <!-- error message -->
    <div v-if="errorMessage">{{ errorMessage }}</div>

    <button type="submit">Envoyer</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

//Champs du formulaire
const user = ref({
  lastName: '',
  firstName: '',
  yourMail: '',
  yourMessages: ''
})

const errorMessage = 'Veuillez remplir les champs,merci.'

const display = () => {
  console.log(user)
}

function validateForm(e) {
  //on valide les champs
  if (this.lastName || this.firstName || this.yourMail || this.yourMessages) {
    errorMessage
  }
}
</script>

<style scoped>
form {
  width: 1500px;
}
</style>
