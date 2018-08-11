<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <Example></Example>
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
})
export default class Home extends Vue {}
</script>
