<template>
  {{ movieItem() }}
  <div v-if="movie" class="movie-item">
    <img v-bind:src="imgUrl">
    <h3>Popularity: <strong>{{ movie.popularity}}</strong></h3>
    <h1>{{ movie.original_title }}</h1>
    <p>{{ movie.overview }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'MovieItem',
  props: {
    movieID: null,
  },
  data() {
    return {
      movie: null,
      error: [],
      imgUrl: null
    }
  },
  methods: {
    movieItem() {
      axios.get('https://api.themoviedb.org/3/movie/' + this.movieID +'?api_key=b03d508a9e788070ca877f98f3f8bbba')
          .then(response => {
            this.movie = response.data
            this.imgUrl =  'https://image.tmdb.org/t/p/original/' + response.data.poster_path
          })
          .catch(e => {
            this.error.push(e)
          })
    }
  },
  mounted() {
    this.movieItem();
  }
}
</script>

<style>
.movie-item img {
  width: 300px;
  height: auto;
}
.movie-item h3 {
  margin: 5px;
  font-size: 23px;
}
.movie-item h1 {
  margin: 5px;
  font-size: 26px;
}
.movie-item p {
  text-align: justify;
  height: 200px;
  overflow: scroll;
}
</style>
