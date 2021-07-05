<template>
    <div class="inner-main-body p-2 p-sm-3 collapse forum-content show">
        <ul>
            <li v-for="post in listePosts" :key="post" style="list-style: none">
                <div class="card mb-2">
                    <div class="card-body p-2 p-sm-3">
                        <div class="media forum-item">
                            <a href="#" data-toggle="collapse" data-target=".forum-content"><img :src="listeUsers[post.user_id].avatar" class="mr-3 rounded-circle" width="50" alt="User" /></a>
                            <div class="media-body">
                                <h6><a href="#" data-toggle="collapse" data-target=".forum-content" class="text-body">{{post.title}}</a></h6>
                                <p class="text-secondary">
                                    {{ post.content}}
                                </p>
                                <p class="text-muted"><a href="javascript:void(0)">{{ listeUsers[post.user_id].pseudo }}</a> Crée <span class="text-secondary font-weight-bold">{{ post.creation }}</span></p>
                            </div>
                            <div class="text-muted small text-center align-self-center">
                                <span><i class="far fa-comment ml-2"></i> 3</span>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
      </div>
</template>


<script>

import axios from "axios";

export default {
  name: 'Liste_posts',
  data(){
    return{
        listePosts: [],
        listeUsers: []
    }
  },
  mounted(){
      axios.get('http://127.0.0.1:3000/api/posts')
      .then(response =>{
          //console.log(response.data)
          this.listePosts = response.data
      })
      axios.get('http://127.0.0.1:3000/api/users')
      .then(response =>{
          //console.log(response.data)
          for(let user of response.data){
              this.listeUsers[user.id] = {pseudo: user.pseudo, avatar:user.avatar}
          }
          console.log('Users ',this.listeUsers)
      })


  }

}
</script>