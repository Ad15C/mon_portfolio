<template>
  <main>
    <!--Section A Propos-->
    <section id="A_propos">
      <p>{{ props.aboutMe }}</p>
    </section>

    <!--Présentation des Projets-->
    <section id="Projets">
      <p><strong>Ci dessous, mes derniers Projets:</strong></p>
      <div class="Mon CV">
        <a href="https://github.com/Ad15C/Mon_cv.git">
          <img
            src="C:\Users\User\OneDrive\Bureau\CEF\Devoirs\CV Adeline.png"
            name="Mon CV"
            width="100"
            height="100"
          />
        </a>
      </div>
    </section>

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
