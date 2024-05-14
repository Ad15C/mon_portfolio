<template>
  <div class="modal" v-if="selectedProject" id="myModal">
    <div class="modal-content">
      <span class="close" @click="close">&times;</span>
      <!--Détail du modal-->
      <img :src="project.image" alt="Project Image" />
      <h3 id="projectName">{{ project.title }}</h3>
      <p>{{ project.date }}</p>
      <p>{{ project.description }}</p>
      <p>{{ project.technologies }}</p>
      <!--Bouton de téléchargement du projet dans le modal-->
      <button id="downloadButton">Télécharger</button>
    </div>
  </div>
</template>

<script setup>
import Projets from '@/views/Projets.vue'
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

//Emit permet à un composant de spécifier quels événements il émet ainsi que les arguments qu'il prend
const { emit } = defineEmits()

//Fermeture du modal
const close = () => {
  emit('close')
}

//Gestionnaire d'événement pour télécharger le projet
document.getElementById('downloadButton').addEventListener('click', function () {
  //Récupération du lien de téléchargement du fichier
  let downloadLink = this.getAttribute('data-download-link')

  //Déclencher le téléchargement
  if (downloadLink) {
    window.location.href = downloadLink
  } else {
    alert('Lien de téléchargement introuvable pour ce projet')
  }
})
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
</style>
