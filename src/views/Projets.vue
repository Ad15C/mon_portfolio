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
