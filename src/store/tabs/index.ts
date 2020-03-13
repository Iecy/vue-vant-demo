import { ActionTree, MutationTree, Module } from 'vuex';
import { RouteConfig } from 'vue-router';

import { TabsState, RootState } from '../interfaces';
import tabRoutes from '@/router/tabs';

const [home, list, mine] = tabRoutes.map((item: RouteConfig) => item.path);

const state: TabsState = {
  tabs: [
    {
      label: '首页',
      path: home,
      icon: 'home-o',
    },
    {
      label: '列表',
      path: list,
      icon: 'more-o',
    },
    {
      label: '我的',
      path: mine,
      icon: 'manager-o',
    },
  ],
};

const actions: ActionTree<TabsState, RootState> = {};

const mutations: MutationTree<TabsState> = {};

const tabs: Module<TabsState, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default tabs;
