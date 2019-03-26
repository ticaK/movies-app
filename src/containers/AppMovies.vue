<template>
    <div>
        <ul class="list-group" v-for="movie in movies" :key="movie.id">
            <li class="list-group-item"><MovieRow :movie="movie" :selected="selected" @clicked="clicked" /></li>
        </ul>
        <button @click="selectAll">Select all</button>
        <button @click="deselectAll">Deselect all</button>
        <button @click="sortByNameAsc">Sort by Name asc</button>
        <button @click="sortByNameDesc">Sort by Name desc</button>
        <button @click="sortByDurationAsc">Sort by Duration asc</button>
        <button @click="sortByDurationDesc">Sort by Duration asc</button>


        
        
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
        },
        sortByNameAsc(){
            this.movies.sort(function(movie1, movie2) {
                if(movie1.title < movie2.title) { 
                    return -1;
                }
                if(movie1.title > movie2.title) {
                     return 1;
                }
                return 0;
            })
        },
        sortByNameDesc(){
            this.movies.sort(function(movie1, movie2) {
                if(movie1.title > movie2.title) { 
                    return -1;
                }
                if(movie1.title < movie2.title) {
                     return 1;
                 }
                return 0;
            })
        },
        sortByDurationAsc(){
            this.movies.sort(function(movie1, movie2) {
                if(movie1.duration < movie2.duration) {
                     return -1;
                }
                if(movie1.duration > movie2.duration) {
                     return 1;
                }
                return 0;
            })
        },
        sortByDurationDesc(){
            this.movies.sort(function(movie1, movie2) {
                if(movie1.duration > movie2.duration) {
                     return -1;
                }
                if(movie1.duration < movie2.duration) { 
                    return 1;
                }
                return 0;
            })
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
