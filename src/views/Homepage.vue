<template>
  <!--Section A Propos-->
  <section id="A_propos">
    <p>
      Je m'appelle Adeline Canon et j'aime tout ce qui se rapporte à la technologie, et suis également passsionnée de sport. <br>
      Mon but est de vous permettre à réaliser vos projets, que ce soit un site web, une application mobile.<br />
      Je suis prête à relever les défis qui s'offrent à moi.
    </p>
    <br />
  </section>
  <!--Fin Section A Propos-->

  <!--Section Projets-->
  <section id="Projets">
    <h3>Ci-dessous, vous trouverez les derniers projets réalisés dernièrement:</h3>
    <br />
    <div class="mes_projets">
      <div v-for="(project, index) in projects" :key="index" class="project">
        <figure>
          <img
            :src="project.src"
            @click="openModal(project)"
            class="project-image"
            :alt="project.title"
          />
          <figcaption>
            {{ project.title }} <br />
            {{ project.date }}
          </figcaption>
        </figure>
      </div>
      <Modal :is-open-modal="isModalOpen" :project="selectedProject" @close="closeModal" />
    </div>
  </section>
  <!--Fin Section Projets-->

  <!--Formulaire de Contact-->
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
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'
import emailjs from '@emailjs/browser'

//Pour la section Projet
const project = ref()

//Détails pour les différents projets
const projects = ref([
  {
    id: 1,
    src: '/cv.png',
    title: 'CV',
    date: 'Décembre 2023',
    description: 'Réalisation Curriculum Vitae',
    technologies: 'HTML, CSS, GitHub, VSCode',
    downloadLink: 'https://github.com/Ad15C/Mon_cv.git'
  },

  {
    id: 2,
    src: '/cahier_des_charges.png',
    title: 'Cahier des Charges',
    date: 'Décembre 2023',
    description:'Rédaction Cahier des Charges, pour La Socketterie, souhaitant effectuer une refonte de son site internet et un bilan de la concurrence',
    technologies: 'Word',
    downloadLink: 'public/cahier_des_charges.pdf'
  },

  {
    id: 3,
    src: '/commentaire_dynamique_img.png',
    title: 'Commentaire Dynamique',
    date: 'Février 2024',
    description: 'Réalisation de Commentaire Dynamique ',
    technologies: 'HTML, CSS, GitHub, VSCode, JavaScript',
    downloadLink: 'https://github.com/Ad15C/mon_commentaire.git'
  }
])

//Sélection du Projet
//la valeur nulle est utilisée pour l'état initial où le modal n'est pas affiché
let selectedProject = ref(null)

let isModalOpen = ref(false)

//Ouverture du Modal
const openModal = (project) => {
  selectedProject.value = project,
  isModalOpen = true
}

//Fermeture du Modal
const closeModal = () => {
  selectedProject.value = project,
  isModalOpen = false
}

//Fermeture en cliquant en dehors du modal
const clickOutside = (event) => {
  if (isModalOpen && event.target.closest('.modal')) {
    closeModal()
  }
}
document.addEventListener('click', clickOutside)

//Fermeture en appuyant sur Escape
const handleEscape = (event) => {
  if (isModalOpen && event.key) {
    closeModal()
  }
}
document.addEventListener('keydown', handleEscape)

//Section Formulaire de Contact
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
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Barlow';
  font-weight: 300;
  font-style: normal;
}

section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-size: 16px;
}

h3 {
  padding-left: 20px;
  text-align: left;
  margin-bottom: 20px;
}

figcaption {
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.mes_projets {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 60px; /* Espace entre les projets */
}

.project {
  margin: 10px;
  text-align: center;
  flex: 1 1 200px; /* Flex-grow, flex-shrink, and flex-basis */
  max-width: 200px;
}

.project-image {
  width: 200px;
  height: 270px;
  height: auto;
  cursor: pointer;
  transition: transform 0.3s;
}

.project-image:hover {
  transform: scale(1.05);
  box-shadow: 12px 10px 0px 2px #aaaaaaad; /* Ombre en bas à droite */
}

.project h3 {
  margin-top: 10px;
}

p {
  padding-left: 20px;
  padding-right: 20px;
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
  margin-left: 435px;
  padding: 12px 150px;
  border-radius: 4px;
  cursor: pointer;
}

a {
  display: flex;
  justify-content: right;
}

a:hover {
  color: #172432;
}
</style>
