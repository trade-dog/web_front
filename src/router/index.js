import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import portfolio from "@/components/portfolio";
import Search from "../components/Search";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/search',
            name: 'Search',
            component: Search
        },
        {
            path: '/portfolio',
            name: 'Portfolio',
            component: portfolio
        }
    ]
})