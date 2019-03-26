<template>
    <div>
        <ul class="list-group" v-for="movie in movies" :key="movie.id">
            <li class="list-group-item"><MovieRow :movie="movie" :selected="selected" @clicked="clicked" /></li>
        </ul>
        <button @click="selectAll">Select all</button>
        <button @click="deselectAll">Deselect all</button>
        
        <p v-if="clickNumber>0">{{clickNumber}} movies are selected </p>
    </div>
</template>

<script>
import {moviesService} from '../services/MoviesService'
import MovieRow from '../components/MovieRow'
export default {
    data(){
        return {
            movies:[],
             clickNumber:0,
             selected:null
        }
    },
    components:{
        MovieRow
    },
    methods:{
        clicked(){
           this.clickNumber++;
        },
        selectAll(){
            this.selected=true
        },
        deselectAll(){
            this.selected=false
        }
    },

    beforeRouteEnter (to, from, next) {
    moviesService.getAll()
      .then((response) => {
        next((vm) => {
          vm.movies = response.data
        })
      })
  },

}
</script>

<style>

</style>
