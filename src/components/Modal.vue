<template>
  <div class="modal">
    <div class="modal-content">
      <!--Bouton pour la fermeture du modal-->
      <span class="close" @click="close">&times;</span>
      <!--Détail du modal-->
      <img :src="project.image" alt="Project Image" />
      <h3>{{ project.title }}</h3>
      <p>{{ project.date }}</p>
      <p>{{ project.description }}</p>
      <p>{{ project.technologies }}</p>
      <!--Bouton de téléchargement du projet dans le modal-->
      <button @click="downloadProject(project.title)">Télécharger {{ project.title }}</button>
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

const { emit } = defineEmits()

const close = () => {
  emit('close')
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
</style>
