<template>
    <div class="inner-main-header">
                <select class="custom-select custom-select-sm w-auto mr-1" ref="choix">
                    <option selected value="0">Tous</option>
                    <option v-for="cat in listeCategories" :key="cat" :value="cat.id">{{ cat.name }}</option>
                </select>
                <span class="input-icon input-icon-sm ml-auto w-auto">
                    <input type="text" class="form-control form-control-sm bg-gray-200 border-gray-200 shadow-none mb-4 mt-4" v-model="recherche" placeholder="Recherche..." />
                </span>
            </div>
</template>
<script>
import axios from "axios";

export default{
    name: 'recherche',
    props: ['listeCategories'],
    data(){
        return{
            recherche: '',
            choix: ''               
        }
    },
    watch: {
        recherche: function(){
            if(this.recherche.length > 3){
                console.log(this.recherche)
                console.log(this.$refs.choix.value)
                axios.post('http://127.0.0.1:3000/api/search', {
                    recherche: this.recherche,
                    catId: this.$refs.choix.value
                })
                .then(response =>{
                    console.log(response)
                    this.$emit('recherche-posts', response.data)
                })
                .catch(err =>{
                    console.log(err)
                })
            }
            
        }
    }
}
</script>
