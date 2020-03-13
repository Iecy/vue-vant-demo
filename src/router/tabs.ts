import { RouteConfig } from 'vue-router';

const tabRoutes: RouteConfig[] = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/index/index.vue'),
    meta: {
      index: 1,
    },
  }, {
    path: '/list',
    name: 'list',
    component: () => import('@/views/list/index.vue'),
    meta: {
      index: 2,
      auth: true,
    },
  }, {
    path: '/user-center',
    name: 'userCenter',
    component: () => import('@/views/user-center/index.vue'),
    meta: {
      index: 3,
      auth: true,
    },
  },
];

export default tabRoutes;
