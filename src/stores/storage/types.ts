export enum StorageStockStatus {
    NOTHING = 0,
    FEW,
    MANY,
    EOL,
}

export interface StorageStock {
    status: number;
    id: number;
}

export interface StorageAddArg {
    target: string;
    stock: StorageStock;
}

export interface StorageState {
    fridge: StorageStock[];
    freezer: StorageStock[];
    vege: StorageStock[];
}
