'use strict';
import '@babel/polyfill';// IE 10 vuex 需要引入,放在entry 中会报错
import App from 'framework/app.js';
import index from './index.vue';
import createStore from './store';
import createRouter from './router';

import './style/common.scss';

const options = { base: '/' };

export default new App({
  index,
  options,
  createStore,
  createRouter,
}).bootstrap();
