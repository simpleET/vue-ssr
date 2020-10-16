'use strict';
import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

// initState: window.__INITIAL_STATE__
export default function createStore(initState = {}) {

  const state = {
    articleList: [],
    article: {},
    ...initState
  };

  return new Vuex.Store({
    state,
    actions,
    getters,
    mutations
  });
}