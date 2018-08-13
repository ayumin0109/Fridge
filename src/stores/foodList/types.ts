
export interface Food {
    id: number;
    isDelete: boolean;
    name: string;
}

export interface FoodsListState {
    items: Map<number, Food>;
    autoIncrement: number;
}
