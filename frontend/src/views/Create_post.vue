<template>
  <form>
    <div class="d-flex align-items-center bg-primary text-white">
      <h6 class="modal-title mb-0" id="threadModalLabel">Nouveau post</h6>
    </div>
    <div class="modal-body">
      <div class="form-group">
        <label for="threadTitle">Title</label>
        <input type="text" class="form-control" id="threadTitle" placeholder="Enter title" autofocus="" v-model="title"/>
      </div>
      <textarea class="form-control summernote" v-model="content"></textarea>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-light" data-dismiss="modal" @click.prevent="annuler">
        Cancel
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
      cat_id: 1
    }
  },
    computed: {
    ...mapState(['token', 'userId']),
      
  },
  methods: {
    annuler(){
      this.$router.push('/')
    },
    post(){
      axios.post('http://127.0.0.1:3000/api/createPost',{
        title: this.title,
        content: this.content,
        user: this.userId,
        cat: this.cat_id
      })
      .then(response =>{
        console.log(response)
      })
    }
  },
};
</script>