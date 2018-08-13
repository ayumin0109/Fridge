<template>
  <div class="l-dialog">
    <FoodsList title="hogehoge"/>
  </div>
</template>

<style scoped lang="scss">
.l-dialog {
  position: fixed;
  bottom: 0;
  width: 80vw;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 20px;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FoodsList from '@/components/FoodsList.vue';
import { StorageState } from '../stores/storage/types';
import { State, Action, Getter } from 'vuex-class';

@Component({
  name: 'FoodList',
  components: {
    FoodsList,
  },
})

export default class Main extends Vue {
}
</script>
