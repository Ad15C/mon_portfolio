<template>
  <main>
    <!--Section A Propos-->
    <section id="A_propos">
      <p>{{ props.aboutMe }}</p>
    </section>

    <!--Présentation des Projets-->
    <section id="Projets">
      <p>{{ props.myProjects }}</p>
      <br />

      <div class="projets_recents">
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
      </div>
    </section>

    <!--Formulaire-->
    <form action="">
      <p>{{ props.user.yourName }} {{ props.user.yourMail }} {{ props.user.yourMessage }}</p>
    </form>
  </main>
</template>

<script setup>
const props = defineProps(['aboutMe', 'myProjects', 'user'])
</script>

<style scoped>
main {
  background-color: aqua;
  width: 1000px;
  display: flex;
  flex-direction: column;
}

div {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

form {
  background-color: green;
}
</style>
