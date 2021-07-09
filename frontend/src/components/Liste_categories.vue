<template>
    <div class="inner-sidebar-body p-0">
                <div class="p-3 h-100" data-simplebar="init">
                    <div class="simplebar-wrapper" style="margin: -16px;">
                        <div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer"></div></div>
                        <div class="simplebar-mask">
                            <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
                                <div class="simplebar-content-wrapper" style="height: 100%; overflow: hidden scroll;">
                                    <div class="simplebar-content" style="padding: 16px;">
                                        <nav class="nav nav-pills nav-gap-y-1 flex-column">
                                            <a href="javascript:void(0)" class="nav-link nav-link-faded has-icon active" @click="clickCat(0)">Tous</a>
                                            <a href="javascript:void(0)" class="nav-link nav-link-faded has-icon" @click="clickCat(cat.id)" v-for="cat in listeCategories" :key="cat">{{ cat.name }}</a>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="simplebar-placeholder" style="width: 234px; height: 292px;"></div>
                    </div>
                    <div class="simplebar-track simplebar-horizontal" style="visibility: hidden;"><div class="simplebar-scrollbar" style="width: 0px; display: none;"></div></div>
                    <div class="simplebar-track simplebar-vertical" style="visibility: visible;"><div class="simplebar-scrollbar" style="height: 151px; display: block; transform: translate3d(0px, 0px, 0px);"></div></div>
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
            
            this.$emit('selected-cat', id)
        }
    }
    

}
</script>
!