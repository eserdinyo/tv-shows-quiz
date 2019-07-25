import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home.vue';

Vue.use(Router);

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/show-detail/:id',
            name: 'ShowDetail',
            component: () => import('@/pages/ShowDetail.vue'),
        },
        {
            path: '/admin',
            name: 'Admin',
            component: () => import('@/pages/admin//Admin.vue'),
        },
        {
            path: '/add-show',
            name: 'AddShow',
            component: () => import('@/pages/admin/AddShow.vue'),
        },
        {
            path: '/admin-show/:id',
            name: 'AdminShowDetay',
            component: () => import('@/pages/admin/AdminShowDetay.vue'),
        },
        {
            path: '/add-character/:id',
            name: 'AddCharacter',
            component: () => import('@/pages/admin/AddCharacter.vue'),
        },
    ],
});
