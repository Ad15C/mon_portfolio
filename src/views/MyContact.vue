<template>
  <!--Formulaire-->
  <form id="myForm" @submit.prevent="sendForm">
    <h3>Pour toutes informations, remplissez le formulaire ci-dessous.</h3>

    <br /><br />
    <!--Champs du Formulaire-->
    <label for="lastName">Votre Nom:</label>
    <input type="text" id="lastName" v-model.trim="user.lastName" required /><br />

    <label for="firstName">Votre Prénom:</label>
    <input type="text" id="firstName" v-model.trim="user.firstName" required /><br />

    <label for="yourMail">Votre Email:</label>
    <input type="email" id="yourMail" v-model.trim="user.yourMail" required />
    <br />

    <label for="yourMessages">Votre Message:</label>
    <textarea id="yourMessages" v-model.trim="user.yourMessages" required /><br />

    <!--Bouton de Soumission-->
    <button type="submit" value="submit">Envoyer</button>
  </form>
  <!--Fin du Formulaire-->
</template>

<script setup>
import emailjs from '@emailjs/browser'
import { ref } from 'vue'

const user = ref({
  lastName: '',
  firstName: '',
  yourMail: '',
  yourMessages: ''
})

//Envoi du Formulaire
function sendForm() {
  //Initialisation EMAILJS
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

  //Données d'EmailJs
  const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID

  //Construction du test pour Emailjs
  const test = {
    user_name: user.value.lastName,
    from_name: user.value.firstName,
    user_email: user.value.yourMail,
    message: user.value.yourMessages
  }

  //Soumission du formulaire
  emailjs
    .send(serviceID, templateID, test)
    .then((res) => {
      alert('Votre message a bien été envoyé'), document.querySelector('#myForm').reset()
    })

    .catch((error) => {
      console.log("Erreur lors de l'envoi du formulaire", error),
        alert("ne erreur est survenue lors de l'envoi de votre formulaire")
    })
}
</script>

<style scoped>
</style>
