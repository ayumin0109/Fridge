<template>
  <div class="dialog">
    <h2 v-text="targetStorage"/>
    <ul class="list">
      <li class="list_item list_item-food"
        v-if="item.food && !item.food.isDelete"
        v-for="(item, index) in items"
        :key="index"
        @click="onClick(item)">
        <span class="list_item_icon" v-html="getLabel(item)" />
        {{item.food.name}}
      </li>
      <li class="list_item list_item-add">
        <router-link :to="`/addName/${targetStorage}`">
          <i class="list_item_icon material-icons">add_circle_outline</i>
          <div>追加</div>
        </router-link>
        <FoodsListAdd
        :targetStorage="targetStorage"
        FoodName="テスト食品"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Action, Getter, Mutation } from 'vuex-class';
import { StorageStock, StorageStockStatus, StorageAddArg } from '@/stores/storage/types';
import { Food } from '@/stores/foodList/types';
import FoodsListAdd from './FoodsListAdd.vue';
import _ from 'lodash';

const storageNameSpace = 'storage';
const foodListNameSpace = 'foodList';

interface List {
  food: Food;
  status: number;
  id: number;
}

@Component({
  name: 'FoodsList',
  components: {
    FoodsListAdd,
  },
})

export default class FoodsList extends Vue {
  // private items: StorageStock[] = [];
  private targetStorage: string = 'fridge';
  // @Prop() private title!: string;
  @Getter('fridge', {namespace: storageNameSpace}) private fridge: any;
  @Getter('freezer', {namespace: storageNameSpace}) private freezer: any;
  @Getter('vege', {namespace: storageNameSpace}) private vege: any;
  @Getter('foodlist', {namespace: foodListNameSpace}) private foodlist: any;
  @Mutation('change', {namespace: storageNameSpace}) private change: any;

  constructor() {
    super();
  }

  private mounted() {
    this.targetStorage = this.$route.params.id || 'fridge';
    // let items: StorageStock[] = [];
    // switch (this.targetStorage) {
    //   case 'fridge':
    //   default:
    //     items = this.fridge;
    //     break;
    //   case 'freezer':
    //     items = this.freezer;
    //     break;
    //   case 'vege':
    //     items = this.vege;
    //     break;
    // }

    // this.items = _.map(items, (item: any): List => {
    //   return {
    //     food: this.foodlist.get(item.id),
    //     status: item.status,
    //     id: item.id,
    //   };
    // });
  }

  get items(): StorageStock[] {
    // this.targetStorage = this.$route.params.id || 'fridge';
    let items: StorageStock[] = [];
    switch (this.targetStorage) {
      case 'fridge':
      default:
        items = this.fridge;
        break;
      case 'freezer':
        items = this.freezer;
        break;
      case 'vege':
        items = this.vege;
        break;
    }

    return _.map(items, (item: any): List => {
      return {
        food: this.foodlist.get(item.id),
        status: item.status,
        id: item.id,
      };
    });
  }

  private getLabel(item: List): string {
    let label: string = '';
    switch (item.status) {
      case StorageStockStatus.NOTHING:
        label = '無';
        break;
      case StorageStockStatus.FEW:
        label = '少';
        break;
      case StorageStockStatus.MANY:
        label = '多';
        break;
    }
    return label;
  }

  private onClick(item: List) {
    item.status ++;
    if (item.status >= StorageStockStatus.EOL) {
      item.status = StorageStockStatus.NOTHING;
    }
    const stock: StorageStock = {
      status: item.status,
      id: item.id,
    };
    const temp: StorageAddArg = {
      target: this.targetStorage,
      stock,
    };
    this.change(temp);
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.dialog {
  border-radius: 12px;
  box-shadow: 0 2px 8px;
  max-height: 50vh;
  overflow: hidden;
  overflow-y: auto;
}
.list {
  text-align: left;
  list-style-type: none;
  &_item {
    position: relative;
    padding-left: 2rem;
    line-height: 1.5rem;
    vertical-align: middle;
    cursor: pointer;
    &_icon {
      position: absolute;
      font-size: 1.2rem;
      left: 0;
      line-height: 1.5rem;
      vertical-align: middle;
    }
  }
}
</style>
