<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css" integrity="sha256-46r060N2LrChLLb5zowXQ72/iKKNiw/lAmygmHExk/o=" crossorigin="anonymous" />
<div class="container">
<div class="p-0">
    <div class="row">
        <div class="col col-md-3">
            <div class="inner-sidebar-header justify-content-center">
                <router-link to="/post" v-if="connected">
                <button class="btn btn-primary has-icon btn-block" type="button" data-toggle="modal" data-target="#threadModal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus mr-2">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    Créer un post
                </button>
                </router-link>
            </div>
            <!-- Liste categories -->
            <ListeCategories v-bind:listeCategories="listeCat" @selected-cat="selectedCat"/>
        </div>
        <div class="col col-md-9">
            <!-- Barre de recherche -->
            <Recherche v-bind:listeCategories="listeCat" @recherche-posts="recherchePosts"/>

            <!-- Liste des posts -->
            <ListePosts v-bind:listeDesPosts="listePosts"/>

        </div>
    </div>

</div>
</div>
</template>

<script>

import { mapState } from 'vuex'
import ListePosts from '../components/Liste_posts.vue'
import ListeCategories from '../components/Liste_categories.vue'
import Recherche from '../components/Recherche.vue'
import axios from "axios";

export default {
  name: 'Home',
  data(){
      return{
          listeCat: [],
          listePosts: [],
          listeUsers: []
      }
  },
  computed: {
    ...mapState(['connected'])   
  },
  components: {
      ListePosts,
      ListeCategories,
      Recherche
  },
  methods: {
      selectedCat(e){
          console.log('Cat id: ', e)

          for(let i = 0; i <  this.listeCat.length; i++){
              if(this.listeCat[i].id == e){
                  this.listeCat[i].isActive = true
              }else{
                  this.listeCat[i].isActive = false
              }
          }

          axios.get('http://127.0.0.1:3000/api/postsById/'+ e)
          .then(response =>{
              this.listePosts = response.data
              
          })
          .catch((error) =>{
        console.log('CAT ',error);
      })
      },
      recherchePosts(rech){
          this.listePosts = rech
      }
  },
  mounted(){
        axios.get('http://127.0.0.1:3000/api/categories')
        .then(response =>{
            this.listeCat.push({id: 0, name: 'Tous', isActive: true})
            for(let cat of response.data){
                this.listeCat.push({id: cat.id, name: cat.name, isActive: false})
            }

        })
        axios.get('http://127.0.0.1:3000/api/posts')
      .then(response =>{
          //console.log(response.data)
          this.listePosts = response.data
      })

    }

}
</script>

<style scoped>

</style>