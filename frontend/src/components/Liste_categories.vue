<template>
    <div class="p-0">
                <div class="p-3">
                    <div style="margin: -16px;">
                        <div>
                            <div style="right: 0px; bottom: 0px;">
                                <div style="height: 100%; overflow: hidden scroll;">
                                    <div style="padding: 16px;">
                                        <nav class="nav nav-pills nav-gap-y-1 flex-column">
                                            <a href="javascript:void(0)" class="nav-link nav-link-faded has-icon" :class="{active: cat.isActive == true}" @click="clickCat(cat.id)" v-for="cat in listeCategories" :key="cat">{{ cat.name }}</a>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="width: 234px; height: 50px;"></div>
                    </div>
                </div>
            </div>
</template>



<script>


export default {
    name: 'Liste_categories',
    data(){
        return{
        }
    },
    props: ['listeCategories'],
    methods:{
        clickCat(id){
            console.log(this.listeCategories)
            this.$emit('selected-cat', id)
        }
    }
    

}
</script>
!