import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';

import tabRoutes from './tabs';

Vue.use(Router);

const routes: RouteConfig[] = [
  {
    path: '/login',
    name: 'login',
    meta: {
      index: 0,
    },
    component: () => import('@/views/login/index.vue'),
  }, {
    path: '/',
    redirect: '/home',
  }, {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register/index.vue'),
  }, {
    path: '*',
    component: () => import('@/views/noPage/index.vue'),
  },
  ...tabRoutes,
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
