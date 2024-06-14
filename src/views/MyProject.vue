<template>
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
    description: 'Réalisation Curriculum Vitae',
    technologies: 'HTML, CSS, GitHub, VSCode',
    downloadLink: 'https://github.com/Ad15C/Mon_cv.git'
  },

  {
    id: 2,
    src: 'public/cahier_des_charges.png',
    title: 'Cahier des Charges',
    date: 'Décembre 2023',
    description:
      'Rédaction Cahier des Charges, pour La Socketterie, souhaitant effectuer une refonte de son site internet et un bilan de la concurrence',
    technologies: 'Word',
    downloadLink: 'public/cahier_des_charges.pdf'
  },

  {
    id: 3,
    src: 'public/commentaire_dynamique_img.png',
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
</script>

<style scoped>
</style>
