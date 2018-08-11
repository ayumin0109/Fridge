import { Module } from 'vuex';
import { RootState } from '@/stores/types';
import { FoodsListState } from './types';
import { mutations } from './mutations';
import { getters } from './getters';

const namespaced: boolean = true;

export const state: FoodsListState = {
    autoIncrement: 0,
    items: new Map(),
};

export const foodList: Module<FoodsListState, RootState> = {
    namespaced,
    mutations,
    getters,
    state,
};
