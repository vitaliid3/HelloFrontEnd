<template>
  <div class="movie-item">

    <img v-bind:src="img">
    <h3>Popularity: <strong>{{ popularity}}</strong></h3>
    <h1>{{ title }}</h1>
    <p>{{ overview }}</p>

  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import axios from 'axios'
export default {
  name: 'MovieItem',
  data() {
    return {
      img: null,
      popularity: null,
      title: null,
      overview: null,
      error: [],
      imgUrl: null,
      movieID: useRoute().params.id,
      apiURL: 'https://api.themoviedb.org/3/movie/'+ useRoute().params.id,
      params: {
        api_key: 'b03d508a9e788070ca877f98f3f8bbba'

      },
    }
  },
  methods: {
    movieItem() {
      axios.get(this.apiURL, {params: this.params})
          .then(response => {
            console.log(response.data.id)
            this.img = 'https://image.tmdb.org/t/p/original/' + response.data.poster_path
            this.popularity = response.data.popularity
            this.title = response.data.title
            this.overview = response.data.overview
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
