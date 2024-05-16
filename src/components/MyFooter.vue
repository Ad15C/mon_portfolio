<template>
  <footer>
    <div class="Networks">
      <div class="Linkedin">
        <a href="www.linkedin.com/in/adelinecanon">
          <img
            src="../assets/logos/logo_linkedin.png"
            alt="Profil_LinkedIn"
            width="25"
            height="25"
          />
        </a>
      </div>
      <div class="GitHub">
        <a href="https://github.com/Ad15C">
          <img src="..//assets/logos/signe-github.png" alt="Profil_GitHub" width="25" height="25" />
        </a>
      </div>
    </div>

    <div class="MaJ">
      <h5>Dernière mise à jour le <time datetime="2024-05-14"> Mai 2024</time></h5>
    </div>
  </footer>
</template>

<script setup></script>

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

footer {
  background-color: #aaaaaaad;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: space-evenly;
  width: 100%;
  height: 100px;
  row-gap: 10px;
}

.Networks {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}
</style>
