<template>
    <div class="inner-main-body p-2 p-sm-3">
        <ul>
            <li v-for="post in listeDesPosts" :key="post" style="list-style: none">
                <div class="card mb-2">
                    <div class="card-body p-2 p-sm-3">
                        <div class="media forum-item">
                            <a href="#" data-toggle="collapse" data-target=".forum-content"><img :src="post.avatar" class="mr-3 rounded-circle" width="50" alt="User" /></a>
                            <div class="media-body">
                                <h6><a href="#" data-toggle="collapse" data-target=".forum-content" class="text-body">{{post.title}}</a></h6>
                                <p class="text-secondary">
                                    {{ post.content}}
                                </p>
                                <p class="text-muted"><a href="javascript:void(0)">{{ post.pseudo }}</a> Posté il y a <span class="text-secondary font-weight-bold">{{ calculDate(post.date) }}</span></p>
                                <div v-show="this.connected">
                                    <button type="button" class="btn btn-primary mr-3"  @click="addComment(post.id, comment)">Commenter</button>
                                    <input type="text"  v-model="comment[post.id]">
                                </div>
                                
                            </div>
                            <div class="text-muted small text-center align-self-center">
                                <button class="btn btn-primary" @click="getComment(post.id)" data-bs-toggle="collapse" :data-bs-target="'#collapse' + post.id" role="button" aria-expanded="false" aria-controls="collapseComment"> <i class="far fa-comment ml-2"  ></i> {{ post.nb }}</button>
                            </div>
                            <div class="collapse" :id="'collapse' + post.id">
                                <div class="card my-3" v-for="com in commentList[post.id]" :key="com">
                                    <div class="card-body">
                                        <div class="card title">
                                            <span>De  <a href="">{{ com.pseudo }}</a> </span>
                                            <span> Commenté il y a {{ calculDate(com.date) }}</span>
                                        </div>
                                        <p class="card-text mt-3"> {{com.comment }} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
      </div>
</template>


<script>
import { mapState } from 'vuex'
import axios from "axios";

export default {
  name: 'Liste_posts',
  data(){
    return{
        comment: [],
        commentList: []
    }
  },
  methods:{
      addComment(id){
          console.log('Ajout commentaire id: ', id)
          console.log('User id: ', this.userId)
          console.log('Comment: ', this.comment[id])

          if(this.comment[id] == undefined){
              console.log('commentaire vide')
              return
          }

          axios.post('http://127.0.0.1:3000/api/addComment', {
              userId: this.userId,
              postId: id,
              comment: this.comment[id]
          },{
                headers:{
                Authorization: 'Bearer ' + this.token
                }
        })
          .then(response =>{
              console.log(response)
              this.comment[id]= ""
              location.reload()
          })
          .catch(err =>{
              console.log(err)
          })
        
      },
      getComment(id){
          console.log('Commentaire pour le post: ', id)

          axios.get('http://127.0.0.1:3000/api/comment/' + id)
          .then(response =>{
              this.commentList[id] = response.data
              console.log('CommentList: ', this.commentList)
          })
          .catch(err =>{
              console.log(err)
          })
      },
    calculDate(date){
        var tabDate = date.split(':')
        console.log(tabDate)

        if(tabDate[0] == 0 && tabDate[1] == 0){
            return 'moins de 1 minute'
        }else if(tabDate[0] == 0){
            return tabDate[1] + ' minutes'
        }else if (tabDate[0] < 24){
            return tabDate[0] + ' Heures'
        }else if(tabDate[0] < 169){
            return Math.floor(parseInt(tabDate[0]) / 24) + ' jours'
        }else if(tabDate[0] > 719){
            return Math.floor(parseInt(tabDate[0]) / 720) + ' mois'
        }
    } 

  },
    computed: {
    ...mapState(['userId', 'connected', 'token'])

  
  },
  props: ['listeDesPosts']

}
</script>