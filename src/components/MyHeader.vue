<template>
  <header>
    <section>
      <img alt="logo" class="logo" src="../assets/logos/Logo_AC.png" />
      <h1>Bienvenue sur mon Portfolio</h1>
    </section>
    <nav>
      <ul class="nav_links">
        <li>
          <RouterLink to="/" class="nav_link">
            <a href="/">Accueil</a>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/MesProjets" class="nav_link">
            <a href="/">Mes Projets</a>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/Contact" class="nav_link">
            <a href="/">Contact</a>
          </RouterLink>
        </li>

      </ul>
    </nav>
  </header>
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

header {
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width:auto;
  height: auto;
  padding-top: 40px;
  padding-bottom: 40px;
  margin: 0px;
}

.logo {
  height: 150px;
  width: 150px;
  display: flex;
  flex-direction: column;
}

section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

nav {
  height: 50px;
  width: 1500px;
  word-spacing: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f2f2f2;
  text-decoration: underline;
  font-size: large;
}
</style>
