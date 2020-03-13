import { UserState, RootState, UserLoginFormInterface } from '../interfaces';
import { Module, Commit, ActionTree, MutationTree } from 'vuex';

import { UserService } from '@/service';

const state: UserState = {
  isLogin: localStorage.getItem('token') ? true : false,
};

const actions: ActionTree<UserState, RootState> = {
  login: (context: { commit: Commit }, userMessage: UserLoginFormInterface) => {
    return UserService.login(userMessage).then((res: any) => {
      const { errCode, token } = res.data;
      if (errCode) {
        context.commit('setLoginState', true);
        localStorage.setItem('token', token);
      }
      return errCode;
    });
  },
  loginOut: (context: {commit: Commit}) => {
    return UserService.loginOut().then((res: any) => {
      const { errCode } = res.data;
      if (errCode) {
        context.commit('setLoginState', false);
        localStorage.removeItem('token');
      }
      return errCode;
    });
  },
};

const mutations: MutationTree<UserState> = {
  setLoginState(userState: UserState, isLogin: boolean) {
    userState.isLogin = isLogin;
  },
};

const user: Module<UserState, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default user;


