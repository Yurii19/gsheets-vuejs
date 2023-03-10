<template>
  <div class="head-container bg-info d-flex justify-content-between">
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link active" href="/"
          ><router-link to="/" class="text-white">Home</router-link></a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"
          ><router-link to="/form" class="text-white">Form</router-link></a
        >
      </li>
    </ul>

    <div class="d-flex">
      <button type="button" class="btn btn-sm btn-info" @click="gLogOut">
        Log out
      </button>

      <GoogleLogin :callback="onLogin" />
    </div>
  </div>
</template>

<script setup>
import {
  API_KEY,
  CLIENT_ID,
  SCOPES,
  SHEET,
} from '@/variables/constants';
import { onMounted } from 'vue';
import { googleSdkLoaded } from 'vue3-google-login';


onMounted(function () {
  window.gapi.load('client').then();
});


const onLogin = () => {
  googleSdkLoaded((gSdk) => {
    gSdk.accounts.oauth2
      .initCodeClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: () => {
        },
      })
      .requestCode();
   });
};

const gLogOut = () => {
  window.gapi.client
    .request({
      path: SHEET,
      method: 'GET',
      params: { key: API_KEY },
    })
    .then((r) => console.log('gLogOut >>> ', r));
};
</script>

<style scoped></style>
