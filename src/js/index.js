require('./bootstrap');

import Vue from 'vue';

import Layout from './components/layouts/Default';
import Router from 'vue-router';

import Home from './components/Home';
import Retrieve from './components/Retrieve';
import Review from './components/Review';
import Allocate from './components/Allocate';


const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/retrieve',
        component: Retrieve,
    },
    {
        path: '/review',
        component: Review,
    },
    {
        path: '/allocate',
        component: Allocate,
    },
];

const router = new Router({
    mode: 'history',
    routes,
});

const app = new Vue({
    el: '#app',
    template: '<Layout><router-view></router-view></Layout>',
    router,
    components: {
        Layout,
    }
});