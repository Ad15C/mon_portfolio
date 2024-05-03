<template>
  <section class="modal hidden">
    <div class="modal_header">
      <button class="btn-close">X</button>
    </div>

    <div class="modal_body">
      <!--Faire des props ici-->
      <p>date</p>
      <p>description</p>
      <p>technologies utilisées</p>
    </div>
  </section>

  <div class="overlay hidden"></div>
  <button class="btn btn-open">Ouvrir le Modal</button>
</template>

<script setup>
import Modal from '@/views/Homepage.vue'
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
