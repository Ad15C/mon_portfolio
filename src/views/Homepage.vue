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
      <p>Ci-dessous, vous trouverez les derniers projets réalisés dernièrement:</p>
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
      <h3>Pour toutes informations, remplissez le formulaire ci-dessous.</h3>

      <br />

      <label for="lastName">Votre Nom:</label><br />
      <input type="text" id="lastName" v-model.trim="user.lastName" required /><br />

      <label for="firstName">Votre Prénom:</label><br />
      <input type="text" id="firstName" v-model.trim="user.firstName" required /><br />

      <label for="yourMail">Votre Email:</label><br />
      <input type="email" id="yourMail" v-model.trim="user.yourMail" required />
      <br />

      <label for="yourMessages">Votre Message:</label><br />
      <textarea id="yourMessages" v-model.trim="user.yourMessages" required /><br />

      <!-- Affichage des messages d'erreur ou de succès-->
      <div v-if="errorMessages">Veuillez remplir tous les champs</div>
      <div v-if="successMessage">{{ successMessage }}</div>

      <button type="submit">Envoyer</button>
    </form>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { errorMessages } from 'vue/compiler-sfc'

let user = ref({
  lastName: '',
  firstName: '',
  yourMail: '',
  yourMessages: ''
})

let errorMessages = ref(false)
let successMessage = ref('')

//Fonction pour valider les Informations du Formulaire de Contact
function validateInfo() {
  if (
    !user.value.lastName ||
    !user.value.firstName ||
    !user.value.yourMail ||
    !user.value.yourMessages
  ) {
    errorMessages = true
    successMessage = ''
  } else {
    errorMessages = false
    successMessage = 'Votre message a été envoyé avec succès'
  }

  //Réinitialisation des champs du formulaire
  setTimeout(() => {
    ;(user.value.lastName = ''),
      (user.value.firstName = ''),
      (user.value.yourMail = ''),
      (user.value.yourMessages = ''),
      (successMessage.value = '') //Effacer le message après un court délai
  }, 2000)
}
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

form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

input[type='text'],
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type='email'],
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

textarea {
  height: 150px;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  display: inline-block;
  background-color: #172432;
  border: none;
  color: #ddd;
  padding: 12px 20px;
  margin: 8px 0;
  border-radius: 4px;
  cursor: pointer;
}
</style>
