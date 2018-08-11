import { MutationTree } from 'vuex';
import { StorageState } from './types';

export const mutations: MutationTree<StorageState> = {
    setFridge(state, list: number[]) {
      state.fridge = list;
    },
    setFreezer(state, list: number[]) {
      state.freezer = list;
    },
    setVegetable(state, list: number[]) {
      state.vegetable = list;
    },
};
