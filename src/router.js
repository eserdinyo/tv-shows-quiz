import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
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
      component: () => import('./views/ShowDetail.vue'),
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('./views/Admin.vue')
    },
    {
      path: '/add-show',
      name: 'AddShow',
      component: () => import('./views/AddShow.vue')
    },
    {
      path: '/admin-show/:id',
      name: 'AdminShowDetay',
      component: () => import('./views/AdminShowDetay.vue')
    }
  ],
});
