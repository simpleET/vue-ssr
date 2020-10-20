import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import Index from '../view/index';

export default function createRouter() {
    return new VueRouter({
        mode: 'history',
        base: '/',
        routes: [
            {
                path: '/',
                name: 'Index',
                // component: () => import(/* webpackChunkName:"Index" */'../view/index.vue'), // 报渲染不匹配
                // component: import('../view/index.vue'),// 组件报错
                component: Index, // 只能使用该方式引入首页
            },
            {
                path: '/detail/:id?',
                name: 'Detail',
                component: () => import(/* webpackChunkName:"Detail" */ './detail.vue'),
            }
        ]
    });
}

