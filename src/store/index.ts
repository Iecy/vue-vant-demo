import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

import { RootState } from './interfaces';

import getters from './getters';

import tabs from './tabs';
import user from './user';

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';

const store: StoreOptions<RootState> = {
  modules: {
    tabs,
    user,
  },
  getters,
  strict: debug,
};

export default new Vuex.Store<RootState>(store);
