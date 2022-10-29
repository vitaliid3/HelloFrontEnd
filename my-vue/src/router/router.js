import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/pages/HomePage.vue";
import Movies from "@/components/pages/MoviesPage.vue";
import Movie from "@/components/pages/MoviePage.vue";
import AboutPage from "@/components/pages/AboutPage.vue";
import Contacts from "@/components/pages/ContactsPage.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/Movies",
        name: "Movies",
        component: Movies,
    },
    {
        path: "/movie/:id",
        name: "Movie",
        component: Movie,
    },
    {
        path: "/about",
        name: "About",
        component: AboutPage,
    },
    {
        path: "/contacts",
        name: "Contacts",
        component: Contacts,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;