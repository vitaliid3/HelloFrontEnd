<template>
  <div class="paginate">
    <vue-awesome-paginate
        :total-items="totalResults"
        :items-per-page="20"
        :max-pages-shown="5"
        :current-page="page"
        :on-click="changePageHandler"
    />
  </div>
<div class="movie-items">
  <div class="movie-item" v-for="movie in movies" :key="movie.movies">
    <img v-bind:src="'https://image.tmdb.org/t/p/original/' + movie.poster_path">
    <h3>Popularity: <strong>{{ movie.popularity}}</strong></h3>
    <h1>{{ movie.original_title }}</h1>
    <p>{{ movie.overview }}</p>
  </div>
</div>
</template>

<script>

import axios from 'axios'

export default {
  components: {

  },
  name: 'MovieList',

  data() {
    return {
      movies: null,
      error: [],
      page: 1,
      totalResults: 0,
      apiURL: 'https://api.themoviedb.org/3/discover/movie',
      params: {
        api_key: 'b03d508a9e788070ca877f98f3f8bbba'
      },
    }
  },
  methods: {
    movieList() {
      console.log(1);
      axios.get(this.apiURL, {params: this.params})
          .then(response => {
            this.movies = response.data.results
            this.totalResults = response.data.total_results
            this.page = response.data.page
          })
          .catch(e => {
            this.error.push(e)
          })
    },
    changePageHandler (page)  {
      this.page = page;
      this.params.page = page
      this.movieList();
    },
  },
  mounted() {
    this.movieList();
  }
}
</script>

<style>
.pagination-container {
  display: flex;
  column-gap: 10px;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
}
.active-page:hover {
  background-color: #2988c8;
}

.paginate {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
}

.movie-items {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 40px;
}
.movie-item img {
  width: 100%;
  height: auto;
}
.movie-item h3 {
  margin: 5px;
  font-size: 23px;
}
.movie-item h1 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 100px;
  margin: 5px;
  font-size: 26px;
}
.movie-item p {
  text-align: justify;
  height: 50px;
  overflow: scroll;
}
</style>
