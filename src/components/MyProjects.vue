<template>
  <section id="Projets">
    <h3>Ci-dessous, vous trouverez les derniers projets réalisés dernièrement:</h3>
    <br />
    <div class="mes_projets">
      <div v-for="(project, index) in projects" :key="index">
        <img :src="project.image" @click="isOpenModal(project)" />
      </div>
      <Modal
        v-if="selectedProject"
        :project="selectedProject"
        :is-open-modal="openModal"
        @close="closeModal"
      />
    </div>
  </section>
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
    technologies: 'HTML, CSS, GitHub, VSCode, JavaScript'
  }
])

//Sélection du Projet
//la valeur nulle est utilisée pour l'état initial où le modal n'est pas affiché
let selectedProject = ref(null)

let isOpenModal = ref(false)

//Ouverture du Modal
const openModal = (project) => {
  ;(selectedProject.value = project), (isOpenModal = true)
}

//Fermeture du Modal
const closeModal = () => {
  ;(selectedProject.value = null), (isOpenModal = false)
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

section {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: baseline;
  align-content: space-between;
}

div {
  display: flex;
  flex-direction: row;
}

img {
  width: 200px;
  height: 300px;
}
</style>
