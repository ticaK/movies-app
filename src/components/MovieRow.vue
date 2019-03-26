<template>
    <div>
        <div :style="{'background-color':backgroundColor, 'color':color}">
            id:{{movie.id}}
            title:{{movie.title}}
            director:{{movie.director}}
            imageUrl:{{movie.imageUrl}}
            duration:{{movie.duration}}
            releaseDate:{{movie.releaseDate}}
            genre:{{movie.genre}}

        </div>
        <button @click="select(movie.id)">Select</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            backgroundColor:"",
            color:"",
            idArray:[]
            
        }
    },
    props:["movie"],
    methods:{
        select(id){
            if(this.idArray.indexOf(id)===-1){
                this.idArray.push(id)
                this.backgroundColor="#000000"
                this.color="#FFFFFF"
                this.$emit('clicked')
            } else {
                return;
            }
        }
    }

}
</script>

<style>

</style>
