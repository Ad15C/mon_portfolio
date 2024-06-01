<template>
  <form id="myForm" @submit.prevent="sendForm">
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

    <button type="submit" value="submit">Envoyer</button>
  </form>
</template>

<script setup>
import emailjs from '@emailjs/browser'
import { ref } from 'vue'

const user =  ref({
  lastName: '',
  firstName: '',
  yourMail: '',
  yourMessages: ''
  })

//Envoi du Formulaire
function sendForm() {
  //Initialisation EMAILJS
  (function () {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
  })();

  const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID,
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID,

  //Construction des paramètres pour Emailjs
  const params = {
      lastName: user.value.lastName,
      firstName: user.value.firstName,
      yourMail: user.value.yourMail,
      yourMessages: user.value.yourMessages
  }

  const test = {
    user_name: 'A',
    from_name: 'b',
    user_email: 'c',
    message: 'e'
  }


  //Soumission du formulaire
  emailjs
    .send(serviceID, templateID, params, test)
    .then((res) => {
      alert('Votre message a bien été envoyé'),
      document.querySelector('#myForm').reset(),
    })
    .catch((error) => {
      console.log("Erreur lors de l'envoi du formulaire", error ),
      alert("ne erreur est survenue lors de l'envoi de votre formulaire"),
    })
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
