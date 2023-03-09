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

      <GoogleLogin :callback="loginCallback" />
    </div>
  </div>
</template>

<script setup>
//import { CLIENT_ID } from '@/variables/constants';
import { CLIENT_ID, SCOPES } from '@/variables/constants';
import { onMounted } from 'vue';
import { googleLogout } from 'vue3-google-login';
import { decodeCredential } from 'vue3-google-login';
import { googleSdkLoaded } from 'vue3-google-login';

let gCredential = {};
let uCredentials = {};
//let googleClient = {};

onMounted(function () {
  console.log('onMounted');
});

const loginCallback = (resp) => {
  setCredential(resp);
  googleSdkLoaded((google) => {
    console.log('gogle: ', google);
   const gapi = google.accounts.oauth2
      .initCodeClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: (response) => {
          //googleClient = response;
          console.log('Handle the response', response);
        },
      })
      .requestCode();
      console.log('gapi: ',gapi)
  });
};

const gLogOut = () => {
  //const res = getCredentials()
  console.log('this: ' );
  console.log('gCredential', gCredential);
  console.log('decodedCredentials', uCredentials);
  googleLogout();
};

const setCredential = function (response) {
  gCredential = response;
  uCredentials = decodeCredential(response.credential);
};
// const loginCallback1 = (response) => {
//   gCredential = response;
//   //decodedCredentials = decodeCredential(response.credential);
//   loginCallback()
//   console.log('loginCallback1: ', response);
// };
</script>

<style scoped></style>
