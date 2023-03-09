import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import FormPage from './views/FormPage.vue';
import vue3GoogleLogin from 'vue3-google-login';
import { CLIENT_ID } from './variables/constants';
import VueCookies from 'vue3-cookies';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/form', component: FormPage },
  ],
});
const app = createApp(App);

app.use(vue3GoogleLogin, {
  clientId: CLIENT_ID,
});

app.use(router);
app.use(VueCookies);

app.mount('#app');
