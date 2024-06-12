<template>
  <div>
    <h1>404 - Error</h1>
    <p>
      La page que vous recherchez n'est pas disponible pour le moment...Rééssayez plus tard.
      <RouterLink to="/">Accueil</RouterLink>
    </p>
    <br />
    <img
      src="../assets/favicon/not_found.jpg"
      title="Page Not Found"
      width="300"
      height="300"
    /><br />
  </div>
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

div {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
