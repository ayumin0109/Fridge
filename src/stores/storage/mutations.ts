import Vue from 'vue';
import { MutationTree } from 'vuex';
import { StorageState, StorageStock, StorageAddArg } from './types';
import _ from 'lodash';

export const mutations: MutationTree<StorageState> = {
    setFridge(state, list: StorageStock[]) {
      state.fridge = list;
    },
    setFreezer(state, list: StorageStock[]) {
      state.freezer = list;
    },
    setVege(state, list: StorageStock[]) {
      state.vege = list;
    },
    addFridge(state, stock: StorageStock) {
      state.fridge.push(stock);
    },
    addFreezer(state, stock: StorageStock) {
      state.freezer.push(stock);
    },
    addVege(state, stock: StorageStock) {
      state.vege.push(stock);
    },
    add(state: any, {target, stock}: StorageAddArg ): void {
      if (['fridge', 'vege', 'freezer'].includes(target)) {
        state[target].push(stock);
      }
    },
    change(state: any, {target, stock}: StorageAddArg ): void {
      if (['fridge', 'vege', 'freezer'].includes(target)) {
        const idx = _.findIndex(state[target], {id: stock.id});

        // see: https://vuex.vuejs.org/guide/mutations.html#mutations-follow-vue-s-reactivity-rules
        Vue.set(state[target], idx, stock);
      }
    },
  };
