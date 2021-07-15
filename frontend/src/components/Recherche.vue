<template>
    <div class="inner-main-header">
                <select class="custom-select custom-select-sm w-auto mr-1">
                    <option selected="">Tous</option>
                    <option v-for="cat in listeCategories" :key="cat">{{ cat.name }}</option>
                </select>
                <span class="input-icon input-icon-sm ml-auto w-auto">
                    <input type="text" class="form-control form-control-sm bg-gray-200 border-gray-200 shadow-none mb-4 mt-4" v-model="recherche" placeholder="Recherche..." />
                </span>
            </div>
</template>
<script>


export default{
    name: 'recherche',
    props: ['listeCategories'],
    data(){
        return{
            recherche: ''               
        }
    }
}
</script>
