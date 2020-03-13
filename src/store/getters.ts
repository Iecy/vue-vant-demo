import { GetterTree } from 'vuex';
import { RootState, TabsState } from './interfaces';

const getters = {
  tabs: (state: any) => state.tabs.tabs,
};

export default getters;
