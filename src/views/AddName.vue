<template>
  <div class="addName">
    Please input food name<br/>
    <input v-model="food" type="text"><br/>
    <button v-on:click="addFood()">Add</button>
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
        alert(`Food name is ${ this.food }.`);
        if (event) {
          alert(event.target.tagName);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
* {
  font-family: Roboto;
}
div {
  color: #616161;
  font-size: 14px;
  font-weight: bold;
  bottom: 12px;
}
input {
  margin-top: 10px;
  padding: 0 0 4px;
  border: none;
  background: none;
  border-bottom: 1px solid rgba(0,0,0,.12);
}
input:focus {
    outline: 0;
    border-color: #A5D6A7;
}
button {
  outline: 0;
  margin-top: 10px;
  background-color: #A5D6A7;
  color: #000000;
  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
}
button:active{
  background-color: #A5D6A7;
}
</style>

