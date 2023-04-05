import { createApp, ref } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import FormPage from './views/FormPage.vue';
import LoginPage from './views/LoginPage.vue';
import InfoPage from './views/InfoPage.vue';
import vue3GoogleLogin from 'vue3-google-login';
import { CLIENT_ID } from './variables/constants';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { useAppStore } from '@/stores/store';
// import { ref } from 'vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/form',
      name: 'Form',
      component: FormPage,
    },
    {
      path: '/info',
      name: 'Info',
      component: InfoPage,
    },
    { path: '/login', name: 'Login', component: LoginPage },
  ],
});

// router.beforeEach((to) => {
//   let userEmail = ref(useAppStore().getUserCredentials);
//   if (userEmail.value.email === '' && to.path !== '/login') {
//     return '/login';
//   }
// });

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

app.use(vue3GoogleLogin, {
  clientId: CLIENT_ID,
});

app.use(router);

app.use(VueAxios, axios);

app.use(pinia);

app.mount('#app');
