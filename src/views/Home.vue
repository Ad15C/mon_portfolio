<template>
  <main>
    <section class="A_Propos">
      <h2>A Propos</h2>
      <p>
        Bienvenue sur mon Portfolio. Je m'appelle Adeline et j'aime tout ce qui se rapporte à la
        technologie, et suis également passsionnée de sport.<br />
        Mon but est de vous permettre à réaliser vos projets, que ce soit un site web, une
        application mobile, etc.<br />
        Je suis prête à relever les défis qui s'offre à moi.
      </p>
    </section>

    <section class="Projects">
      <p>Ci-dessous, vous trouverez les derniers projets auquel j'ai participé:</p>

      <div class="Mon_CV">
        <a href="https://github.com/Ad15C/Mon_cv.git">
          <img src="@/assets/cv.png" name="Mon CV" width="100" height="150" />
        </a>
      </div>

      <div class="Cahier_Charges">
        <a href="@/assets/cahier_des_charges.pdf">
          <img src="@/assets/cahier_charges.png" id="Cahier des Charges" width="100" height="150" />
        </a>
      </div>

      <div class="Commentaire_Dynamique">
        <a href="https://github.com/Ad15C/mon_commentaire.git">
          <img
            src="@/assets/commentaire_dynamique.png"
            id="Commentaire Dynamique"
            width="100"
            height="150"
          />
        </a>
      </div>
    </section>

    <section class="myform">
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
        <div v-if="errorMessage">{{ errorMessages }}}</div>
        <!--success message-->
        <div v-if="successMessage">{{ successMessage }}</div>

        <button type="submit">Envoyer</button>
      </form>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Home'
}
</script>
