import { GetterTree } from 'vuex';
import { Food, FoodsListState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<FoodsListState, RootState> = {
    name(state, key: number): Food | undefined {
        if (state.items.has(key)) {
            return state.items.get(key);
        }
    },
};
