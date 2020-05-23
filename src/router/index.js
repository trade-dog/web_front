import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import portfolio from "@/components/portfolio";
import Search from "../components/Search";
import login from "../components/login";
import ModUser from "../components/ModUser";
import TrendCard from "../components/TrendCard"

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
            path: '/portfolio/:id',
            name: 'Portfolio',
            component: portfolio
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/user',
            name: 'user',
            component: ModUser
        }
    ]
})