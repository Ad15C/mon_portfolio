<template>
  <main>
    <!--Section A Propos-->
    <section id="A_propos">
      <p>
        Je m'appelle Adeline et j'aime tout ce qui se rapporte à la technologie, et suis également
        passsionnée de sport. Mon but est de vous permettre à réaliser vos projets, que ce soit un
        site web, une application mobile, etc.<br />
        Je suis prête à relever les défis qui s'offre à moi.
      </p>
      <br />
    </section>

    <!--Présentation des Projets-->
    <section id="Projets">
      <p>{{ props.myProjects }}</p>
      <br />

      <div class="projets_recents">
        <div class="Mon_CV">
          <a href="../assets/cv.png">
            <img src="../assets/cv.png" name="Mon CV" width="100" height="150" />
          </a>
        </div>

        <div class="Cahier_Charges">
          <a href="../assets/cahier_des_charges.pdf">
            <img
              src="../assets/cahier_charges.png"
              id="Cahier des Charges"
              width="100"
              height="150"
            />
          </a>
        </div>

        <div class="Commentaire_Dynamique">
          <a href="https://github.com/Ad15C/mon_commentaire.git">
            <img
              src="../assets/commentaire_dynamique.png"
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
const props = defineProps(['myProjects'])
</script>

<style scoped>
main {
  background-color: aqua;
  width: 1500px;
  display: block;
}

div {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
