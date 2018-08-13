import { GetterTree } from 'vuex';
import { Food, FoodsListState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<FoodsListState, RootState> = {
    autoIncrement(state): number {
        return state.autoIncrement;
    },
    foodlist(state): Map<number, Food> {
        return state.items;
    },
    // name(state, key: number): Food | undefined {
    //     if (state.items.has(key)) {
    //         return state.items.get(key);
    //     }
    // },
};
