<template>
  <main>
    <!--Section A Propos-->
    <section id="A_propos">
      <p>{{ props.aboutMe }}</p>
    </section>

    <!--Présentation des Projets-->
    <section id="Projets">
      <div class="titre">
        <h4>Ci dessous, mes derniers Projets:</h4>
      </div>

      <div class="Mon_CV">
        <a href="https://github.com/Ad15C/Mon_cv.git">
          <img
            src="C:\Users\User\OneDrive\Bureau\CEF\Devoirs\CV Adeline.png"
            name="Mon CV"
            width="100"
            height="150"
          />
        </a>
      </div>
      <div class="Cahier_Charges">
        <a href="C:\Users\User\OneDrive\Bureau\CEF\Devoirs\cahier des charges.pdf">
          <img
            src="C:\Users\User\OneDrive\Bureau\CEF\Devoirs\cahier_charges.png"
            id="Cahier des Charges"
            width="100"
            height="150"
          />
        </a>
      </div>
      <div class="Commentaire_Dynamique">
        <a href="https://github.com/Ad15C/mon_commentaire.git">
          <img
            src="C:\Users\User\OneDrive\Bureau\CEF\Devoirs\commentaire_dynamique.png"
            id="Commentaire Dynamique"
            width="100"
            height="150"
          />
        </a>
      </div>
    </section>

    <!--Section du Formulaire-->
    <section id="Form">
      <p>{{ props.user.yourName }} {{ props.user.yourMail }} {{ props.user.yourMessage }}</p>
    </section>
  </main>
</template>

<script setup>
const props = defineProps(['aboutMe', 'user'])
</script>

<style scoped>
section {
  background-color: blue;
  display: flex;
  flex-direction: row;
}
</style>
