<template>
  <section id="Projets">
    <p>Ci-dessous, vous trouverez les derniers projets réalisés dernièrement:</p>
    <br />

    <div class="projets_recents">
      <div class="Mon_CV">
        <figure>
          <a href="https://github.com/Ad15C/Mon_cv.git">
            <img
              src="../assets/cv.png"
              name="Mon CV"
              alt="Présentation d'un Curriculum Vitae"
              width="100"
              height="150"
            />
          </a>
          <figcaption>CV réalisé le <time datetime="2023-12">Décembre 2023</time></figcaption>
        </figure>
      </div>

      <div class="Cahier_Charges">
        <figure>
          <a href="../assets/cahier_des_charges.pdf">
            <img
              src="../assets/cahier_charges.png"
              id="Cahier des Charges"
              alt="Présentation d'un cahier des charges"
              width="100"
              height="150"
            />
          </a>
          <figcaption>
            Cahier des Charges réalisé le <time datetime="2023-12">Décembre 2023</time>
          </figcaption>
        </figure>
      </div>

      <div class="Commentaire_Dynamique">
        <figure>
          <a href="https://github.com/Ad15C/mon_commentaire.git">
            <img
              src="../assets/commentaire_dynamique.png"
              id="Commentaire Dynamique"
              alt="Présentation d'un commentaire dynamique"
              width="100"
              height="150"
            />
          </a>
          <figcaption>
            Commentaire dynamique réalisé le <time datetime="2024-02">Février 2024</time>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

import Modal from '@/components/Modal.vue'

//Détails pour les différents projets
const projects = ref([
  {
    image: ' /cv.png',
    title: 'CV',
    date: 'Décembre 2023',
    description: 'Réalisation de CV ',
    technologies: 'HTML, CSS, GitHub, VSCode',
    downloadLink: 'https://github.com/Ad15C/Mon_cv.git'
  },

  {
    image: '/cahier_charges.png',
    title: 'Cahier des Charges',
    date: 'Décembre 2023',
    description:
      'Cahier des Charges pour La Socketterie, souhaitant faire une refonte de son site internet et un bilan de la concurrence',
    technologies: 'Word',

    downloadLink: 'public/cahier_des_charges.pdf'
  },

  {
    image: '/commentaire_dynamique.png',
    title: 'Commentaire Dynamique',
    date: 'Février 2024',
    description: 'Réalisation de Commentaire Dynamique ',
    technologies: 'HTML, CSS, GitHub, VSCode, JavaScript',
    downloadLink: 'https://github.com/Ad15C/mon_commentaire.git'
  }
])

//Sélection du Projet
//la valeur nulle est utilisée pour l'état initial où le modal n'est pas affiché
const selectedProject = ref(null)

//Ouverture du Modal
const openModal = (project) => {
  selectedProject.value = project
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

figure {
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 5px;
  max-width: 220px;
  margin: auto;
}

figcaption {
  color: black;
  font: italic smaller sans-serif;
  padding: 3px;
  text-align: center;
}
</style>
