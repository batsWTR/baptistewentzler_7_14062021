<template>
  <form class="form-signin">
      <img class="mb-4" src="../assets/icon.svg" alt="" width="72" height="72">
      <h1 class="h3 mb-3 font-weight-normal">Connection</h1>
      <label for="inputEmail" class="sr-only">Adresse mail</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Adresse mail" required="" autofocus="" v-model='email'>
      <label for="inputPassword" class="sr-only">Mot de passe</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Mot de passe" required="" v-model='motdepasse'>
      <div class="checkbox mb-3">
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit" @click="signin">Se connecter</button>
  </form>
    <br/>
    <h2>{{ msg }}</h2>

</template>


<script>

export default {
  name: 'login',
  data() {
    return{
      email: '',
      motdepasse: '',
      msg: ''
    }
  },
  methods: {
    signin(){
      if(this.email != '' && this.motdepasse != ''){
        this.msg = 'envoie au backend'
      }
    }
  }
}
</script>



<style scoped>
.form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
    text-align: center;
}
</style>