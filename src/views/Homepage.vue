<template>
  <!--Section A Propos-->
  <section id="A_propos">
    <div>
    <p>
      Je m'appelle Adeline Canon et j'aime tout ce qui se rapporte à la technologie, et suis également passsionnée de sport. <br>
      Mon but est de vous permettre de réaliser tous vos projets, que ce soit un site web, une application mobile.<br />
      Je suis prête à relever les défis qui s'offrent à moi.
    </p>
    <br />
    </div>
  </section>
  <!--Fin Section A Propos-->

  <!--Section Projets-->
  <section id="Projets">
    <h3>Ci-dessous, vous trouverez les projets réalisés dernièrement:</h3>
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
  <div>
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
  </div>
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
</style>
