<template>
  <form @submit.prevent="validateInfo" id="myForm" method="post">
    
    <p v-if="errors.length">
      <b>Please correct the following error(s):</b>
      <ul>
          <li v-for="error in errors">{{ error }}</li>
      </ul>
    </p>

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
import { ref} from 'vue'

const user = {
  lastName: ref(''),
  firstName: ref(''),
  yourMail: ref(''),
  yourMessages: ref('')
}

data()
{
  return {
    error: [],
    lastName: '',
    firstName: '',
    yourMail: '',
    yourMessages: ''
  }
}

methods: {
  validateInfo(e)
  {
    if (this.lastName | this.firstName | this.yourMail | this.yourMessages) {
      return true
    }
    this.error = []
    if (!lastName) {
      this.errors.push('Veuiilez indiquer votre Nom')
    }
    if (!firstName) {
      this.errors.push('Veuillez inqiquer votre Prénom')
    }
    if (!yourMail) {
      this.errors.push('Veuillez indiquer votre Email')
    }
    if (!yourMessages) {
      this.errors.psuh('Veuillez saisir votre message')
    }
    e.preventDefault()
  }
}


</script>

<style scoped>
form {
  width: 1500px;
}
</style>
