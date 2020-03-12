import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';

import 'amfe-flexible';

import interceptor from '@/utils/interceptor';

Vue.config.productionTip = false;

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

interceptor(app);
