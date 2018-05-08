import Vue from 'vue';
import Router from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => require('./components/Home'),
    },
    {
        path: '/retrieve',
        component: () => require('./components/Retrieve'),
    },
    {
        path: '/review',
        component: () => require('./components/Review'),
    },
    {
        path: '/allocate',
        component: () => require('./components/Allocate'),
    },
];

const router = new Router({
    routes,
});