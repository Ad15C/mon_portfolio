<template>
  <!--Mise en place d'une condition afin que la modale n'apparaisse que lorsque isOpsen est true, sinon elle sera masquée-->
  <div class="modal-overlay" v-if="isOpen">
    <div class="modal-container">
      <div class="modal-header">
        <h2>{{ title }}</h2>
        <!--Bouton pour fermer la modale-->
        <button @click="closeModal">X</button>
      </div>
      <!--Corps de la modale où l'on va mettre le détail des projets-->
      <div class="modal-body">
        <div v-for="(project, index) in projects" :key="index" class="modal-image">
          <img :src="project" :alt="project.title" />
          <p>{{ project.description }}</p>
          <p>{{ project.technologies }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

//On définit les propriétés qu'un composant peut recevoir de son parent
const props = defineProps({
  isOpen: Boolean,
  title: String,
  Image: Array
})

//Pour fermer la modale
const closeModal = () => {
  emit('update:isOpen', false)
}

const clickOutsideModal = () => {}
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
