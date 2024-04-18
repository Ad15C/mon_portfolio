<template>
  <footer>
    <div class="Networks">
      <a href="www.linkedin.com/in/adelinecanon">
        <img src="../assets/logo_linkedin.png" alt="Profil_LinkedIn" width="25" height="25" />
      </a>
      <a href="https://github.com/Ad15C">
        <img src="../assets/signe-github.png" alt="Profil_GitHub" width="25" height="25" />
      </a>
    </div>

    <div class="MaJ">
      <h5>Dernière mise à jour le <time datetime="2024-04-17">17 Avril 2024</time></h5>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
footer {
  background-color: #aaaaaaad;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 1500px;
  height: 100px;
}

:hover.img {
  opacity: 15%;
}
</style>
