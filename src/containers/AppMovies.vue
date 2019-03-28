<template>
  <div>
    <movie-search @search-term-updated="search"/>
    <p v-if="!movies.length" class="alert alert-danger">There are no movies...</p>
    <ul class="list-group" v-for="movie in paginatedData" :key="movie.id" name="pag">
      <li class="list-group-item">
        <movie-row :movie="movie" :selected="selected" @clicked="clicked"/>
      </li>
    </ul>
    <button @click="selectAll">Select all</button>
    <button @click="deselectAll">Deselect all</button>
    <button @click="sortMovies('title','asc')">Sort by Name asc</button>
    <button @click="sortMovies('title','desc')">Sort by Name desc</button>
    <button @click="sortMovies('duration','asc')">Sort by Duration asc</button>
    <button @click="sortMovies('duration','desc')">Sort by Duration desc</button>

    <p v-if="clickNumber>0">{{clickNumber}} movies are selected</p>

    <button :disabled="pageNumber === 0" @click="prevPage">Previous</button>
    <button :disabled="pageNumber >= pageCount" @click="nextPage">Next</button>
  </div>
</template>

<script>
import { moviesService } from "../services/MoviesService";
import MovieRow from "../components/MovieRow";
import MovieSearch from "../components/MovieSearch";

export default {
  data() {
    return {
      movies: [],
      searchTerm: "",
      clickNumber: 0,
      selected: null,
      pageNumber: 0,
      size: 5
    };
  },
  components: {
    MovieRow,
    MovieSearch
  },
  methods: {
    search(term) {
      this.searchTerm = term;
      this.movies = this.movies.filter(movie => {
        return movie.title
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase());
      });
    },
    clicked() {
      this.clickNumber++;
    },
    selectAll() {
      this.selected = true;
    },
    deselectAll() {
      this.selected = false;
    },
    sortMovies(property, order) {
      if (order === "asc") {
        return this.movies.sort((movie1, movie2) =>
          movie1[property] > movie2[property] ? 1 : -1
        );
      }
      if (order === "desc") {
        return this.movies.sort((movie1, movie2) =>
          movie1[property] < movie2[property] ? 1 : -1
        );
      }
    },
    nextPage() {
      this.pageNumber++;
    },
    prevPage() {
      this.pageNumber--;
    }
  },
  computed: {
    pageCount() {
      return Math.floor(this.movies.length / this.size);
    },
    paginatedData() {
      const start = this.pageNumber * this.size;
      const end = start + this.size;
      return this.movies.slice(start, end);
    }
  },
  beforeRouteEnter(to, from, next) {
    moviesService.getAll().then(response => {
      next(vm => {
        vm.movies = response.data;
      });
    });
  }
};
</script>

