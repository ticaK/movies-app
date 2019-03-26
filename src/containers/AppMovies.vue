<template>
    <div>
        <ul class="list-group" v-for="movie in movies" :key="movie.id">
            <li class="list-group-item"><MovieRow :movie="movie" @clicked="clicked" /></li>
        </ul>
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
             clickNumber:0
        }
    },
    components:{
        MovieRow
    },
    methods:{
        clicked(){
           this.clickNumber++;
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
