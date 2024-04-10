<template>
  <main>
    <!--Section A Propos-->
    <section id="A_propos">
      <p>
        Je m'appelle Adeline et j'aime tout ce qui se rapporte à la technologie, et suis également
        passsionnée de sport. Mon but est de vous permettre à réaliser vos projets, que ce soit un
        site web, une application mobile, etc.<br />
        Je suis prête à relever les défis qui s'offre à moi.
      </p>
      <br />
    </section>

    <!--Présentation des Projets-->
    <section id="Projets">
      <p>Ci-dessous, vous trouverez les derniers projets réalisés dernièrement:'</p>
      <br />

      <div class="projets_recents">
        <div class="Mon_CV">
          <a href="../assets/cv.png">
            <img src="../assets/cv.png" name="Mon CV" width="100" height="150" />
          </a>
        </div>

        <div class="Cahier_Charges">
          <a href="../assets/cahier_des_charges.pdf">
            <img
              src="../assets/cahier_charges.png"
              id="Cahier des Charges"
              width="100"
              height="150"
            />
          </a>
        </div>

        <div class="Commentaire_Dynamique">
          <a href="https://github.com/Ad15C/mon_commentaire.git">
            <img
              src="../assets/commentaire_dynamique.png"
              id="Commentaire Dynamique"
              width="100"
              height="150"
            />
          </a>
        </div>
      </div>
    </section>

    <!--Formulaire de contact-->
    <form @submit.prevent="validateInfo" id="myForm" method="post">
      <p>
        Pour toutes informations, remplissez le formulaire ci-dessous. Je reviendrai vers vous dés
        que possible.
      </p>
      <br />

      <label for="lastName">Votre Nom:</label><br />
      <input type="text" id="lastName" v-model.trim="user.lastName" /><br />

      <label for="firstName">Votre Prénom:</label><br />
      <input type="text" id="firstName" v-model.trim="user.firstName" /><br />

      <label for="yourMail">Votre Email:</label><br />
      <input type="email" id="yourMail" v-model.trim="user.yourMail" /> <br />

      <label for="yourMessages">Votre Message:</label><br />
      <textarea id="yourMessages" v-model.trim="user.yourMessages" /><br />

      <!-- error message -->
      <div v-if="errorMessage">{{ errorMessages }}</div>

      <!--success message-->
      <div v-if="successMessage">{{ successMessage }}</div>

      <button type="submit">Envoyer</button>
    </form>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { errorMessages } from 'vue/compiler-sfc'

const user = ref({
  lastName: '',
  firstName: '',
  yourMail: '',
  yourMessages: '',
  errorMessages: false,
  successMessage: ''
})

function clearForm() {
  document.getElementById('myForm').reset()
}

function validateInfo(e) {
  e.preventDefault()

  if (!this.lastName || !this.firstName || !this.yourMail || !this.yourMessages) {
    this.errorMessages = true
    this.successMessage = ''
    return
  } else {
    console.log(user)
    this.errorMessages = false
    this.successMessage = 'Votre message a été envoyé avec succès'
    clearForm //On Réinitiailise les champs
  }
}

const props = defineProps(['myProjects'])
</script>

<style scoped>
main {
  background-color: aqua;
  width: 1500px;
  display: block;
}

div {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
