import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { storage } from './storage/index';
import { foodList } from './foodList/index';
import { RootState } from './types';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0',
  },
  modules: {
    storage,
    foodList,
  },
};

export default new Vuex.Store<RootState>(store);
