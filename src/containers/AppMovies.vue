<template>
    <div>
        <ul class="list-group" v-for="movie in movies" :key="movie.id">
            <li class="list-group-item"><MovieRow :movie="movie" /></li>
        </ul>
    </div>
</template>

<script>
import {moviesService} from '../services/MoviesService'
import MovieRow from '../components/MovieRow'
export default {
    data(){
        return {
            movies:[]      
        }
    },
    components:{
        MovieRow
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

<style>

</style>
