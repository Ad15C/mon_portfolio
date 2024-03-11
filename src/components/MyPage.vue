<template>
  <main>
    <!--Section A Propos-->
    <section id="A_propos">
      <p>{{ props.aboutMe }}</p>
    </section>

    <!--Présentation des Projets-->
    <section id="Projets"></section>

    <!--Section du Formulaire-->
    <section id="Form">
      <p>{{ props.yourName }} {{ props.yourMail }} {{ props.yourMessage }}</p>
    </section>
  </main>
</template>

<script setup>
const props = defineProps(['aboutMe', 'yourName', 'yourMail', 'yourMessage'])
</script>

<style scoped></style>
