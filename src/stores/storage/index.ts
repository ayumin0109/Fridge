import { Module } from 'vuex';
import { RootState } from '@/stores/types';
import { StorageState, StorageStock, StorageStockStatus } from './types';
import { mutations } from './mutations';
import { getters } from './getters';

const namespaced: boolean = true;

const temp: StorageStock[] = [
    {
        status: StorageStockStatus.MANY,
        id: 1,
    },
    {
        status: StorageStockStatus.FEW,
        id: 2,
    },
    {
        status: StorageStockStatus.NOTHING,
        id: 3,
    },
];

export const state: StorageState = {
    fridge: temp,
    freezer: [],
    vege: [],
};

export const storage: Module<StorageState, RootState> = {
    namespaced,
    mutations,
    getters,
    state,
};
