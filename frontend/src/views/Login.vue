<template>
  <form class="form-signin">
      <img class="mb-4" src="../assets/icon.svg" alt="" width="72" height="72">
      <h1 class="h3 mb-3 font-weight-normal">Connexion</h1>
      <label for="inputEmail" class="sr-only">Adresse mail</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Adresse mail" required="" autofocus="" v-model='email'>
      <label for="inputPassword" class="sr-only">Mot de passe</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Mot de passe" required="" v-model='password'>
      <div class="checkbox mb-3"></div>
      <button class="btn btn-lg btn-primary btn-block" type="submit" @click.prevent="signin">Se connecter</button>
      <br/>
      <div class="alert alert-danger" v-if="error != ''">{{ error}}</div>
  </form>
    
</template>


<script>

const axios = require('axios').default;


export default {
  name: 'login',
  data() {
    return{
      email: '',
      password: '',
      msg: '',
      error: ''
    }
  },
  methods: {
    signin(){
      if(this.email != '' && this.motdepasse != ''){

        axios.post("http://127.0.0.1:3000/api/auth/login",{
        email:this.email,
        password: this.password
      })
      .then((response) =>{
        console.log(response);
        if(response.data.erreur){
          this.error = response.data.erreur
        }
        if(response.data.userId){
          this.$store.dispatch('loginAccount',{
          connected: true,
          token: response.data.token,
          userId: response.data.userId,
          pseudo: response.data.pseudo,
          email: response.data.email,
          imageUrl: response.data.avatar
        })
          this.$router.push('/')
        }
      })
      .catch((error) =>{
        console.log('LOGIN',error);
      })
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