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
