<template>
  <section id="Projets">
    <h3>Ci-dessous, vous trouverez les derniers projets réalisés dernièrement:</h3>
    <br />
    <div class="mes_projets">
      <div v-for="(project, index) in projects" :key="index" class="project">
        <img :src="project.src" @click="openModal(project)" class="project-image" />
      </div>
      <Modal :is-open-modal="isModalOpen" :project="selectedProject" @close="closeModal" />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'

const project = ref()

//Détails pour les différents projets
const projects = ref([
  {
    id: 1,
    src: 'public/cv.png',
    title: 'CV',
    date: 'Décembre 2023',
    description: 'Réalisation de CV ',
    technologies: 'HTML, CSS, GitHub, VSCode',
    downloadLink: 'https://github.com/Ad15C/Mon_cv.git'
  },

  {
    id: 2,
    src: 'public/cahier_charges.png',
    title: 'Cahier des Charges',
    date: 'Décembre 2023',
    description:
      'Cahier des Charges pour La Socketterie, souhaitant faire une refonte de son site internet et un bilan de la concurrence',
    technologies: 'Word',
    downloadLink: 'public/cahier_des_charges.pdf'
  },

  {
    id: 3,
    src: 'public/commentaire_dynamique.png',
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
  ;(selectedProject.value = project), (isModalOpen = true)
}

//Fermeture du Modal
const closeModal = () => {
  ;(selectedProject.value = project), (isModalOpen = false)
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
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Barlow', sans-serif;
}

section {
  padding-top: 20px;
  padding-bottom: 20px;
}

h3 {
  padding-left: 20px;
  text-align: left;
  margin-bottom: 20px;
}

.mes_projets {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px; /* Espace entre les projets */
}

.project {
  margin: 10px;
  text-align: center;
  flex: 1 1 200px; /* Flex-grow, flex-shrink, and flex-basis */
  max-width: 200px;
}

.project-image {
  width: 100%;
  height: auto;
  cursor: pointer;
  transition: transform 0.3s;
}

.project-image:hover {
  transform: scale(1.05);
}

.project h3 {
  margin-top: 10px;
}
</style>
