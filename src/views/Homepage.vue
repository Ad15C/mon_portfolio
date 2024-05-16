<template>
  <main>
    <!--Section A Propos-->
    <section id="A_propos">
      <p>
        Je m'appelle Adeline et j'aime tout ce qui se rapporte à la technologie, et suis également
        passsionnée de sport. Mon but est de vous permettre à réaliser vos projets, que ce soit un
        site web, une application mobile, etc.<br />
        Je suis prête à relever les défis qui s'offrent à moi.
      </p>
      <br />
    </section>

    <!--Présentation des Projets-->
    <article id="Projets">
      <p>Ci-dessous, vous trouverez les derniers projets réalisés dernièrement:</p>
      <br />
      <div class="mes_projets">
        <div v-for="(project, index) in projects" :key="index">
          <img :src="project.image" alt="Project Image" @click="openModal(project)" />
        </div>
        <Modal v-if="openModal" :project="selectedProject" @close="closeModal" />
      </div>
    </article>

    <!--Formulaire de contact-->
    <form @submit.prevent="validateInfo" id="myForm" method="post">
      <h3 id="myForm">Pour toutes informations, remplissez le formulaire ci-dessous.</h3>

      <br />

      <label for="lastName">Votre Nom:</label>
      <input type="text" id="lastName" v-model.trim="user.lastName" required />

      <label for="firstName">Votre Prénom:</label>
      <input type="text" id="firstName" v-model.trim="user.firstName" required />

      <label for="yourMail">Votre Email:</label>
      <input type="email" id="yourMail" v-model.trim="user.yourMail" required />

      <label for="yourMessages">Votre Message:</label>
      <textarea id="yourMessages" v-model.trim="user.yourMessages" required /><br />

      <!-- Affichage des messages d'erreur ou de succès-->
      <div v-if="errorMessages">Veuillez remplir tous les champs</div>
      <div v-if="successMessage">{{ successMessage }}</div>

      <button id="Form_button" type="submit">Envoyer</button>
    </form>
  </main>
</template>

<script setup>
import { ref } from 'vue'

import Modal from '@/components/Modal.vue'

//Détails pour les différents projets
const projects = ref([
  {
    image: ' /cv.png',
    title: 'CV',
    date: 'Décembre 2023',
    description: 'Réalisation de CV ',
    technologies: 'HTML, CSS, GitHub, VSCode',
    downloadLink: 'https://github.com/Ad15C/Mon_cv.git'
  },

  {
    image: '/cahier_charges.png',
    title: 'Cahier des Charges',
    date: 'Décembre 2023',
    description:
      'Cahier des Charges pour La Socketterie, souhaitant faire une refonte de son site internet et un bilan de la concurrence',
    technologies: 'Word',

    downloadLink: 'public/cahier_des_charges.pdf'
  },

  {
    image: '/commentaire_dynamique.png',
    title: 'Commentaire Dynamique',
    date: 'Février 2024',
    description: 'Réalisation de Commentaire Dynamique ',
    technologies: 'HTML, CSS, GitHub, VSCode, JavaScript',
    downloadLink: 'https://github.com/Ad15C/mon_commentaire.git'
  }
])

//Pour le formulaire
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

main {
  background-color: #aaaaaaad;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

section {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

img {
  width: 100px;
  height: 150px;
}

article {
  width: 100%;
  padding: 12px 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
}

p {
  width: 100%;
  padding: 12px 20px;
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
