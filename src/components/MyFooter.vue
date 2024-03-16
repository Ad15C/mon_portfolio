<template>
  <footer>
    <div class="Networks">
      <a href="https://fr.linkedin.com/">
        <img src="@/assets/linkedin.png" alt="Profil_LinkedIn" width="15" height="15" />
      </a>
      <a href="https://github.com/Ad15C">
        <img src="@/assets/github.png" alt="Profil_GitHub" width="15" height="15" />
      </a>
    </div>

    <div class="MaJ">
      <h5>Dernière mise à jour le 10 Août 2022</h5>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
footer {
  background-color: blueviolet;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 1000px;
  height: auto;
}
</style>
