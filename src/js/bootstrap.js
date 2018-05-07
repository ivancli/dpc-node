const axios = require('axios');
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import Vue from 'vue';

import ElementUI from 'element-ui';

Vue.use(ElementUI, {size: 'small'});

import '../sass/app.scss';