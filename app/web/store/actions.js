'use strict';

import * as Type from './mutation-type';
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import {getBannerList} from '../api/index';

Vue.use(Vuex);

const actions = {
    FETCH_ARTICLE_DETAIL: ({commit, dispatch, state}, {id}) => {
        if (state.article.id !== Number(id)) {
            return axios.get(`${state.origin}/api/article/${id}`)
                .then(response => {
                    commit(Type.SET_ARTICLE_DETAIL, response.data);
                });
        }
    },
    async getBanners({commit}, data) {
        // 必须要return
        let res = await getBannerList();
        return commit('saveBanners', res.data);
        /*  return axios.get('https://rcdata.com.cn/xmofficial/banner/bannerList').then(res => {
              if (res.status === 200) {
                  commit('saveBanners', res.data.data);
              }
          })*/
    }
};

export default actions;
