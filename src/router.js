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
      component: () => import('./views/admin//Admin.vue'),
    },
    {
      path: '/add-show',
      name: 'AddShow',
      component: () => import('./views/admin/AddShow.vue'),
    },
    {
      path: '/admin-show/:id',
      name: 'AdminShowDetay',
      component: () => import('./views/admin/AdminShowDetay.vue'),
    },
    {
      path: '/add-character/:id',
      name: 'AddCharacter',
      component: () => import('./views/admin/AddCharacter.vue'),
    },
  ],
});
