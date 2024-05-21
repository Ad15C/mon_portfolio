<template>
  <form @submit.prevent="validateInfo" id="myForm" method="post">
    <h3>Pour toutes informations, remplissez le formulaire ci-dessous.</h3>

    <br /><br />

    <label for="lastName">Votre Nom:</label>
    <input type="text" id="lastName" v-model.trim="user.lastName" required /><br />

    <label for="firstName">Votre Prénom:</label>
    <input type="text" id="firstName" v-model.trim="user.firstName" required /><br />

    <label for="yourMail">Votre Email:</label>
    <input type="email" id="yourMail" v-model.trim="user.yourMail" required />
    <br />

    <label for="yourMessages">Votre Message:</label>
    <textarea id="yourMessages" v-model.trim="user.yourMessages" required /><br />

    <!-- Affichage des messages d'erreur ou de succès-->
    <div v-if="errorMessages">Veuillez remplir tous les champs</div>
    <div v-if="successMessage">{{ successMessage }}</div>

    <button type="submit" value="submit">Envoyer</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

let user = ref({
  lastName: '',
  firstName: '',
  yourMail: '',
  yourMessages: ''
})

let errorMessages = ref(false)
let successMessage = ref('')

//Fonction pour valider les Informations du Formulaire de Contact
function validateInfo() {
  if (
    !user.value.lastName ||
    !user.value.firstName ||
    !user.value.yourMail ||
    !user.value.yourMessages
  ) {
    errorMessages = true
    successMessage = ''
  } else {
    errorMessages = false
    successMessage = 'Votre message a été envoyé avec succès'
  }

  //Réinitialisation des champs du formulaire
  setTimeout(() => {
    ;(user.value.lastName = ''),
      (user.value.firstName = ''),
      (user.value.yourMail = ''),
      (user.value.yourMessages = ''),
      (successMessage.value = '') //Effacer le message après un court délai
  }, 2000)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Barlow', sans-serif;
  font-weight: 300;
  font-style: normal;
  font-optical-sizing: auto;
}

form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

input[type='text'],
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type='email'],
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

textarea {
  height: 150px;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  display: inline-block;
  background-color: #172432;
  border: none;
  color: #ddd;
  padding: 12px 150px;
  margin-left: 550px;

  border-radius: 4px;
  cursor: pointer;
}
</style>
