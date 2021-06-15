<template>
      <form class="form-signup">
      <img class="mb-4" src="../assets/icon.svg" alt="" width="72" height="72">
      <h1 class="h3 mb-3 font-weight-normal">Inscription</h1>
      <label for="pseudo" class="sr-only">Pseudo</label>
      <input type="text" id="pseudo" class="form-control" placeholder="Pseudo" required="" autofocus="" v-model='pseudo'>
      <label for="inputEmail" class="sr-only">Adresse mail</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Addresse mail" required="" autofocus="" v-model='email'>
      <label for="inputPassword" class="sr-only">Mot de passe</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Mot de passe" required="" v-model='motdepasse'>
      <div class="checkbox mb-3">
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit" @click="signup">S'inscrire</button>
  </form>
  <br/>
  <h2>{{ msg }}</h2>
</template>

<script>
export default {
  name: 'signup',
  data() {
    return{
        pseudo: '',
        email: '',
        motdepasse: '',
        msg: ''
    }
  },
  methods: {
    signup(){
      if(this.pseudo != '' && this.email != '' && this.motdepasse != ''){
        this.msg = 'envoie au backend'
      }
    }
  }
}
</script>


<style scoped>
.form-signup {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
    text-align: center;
}
</style>