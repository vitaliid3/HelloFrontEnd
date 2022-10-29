import { createApp } from 'vue'
import App from './App.vue'

import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";
import router from "@/router/router";

createApp(App)
    .use(router)
    .use(VueAwesomePaginate)
    .mount('#app')
