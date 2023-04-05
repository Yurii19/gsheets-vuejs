<template>
  <HeadComponent />
  <router-view></router-view>
  <hr/>
</template>

<script>
import HeadComponent from './components/HeadComponent.vue';

export default {
  name: 'App',
  components: {
    HeadComponent,
  },
  // onMounted() {
  //   console.log(window);
  // },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgba(250, 235, 215, 0.39);
  height: 100%;
  /* margin-top: 60px; */
}
html, body{
  min-height: 100vh;
  /* border-bottom: 1px solid blueviolet; */
}
iframe {
  margin: 0 !important;
}
hr{
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(172, 28, 28);
}
</style>
