<template>
  <div v-if="isOpenModal" class="modal">
    <div class="modal-content">
      <div class="modal_header">
        <!--Croix pour fermer le modal-->
        <span class="close" @click="close">&times;</span>
      </div>

      <div class="modal_body">
        <!--Détail du modal-->
        <img :src="project.src" alt="Project Image" id="modalProject" />
        <h3 id="projectName">{{ project.title }}</h3>
        <p>{{ project.date }}</p>
        <p>{{ project.description }}</p>
        <p>{{ project.technologies }}</p>
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
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Barlow';
  font-weight: 300;
  font-style: normal;
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
  overflow: auto;
}

.modal-content {
  background-color: whitesmoke;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  width: 90%;
  max-height: 80%;
  overflow-y: auto;
}

.modal_header {
  display: flex;
  justify-content: flex-end;
}

.close {
  font-size: 24px;
  cursor: pointer;
}

.modal_body {
  text-align: center;
}

.modal_body img {
  max-width: 100%;
  height: auto;
  max-height: 300px; /* Limite la hauteur de l'image */
  margin-bottom: 20px; /* Ajoute de l'espace sous l'image */
}

.modal_body h3 {
  margin-bottom: 10px;
}

.modal_footer {
  text-align: center;
  margin-top: 20px;
}

#downloadButton {
  background-color: #172432;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}
</style>
