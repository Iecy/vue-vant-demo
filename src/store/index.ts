import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

import { RootState } from './interfaces';

import getters from './getters';

import tabs from './tabs';

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';

const store: StoreOptions<RootState> = {
  modules: {
    tabs,
  },
  getters,
  strict: debug,
};

export default new Vuex.Store<RootState>(store);
