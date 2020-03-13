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

router.beforeEach((to, form, next) => {
  if (to.meta.auth) {
    // 需要登录
    const token = localStorage.getItem('token');
    if (token) {
      next();
    } else {
      next({
        path: '/login',
        query: { redirect: to.path },
      });
    }
  } else { // 不需要登录验证
    next();
  }
});

export default router;
