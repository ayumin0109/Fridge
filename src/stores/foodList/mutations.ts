import { MutationTree } from 'vuex';
import { Food, FoodsListState } from './types';

export const mutations: MutationTree<FoodsListState> = {
  setFood(state, name: string) {
    const max: number = state.autoIncrement;
    const food: Food = {
      id: max,
      isDelete: false,
      name,
    };
    state.items.set(max, food);
    state.autoIncrement += 1;
  },
};
