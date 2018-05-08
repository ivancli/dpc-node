require('../bootstrap');

import Vue from 'vue';

import Layout from '../components/layouts/Default';
import Content from '../components/Allocate';

const app = new Vue({
    el: '#app',
    template: '<Layout><Content slot="content" /></Layout>',
    components: {
        Layout,
        Content
    }
});