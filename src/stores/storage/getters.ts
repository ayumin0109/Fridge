import { GetterTree } from 'vuex';
import { StorageState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<StorageState, RootState> = {
    fridge: (state) => state.fridge,
    freezer: (state) => state.freezer,
    vegetable: (state) => state.vegetable,
};
