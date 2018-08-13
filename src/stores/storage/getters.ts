import { GetterTree } from 'vuex';
import { StorageState, StorageStock } from './types';
import { RootState } from '../types';

export const getters: GetterTree<StorageState, RootState> = {
    fridge: (state): StorageStock[] => state.fridge,
    freezer: (state): StorageStock[] => state.freezer,
    vege: (state): StorageStock[] => state.vege,
};
