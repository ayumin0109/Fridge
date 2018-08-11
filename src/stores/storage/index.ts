import { Module } from 'vuex';
import { RootState } from '@/stores/types';
import { StorageState } from './types';
import { mutations } from './mutations';
import { getters } from './getters';

const namespaced: boolean = true;

export const state: StorageState = {
    fridge: [],
    freezer: [],
    vegetable: [],
};

export const storage: Module<StorageState, RootState> = {
    namespaced,
    mutations,
    getters,
    state,
};
