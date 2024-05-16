<template>
  <div class="modal" v-if="selectedProject" id="myModal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <!--Détail du modal-->
      <img :src="project.image" alt="Project Image" id="modalProject" />
      <h3 id="projectName">{{ project.title }}</h3>
      <p>{{ project.date }}</p>
      <p>{{ project.description }}</p>
      <p>{{ project.technologies }}</p>

      <!--Bouton de téléchargement du projet dans le modal-->
      <button id="downloadButton" @click="handleDownload">Télécharger</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

//On masque le modal
const showModal = ref(false)

//Sélection du Projet
//la valeur nulle est utilisée pour l'état initial où le modal n'est pas affiché
const selectedProject = ref(null)

//Emit permet à un composant de spécifier quels événements il émet ainsi que les arguments qu'il prend
const { emit } = defineEmits()

//Ouverture du Modal
const openModal = (project) => {
  selectedProject.value = project
  showModal.value = true
}

//Gestionnaire d'événement pour télécharger le projet
const handleDownload = () => {
  if (props.project.downloadLink) {
    window.location.href = props.project.downloadLink
  } else {
    alert('Lien de téléchargement introuvable pour ce projet')
  }
}

//Fermeture du Modal si l'on clique sur le bouton/Span
const closeModal = () => {
  selectedProject.value = null
  showModal.value = false
}

//Fermeture du Modal si l'on clique en dehors du modal
const handleOutsideClick = (event) => {
  selectedProject.value = null
  showModal.value = false
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

.modal {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: whitesmoke;
  padding: 20px;
}

.modalProject {
  width: 100px;
  height: 150px;
}
</style>
