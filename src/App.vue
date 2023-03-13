<template>
  <HeadComponent />
  <router-view></router-view>
</template>

<script>
import HeadComponent from './components/HeadComponent.vue';

export default {
  name: 'App',
  components: {
    HeadComponent,
  },
  onMounted() {
    console.log(window);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
iframe {
  margin: 0 !important;
}
</style>
