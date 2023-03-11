<template>
  <LoginPage v-if="!isLogined" />
  <HeadComponent v-if="isLogined" />
  <router-view v-if="isLogined"></router-view>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
import HeadComponent from './components/HeadComponent.vue';
import LoginPage from './views/LoginPage.vue';

export default {
  name: 'App',
  components: {
    HeadComponent,
    LoginPage,
  },
  computed: {
    isLogined() {
      const lStorage = window.localStorage.theUser;
      if (lStorage) {
        return true;
      } else {
        return false;
      }
    },
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
