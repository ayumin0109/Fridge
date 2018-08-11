<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    {{name1}}, {{name2}}, {{name3}}
    <Example v-bind:def_name="name1"></Example>
    <Example v-bind:def_name="name2"></Example>
    <Example v-bind:def_name="name3"></Example>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Example from '@/components/Example.vue';

@Component({
  components: {
    HelloWorld: HelloWorld,
    Example: Example,
  },
  data() {
    return {
      name1: "和田",
      name2: "山田",
      name3: "田中",
    }
  }
})
export default class Home extends Vue {}
</script>
