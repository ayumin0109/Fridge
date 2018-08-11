<template>
  <div>
    <FoodsList title="hogehoge"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FoodsList from '@/components/FoodsList.vue';
import { StorageState } from '../stores/storage/types';
import { State, Action, Getter } from 'vuex-class';

@Component({
  name: 'Main',
  components: {
    FoodsList,
  },
})

export default class Main extends Vue {

  @State('storage') private storage!: StorageState;

  private mounted() {
    console.log(this.storage);
  }
}
</script>
