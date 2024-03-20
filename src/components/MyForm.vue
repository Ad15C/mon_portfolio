<template>
  <form @submit.prevent="validateInfo" id="myForm" method="post">
    <label for="lastName">Votre Nom:</label><br />
    <input type="text" id="lastName" v-model.trim="user.lastName.value" /><br />

    <label for="firstName">Votre Prénom:</label><br />
    <input type="text" id="firstName" v-model.trim="user.firstName.value" /><br />

    <label for="yourMail">Votre Email:</label><br />
    <input type="email" id="yourMail" v-model.trim="user.yourMail.value" /> <br />

    <label for="yourMessages">Votre Message:</label><br />
    <input
      type="textarea"
      name="yourMessages"
      id="yourMessages"
      v-model.trim="user.yourMessages.value"
    /><br />

    <button type="submit">Envoyer</button>
  </form>
</template>

<script setup></script>

<style scoped>
form {
  width: 1500px;
}
</style>
