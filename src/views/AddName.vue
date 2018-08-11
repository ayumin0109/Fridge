<template>
  <div class="addName">
    食材名を入力してください<br/>
    <input v-model="food" type="text">
    <button v-on:click="addFood()">追加</button>
  </div>
</template>

<script>
  export default {
    props: [
      'def_food'
    ],
    data() {
      return {
        food: this.def_food,
      }
    },
    methods: {
      addFood (event) {
        alert('食材は「' + this.food + '」ですね');
        if (event) {
          alert(event.target.tagName);
        }
      }
    }
  }
</script>
