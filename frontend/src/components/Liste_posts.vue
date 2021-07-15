<template>
    <div class="inner-main-body p-2 p-sm-3 collapse forum-content show">
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
                                <p class="text-muted"><a href="javascript:void(0)">{{ post.pseudo }}</a> Crée <span class="text-secondary font-weight-bold">{{ post.creation }}</span></p>
                                <div v-show="this.connected">
                                    <button type="button" class="btn btn-primary mr-3"  @click="addComment(post.id, comment)">Commenter</button>
                                    <input type="text"  v-model="comment[post.id]">
                                </div>
                                
                            </div>
                            <div class="text-muted small text-center align-self-center">
                                <button><i class=" btn btn-light far fa-comment ml-2" @click="getComment(post.id)" data-bs-toggle="collapse" :data-bs-target="'#collapse' + post.id" role="button" aria-expanded="false" aria-controls="collapseComment"></i></button>
                            </div>
                            <div class="collapse" :id="'collapse' + post.id">
                                <div class="card my-3" v-for="com in commentList[post.id]" :key="com">
                                    <span>De {{ com.user_id }} </span>
                                    <span> le {{ com.creation }}</span>
                                    <div class="card mt-2"> {{com.comment }} </div>
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
      }
  },
    computed: {
    ...mapState(['userId', 'connected', 'token'])   
  },
  props: ['listeDesPosts']

}
</script>