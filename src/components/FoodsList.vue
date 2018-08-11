<template>
  <div class="dialog">
    <h2 v-text="title"/>
    <ul class="list">
      <li class="list_item">
        ほげほげ
      </li>
      <li class="list_item list_item-add">
        <router-link to="/addName">
          <i class="list_item_icon material-icons">add_circle_outline</i>
          <div>追加</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'FoodsList',
})

export default class FoodsList extends Vue {
  @Prop() private title!: string;

  constructor() {
    super();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.dialog {
  width: 80vw;
  border-radius: 12px;
  box-shadow: 0 2px 8px;
}
.list {
  text-align: left;
  list-style-type: none;
  &_item {
    position: relative;
    padding-left: 2rem;
    line-height: 1.5rem;
    vertical-align: middle;
    &-add {
      &::before {
        content: "";
      }
    }
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
