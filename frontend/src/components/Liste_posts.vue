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


export default {
  name: 'Liste_posts',
  data(){
    return{

    }
  },
  props: ['listeDesPosts']

}
</script>