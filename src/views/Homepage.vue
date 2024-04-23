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
    <article id="Projets">
      <p>Ci-dessous, vous trouverez les derniers projets réalisés dernièrement:</p>
      <br />

      <!--Section du CV-->
      <section id="Mon_CV">
        <figure>
          <img
            src="../assets/cv.png"
            name="Mon CV"
            alt="Présentation d'un Curriculum Vitae"
            width="100"
            height="150"
          />
          <figcaption>CV réalisé le <time datetime="2023-12">Décembre 2023</time></figcaption>
        </figure>
      </section>

      <!--Cahier des Charges-->
      <section id="Cahier_des_charges">
        <figure>
          <a href="../assets/cahier_des_charges.pdf">
            <img
              src="../assets/cahier_charges.png"
              id="Cahier des Charges"
              alt="Présentation d'un cahier des charges"
              width="100"
              height="150"
            />
          </a>
          <figcaption>
            Cahier des Charges réalisé le <time datetime="2023-12">Décembre 2023</time>
          </figcaption>
        </figure>
      </section>

      <!--Commentaire Dynamqique-->
      <section id="Cahier_des_charges">
        <figure>
          <a href="https://github.com/Ad15C/mon_commentaire.git">
            <img
              src="../assets/commentaire_dynamique.png"
              id="Commentaire Dynamique"
              alt="Présentation d'un commentaire dynamique"
              width="100"
              height="150"
            />
          </a>
          <figcaption>
            Commentaire dynamique réalisé le <time datetime="2024-02">Février 2024</time>
          </figcaption>
        </figure>
      </section>
    </article>

    <!--Formulaire de contact-->
    <form @submit.prevent="validateInfo" id="myForm" method="post">
      <h3>Pour toutes informations, remplissez le formulaire ci-dessous.</h3>

      <br />

      <label for="lastName">Votre Nom:</label>
      <input type="text" id="lastName" v-model.trim="user.lastName" required />

      <label for="firstName">Votre Prénom:</label>
      <input type="text" id="firstName" v-model.trim="user.firstName" required />

      <label for="yourMail">Votre Email:</label>
      <input type="email" id="yourMail" v-model.trim="user.yourMail" required />

      <label for="yourMessages">Votre Message:</label>
      <textarea id="yourMessages" v-model.trim="user.yourMessages" required /><br />

      <!-- Affichage des messages d'erreur ou de succès-->
      <div v-if="errorMessages">Veuillez remplir tous les champs</div>
      <div v-if="successMessage">{{ successMessage }}</div>

      <button id="Form_button" type="submit">Envoyer</button>
    </form>
  </main>
</template>

<script setup>
import { ref } from 'vue'

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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

main {
  background-color: #aaaaaaad;
  width: 1500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

section {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

article {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

p {
  width: 100%;
  padding: 12px 20px;
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

.button_FormButton {
  display: inline-block;
  background-color: #172432;
  border: none;
  color: #ddd;
  padding: 12px 150px;
  margin-left: 550px;
  border-radius: 4px;
  cursor: pointer;
}

figure {
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 5px;
  max-width: 220px;
  margin: auto;
}
</style>
