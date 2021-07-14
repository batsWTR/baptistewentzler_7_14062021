<template>
  <form class="newPost">
    <div class="d-flex align-items-center bg-primary text-white">
      <h6 class="modal-title mb-0 p-3" id="threadModalLabel">Nouveau post</h6>
    </div>
    <div class="modal-body">
      <div>
        <label for="categorie">Choisissez une categorie</label>
        <select name="categorie" id="categorie" v-model="cat_id">
          <option v-for="cat in listeCat" :value="cat.id" :key="cat"> {{ cat.name }}</option>
        </select>
        <div>
          <button class="btn btn-primary">Ajouter une categorie</button>
        </div>
        
      </div>
      <div class="form-group">
        <label for="threadTitle" class="mb-2">Titre</label>
        <input type="text" class="form-control mb-2" id="threadTitle" placeholder="Entrez un titre" autofocus="" v-model="title"/>
      </div>
      <textarea class="form-control summernote" v-model="content"></textarea>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-light" data-dismiss="modal" @click.prevent="annuler">
        Annuler
      </button>
      <button type="button" class="btn btn-primary" @click.prevent="post">Post</button>
    </div>
  </form>
</template>


<script>
import { mapState } from 'vuex';
const axios = require('axios').default;

export default {
  name: "Create_post",
  data(){
    return{
      title:'',
      content:'',
      cat_id: 1,
      listeCat: [],
    }
  },
    computed: {
    ...mapState(['token', 'userId', 'token']),
      
  },
  methods: {
    annuler(){
      this.$router.push('/')
    },
    post(){
      console.log('cat id: ',this.cat_id)
      axios.post('http://127.0.0.1:3000/api/createPost',{
        title: this.title,
        content: this.content,
        user: this.userId,
        cat: this.cat_id
      },{
        headers:{
          Authorization: 'Bearer ' + this.token
        }
      })
      .then(response =>{
        console.log(response)
        this.$router.push('/')
      })
    }
  },
  mounted(){

    axios.get('http://127.0.0.1:3000/api/categories')
        .then(response =>{
            for(let cat of response.data){
                this.listeCat.push({id: cat.id, name: cat.name})
            }
            console.log(this.listeCat)
        })
  }
};
</script>

<style scoped>
.newPost {
    width: 100%;
    max-width: 630px;
    padding: 15px;
    margin: 0 auto;
    text-align: center;
}
</style>