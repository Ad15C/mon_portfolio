<template>
  <header>
    <section id="header">
      <img alt="logo" class="logo" src="../assets/logos/Logo_AC.png" />
      <h1>Bienvenue sur mon Portfolio</h1>
    </section>
  </header>
</template>

<script setup></script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Barlow';
  font-weight: 300;
  font-style: normal;
}

header {
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: auto;
  height: auto;
  padding-top: 40px;
  padding-bottom: 40px;
  margin: 0px;
}

h1 {
  margin-top: 20px;
  font-size: 40px;
  font: bold;
}

.logo {
  height: 175px;
  width: 175px;
  display: flex;
  flex-direction: column;
}

section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
