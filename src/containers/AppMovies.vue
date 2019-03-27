<template>
    <div>
        <MovieSearch @searchTermUpdated="search" />
        <p  v-if="!movies.length" class="alert alert-danger">
            There are no movies...
        </p>
        <ul class="list-group" v-for="movie in paginatedData" :key="movie.id" name="pag">
            <li class="list-group-item"><MovieRow :movie="movie" :selected="selected" @clicked="clicked" /></li>
        </ul>
        <button @click="selectAll">Select all</button>
        <button @click="deselectAll">Deselect all</button>
        <button @click="sortByNameAsc">Sort by Name asc</button>
        <button @click="sortByNameDesc">Sort by Name desc</button>
        <button @click="sortByDurationAsc">Sort by Duration asc</button>
        <button @click="sortByDurationDesc">Sort by Duration asc</button>

        <p v-if="clickNumber>0">{{clickNumber}} movies are selected </p>

        <button :disabled="pageNumber === 0"  @click="prevPage"> Previous </button>
        <button :disabled="pageNumber >= pageCount" @click="nextPage"> Next </button> 
    </div>
</template>

<script>
import {moviesService} from '../services/MoviesService'
import MovieRow from '../components/MovieRow'
import MovieSearch from '../components/MovieSearch'

export default {
    data(){
        return {
            movies:[],
            clickNumber:0,
            selected:null,
            pageNumber: 0,
            size:5 
        }
    },
    components:{
        MovieRow,
        MovieSearch,
    },
    methods:{
        search(searchTerm){
            this.movies=this.movies.filter((movie)=>{
                return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
            })
        },
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
        },
        nextPage(){
         this.pageNumber++;
        },
        prevPage(){
        this.pageNumber--;
        }
    },
    computed:{
        pageCount(){ 
            return Math.floor(this.movies.length/this.size);
        },
        paginatedData(){
            const start = this.pageNumber * this.size
            const end = start + this.size;
            return this.movies.slice(start, end);
        }
  },
    
    beforeRouteEnter (to, from, next) {
    moviesService.getAll()
      .then((response) => {
        next((vm) => {
          vm.movies = response.data
        })
      })
    }
}
</script>

