import { Module } from 'vuex';
import { RootState } from '@/stores/types';
import { FoodsListState, Food } from './types';
import { mutations } from './mutations';
import { getters } from './getters';

const namespaced: boolean = true;

const temp = new Map();
temp.set(0, {
    id: 0,
    isDelete: false,
    name: 'ピーマン',
});
temp.set(1, {
    id: 1,
    isDelete: false,
    name: 'トマト',
});
temp.set(2, {
    id: 2,
    isDelete: false,
    name: 'ほげ',
});

export const state: FoodsListState = {
    autoIncrement: 3,
    items: temp, // new Map(),
};

export const foodList: Module<FoodsListState, RootState> = {
    namespaced,
    mutations,
    getters,
    state,
};
