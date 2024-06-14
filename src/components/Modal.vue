<template>
  <!--Modal-->
  <div v-if="isOpenModal" class="modal">
    <div class="modal-content">
      <div class="modal_header">
        <!--Croix pour fermer le modal-->
        <span class="close" @click="close">&times;</span>
      </div>

      <!--Détail du modal-->
      <div class="modal_body">
        <img :src="project.src" alt="Project Image" id="modalProject" />
        <h3 id="projectName">{{ project.title }} - ( {{ project.date }} )</h3>
        <p>{{ project.description }}</p>
        <p>Technologies utilisées : {{ project.technologies }}</p>
      </div>

      <div class="modal_footer">
        <!--Bouton de téléchargement du projet dans le modal-->
        <button id="downloadButton" @click="handleDownload">Télécharger</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  isOpenModal: {
    type: Boolean,
    required: true
  },

  project: {
    type: Object,
    required: true
  }
})

//Emit permet à un composant de spécifier quels événements il émet ainsi que les arguments qu'il prend
const emit = defineEmits(['close'])

//Fermeture du Modal
function close() {
  emit('close')
}

//Gestionnaire d'événement pour télécharger le projet
const handleDownload = () => {
  if (props.project.downloadLink) {
    window.open(props.project.downloadLink, '_blank')
  } else {
    alert('Lien de téléchargement introuvable pour ce projet')
  }
}
</script>

<style scoped>
</style>
