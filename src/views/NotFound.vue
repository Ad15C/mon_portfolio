<template>
  <div>
    <h1>404 - Error</h1>
    <p>
      La page que vous recherchez n'est pas disponible pour le moment...Rééssayez plus tard.
      <RouterLink to="/">Accueil</RouterLink>
    </p>
    <br />
    <img src="../assets/not_found.jpg" title="Page Not Found" width="300" height="300" /><br />
  </div>
</template>

<script setup></script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
