<template>
  <div class="addName">
    食材名を入力してください<br/>
    <input v-model="temp" type="text">
    <button v-on:click="addFood()">追加</button>
    {{food}}
  </div>
</template>

<script>
  export default {
    props: [
      'def_food'
    ],
    data(){
      return {
        food: this.def_food,
        temp: ""
      }
    },
    methods: {
      addFood() {
        this.food = this.temp
      }
    }
  }
</script>
