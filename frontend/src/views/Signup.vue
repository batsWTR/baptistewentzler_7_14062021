<template>
      <form class="form-signup">
      <img class="mb-4" src="../assets/icon.svg" alt="" width="72" height="72">
      <h1 class="h3 mb-3 font-weight-normal">Inscription</h1>
      <label for="pseudo" class="sr-only">Pseudo</label>
      <input type="text" id="pseudo" class="form-control" placeholder="Pseudo" required="" autofocus="" v-model='pseudo'>
      <label for="inputEmail" class="sr-only">Adresse mail</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Addresse mail" required="" autofocus="" v-model='email'>
      <label for="inputPassword" class="sr-only">Mot de passe</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Mot de passe" required="" v-model='password'>
      <div class="checkbox mb-3">
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit" @click.prevent="signup">S'inscrire</button>
      <div class="alert alert-danger" role="alert" v-if="error != ''">{{ error }}</div>

  </form>
</template>

<script>

const axios = require('axios').default;


export default {
  name: 'signup',
  data() {
    return{
        pseudo: '',
        email: '',
        password: '',
        msg: '',
        error: ''
    }
  },
  methods: {
    signup(){
      this.error = ''
      if(this.pseudo != '' && this.email != '' && this.password != ''){
        
        /*this.$store.dispatch('createAccount',{
          pseudo: this.pseudo,
          email: this.email,
          password: this.motdepasse
        })*/

        // envoie de la demande au backend
        axios.post("http://127.0.0.1:3000/api/auth/signup",{
        email:this.email,
        pseudo: this.pseudo,
        password:this.password
      })
      .then((response) =>{
        console.log(response.data.message)
        if(response.data.erreur){
          this.error = response.data.erreur
        }


        if(response.data.message == 'OK'){
          this.$router.push('/login')
        }
        
      })
      .catch((error) =>{
        console.log(error)
      })
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