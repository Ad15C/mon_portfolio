<template>
  <!--Barre de navigation-->
  <nav>
    <ul class="nav_links">
      <li>
        <RouterLink to="/" class="nav_link">
          <a href="/">Accueil</a>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/APropos" class="nav_link">
          <a href="About">A Propos</a>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/MesProjets" class="nav_link">
          <a href="MyProject">Mes Projets</a>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/Contact" class="nav_link">
          <a href="MyContact">Contact</a>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

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

nav {
  width: 1216px;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 30px;
}

ul {
  width: 1500px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 22px;
}

li {
  float: left;
}

li a {
  display: block;
  color: #333;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li:hover {
  background-color: rgb(182, 180, 180);
  border-bottom: 1px solid black;
}
</style>
