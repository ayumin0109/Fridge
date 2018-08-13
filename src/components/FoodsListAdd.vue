<template>
<button @click="addStorage">追加</button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import FoodsList from '@/components/FoodsList.vue';
import { State, Action, Getter, Mutation } from 'vuex-class';
import { StorageState, StorageStock, StorageStockStatus, StorageAddArg } from '@/stores/storage/types';
import { Food, FoodsListState } from '@/stores/foodList/types';

const storageNameSpace = 'storage';
const foodListNameSpace = 'foodList';

@Component({
  name: 'Main',
  components: {
    FoodsList,
  },
})

export default class Main extends Vue {

  @Prop() private targetStorage!: string;
  @Prop() private FoodName!: string;

  @Mutation('add', {namespace: storageNameSpace}) private add: any;
  @Mutation('setFood', {namespace: foodListNameSpace}) private setFood: any;

  private mounted() {
    // console.log(this.storage);
  }

  private addStorage() {
    // FoodList中に保存
    const id: number = this.setFood(this.FoodName);

    // Storageへ追加
    const stock: StorageStock = {
        status: StorageStockStatus.MANY,
        id,
    };
    const temp: StorageAddArg = {
        target: this.targetStorage,
        stock,
    };
    this.add(temp);
  }
}
</script>
