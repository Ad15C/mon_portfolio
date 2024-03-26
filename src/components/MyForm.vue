<template>
  <form @submit.prevent="validateInfo" id="myForm" method="post">
    <p>
      Pour toutes informations, remplissez le formulaire ci-dessous. Je reviendrai vers vous dés que
      possible.
    </p>
    <br />

    <label for="lastName">Votre Nom:</label><br />
    <input type="text" id="lastName" v-model.trim="user.lastName" /><br />

    <label for="firstName">Votre Prénom:</label><br />
    <input type="text" id="firstName" v-model.trim="user.firstName" /><br />

    <label for="yourMail">Votre Email:</label><br />
    <input type="email" id="yourMail" v-model.trim="user.yourMail" /> <br />

    <label for="yourMessages">Votre Message:</label><br />
    <textarea id="yourMessages" v-model.trim="user.yourMessages" /><br />

    <!-- error message -->
    <div v-if="errorMessage">{{ errorMessages }}}</div>
    <!--success message-->
    <div v-if="successMessage">{{ successMessage }}</div>

    <button type="submit">Envoyer</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { errorMessages } from 'vue/compiler-sfc'

const user = ref({
  lastName: '',
  firstName: '',
  yourMail: '',
  yourMessages: '',
  errorMessages: false,
  successMessage: ''
})

function clearForm() {
  document.getElementById('myForm').reset()
}

function validateInfo(e) {
  if (!this.lastName || !this.firstName || !this.yourMail || !this.yourMessages) {
    this.errorMessage = true
    this.successMessage = ''
    return
  } else {
    console.log(user)
    this.errorMessage = false
    this.successMessage = 'Votre message a été envoyé avec succès'
    clearForm //On Réinitiailise les champs
  }
  e.preventDefault()
}
</script>

<style scoped>
form {
  width: 1500px;
}
</style>
