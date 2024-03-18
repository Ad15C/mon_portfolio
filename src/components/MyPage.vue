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
            <img src="@/assets/cv.png" name="Mon CV" width="100" height="150" />
          </a>
        </div>

        <div class="Cahier_Charges">
          <a href="@/assets/cahier_des_charges.pdf">
            <img
              src="@/assets/cahier_charges.png"
              id="Cahier des Charges"
              width="100"
              height="150"
            />
          </a>
        </div>

        <div class="Commentaire_Dynamique">
          <a href="https://github.com/Ad15C/mon_commentaire.git">
            <img
              src="@/assets/commentaire_dynamique.png"
              id="Commentaire Dynamique"
              width="100"
              height="150"
            />
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const props = defineProps(['aboutMe', 'myProjects'])
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
</style>
