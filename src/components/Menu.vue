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

<script setup></script>

<style scoped>
</style>
