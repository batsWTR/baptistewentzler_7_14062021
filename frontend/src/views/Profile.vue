<template>
    <div class="container light-style flex-grow-1 container-p-y " v-on="isConnected()">

    <h4 class="font-weight-bold py-3 mb-4">
      Profil utilisateur
    </h4>

    <div class="card overflow-hidden">
      <div class="row no-gutters row-bordered row-border-light">
        <div class="col-md-9">
          <div class="tab-content">
            <div class="tab-pane fade active show" id="account-general">

              <div class="card-body media align-items-center">
                <img v-bind:src="imageUrl" alt="image profil" class="d-block ui-w-80">
                <div class="media-body ml-4">
                  <label class="btn btn-outline-primary">
                    Ajouter une photo
                    <input type="file" class="account-settings-fileinput" @change="imageFile($event)">
                  </label> &nbsp;

                  <div class="text-light small mt-1">Autorisé JPG, GIF or PNG. Max size of 800K</div>
                </div>
              </div>
              <hr class="border-light m-0">

              <div class="card-body">
                <div class="form-group">
                  <label class="form-label">Pseudo</label>
                  <input type="text" class="form-control mb-1" v-model="nom" :placeholder="pseudo">
                </div>
                <div class="form-group">
                  <label class="form-label">E-mail</label>
                  <input type="text" class="form-control mb-1" v-model='mail' :placeholder="email">
                </div>
                <div class="form-group">
                  <label class="form-label">Changez votre mot de passe</label>
                  <input type="password" class="form-control" v-model="mdp">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="text-right mt-3">
      <button type="button" class="btn btn-primary" @click="changeProfile">Enregistrer</button>&nbsp;
      <button type="button" class="btn btn-default" @click="annuler">Annuler</button>
    </div>

  </div>
</template>



<script>
import { mapState } from 'vuex';

const axios = require('axios').default;





export default {
    name: 'Profile',
    data(){
      return{
        image: '',
        nom: '',
        mdp: '',
        mail: ''
      }
    },
    computed: {
    ...mapState(['pseudo','email', 'connected', 'token', 'userId','imageUrl']),
      
  },
  methods:{
    annuler(){
      this.$router.push('/')
    },

    changeProfile(){
      let formData = new FormData()
      formData.append('userId', this.userId)
      if(this.nom != ''){
        formData.append('pseudo', this.nom)
      }else{
        formData.append('pseudo', this.pseudo)
      }
      if(this.mail != ''){
        formData.append('email', this.mail)
      }else{
        formData.append('email', this.email)
      }
      if(this.mdp != ''){
        formData.append('mdp', this.mdp)
      }
      if(this.image != ''){
        formData.append('image', this.image)
      }

      axios.put("http://127.0.0.1:3000/api/auth/updateProfile",formData,
      {
        headers:{
          Authorization: 'Bearer ' + this.token,
          'Content-Type': 'image/jpeg'
        }
      })
      .then((response) =>{
        console.log(response);
        if(response.data.erreur){
          this.error = response.data.erreur
        }
        if(response.data.userId){
          this.$store.dispatch('updateProfile',{
          userId: response.data.userId,
          pseudo: response.data.pseudo,
          email: response.data.email,
          imageUrl: response.data.avatar
          })
        }
      })
      .catch((error) =>{
        console.log(error);
      })
    },
    imageFile(event){
      this.imageUrl = URL.createObjectURL(event.target.files[0])
      this.image = event.target.files[0]

    },
    isConnected(){
      if(!this.connected){
        return this.$router.push('/')
      }
    }
    
  }
}
</script>

<style scoped>
body{
    background: #f5f5f5;
    margin-top:20px;
}

.ui-w-80 {
    width: 80px !important;
    height: auto;
}

.btn-default {
    border-color: rgba(24,28,33,0.1);
    background: rgba(0,0,0,0);
    color: #4E5155;
}

label.btn {
    margin-bottom: 0;
}

.btn-outline-primary {
    border-color: #26B4FF;
    background: transparent;
    color: #26B4FF;
}

.btn {
    cursor: pointer;
}

.text-light {
    color: #babbbc !important;
}

.btn-facebook {
    border-color: rgba(0,0,0,0);
    background: #3B5998;
    color: #fff;
}

.btn-instagram {
    border-color: rgba(0,0,0,0);
    background: #000;
    color: #fff;
}

.card {
    background-clip: padding-box;
    box-shadow: 0 1px 4px rgba(24,28,33,0.012);
}

.row-bordered {
    overflow: hidden;
}

.account-settings-fileinput {
    position: absolute;
    visibility: hidden;
    width: 1px;
    height: 1px;
    opacity: 0;
}
.account-settings-links .list-group-item.active {
    font-weight: bold !important;
}
html:not(.dark-style) .account-settings-links .list-group-item.active {
    background: transparent !important;
}
.account-settings-multiselect ~ .select2-container {
    width: 100% !important;
}
.light-style .account-settings-links .list-group-item {
    padding: 0.85rem 1.5rem;
    border-color: rgba(24, 28, 33, 0.03) !important;
}
.light-style .account-settings-links .list-group-item.active {
    color: #4e5155 !important;
}
.material-style .account-settings-links .list-group-item {
    padding: 0.85rem 1.5rem;
    border-color: rgba(24, 28, 33, 0.03) !important;
}
.material-style .account-settings-links .list-group-item.active {
    color: #4e5155 !important;
}
.dark-style .account-settings-links .list-group-item {
    padding: 0.85rem 1.5rem;
    border-color: rgba(255, 255, 255, 0.03) !important;
}
.dark-style .account-settings-links .list-group-item.active {
    color: #fff !important;
}
.light-style .account-settings-links .list-group-item.active {
    color: #4E5155 !important;
}
.light-style .account-settings-links .list-group-item {
    padding: 0.85rem 1.5rem;
    border-color: rgba(24,28,33,0.03) !important;
}
</style>