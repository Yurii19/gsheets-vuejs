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
import { CLIENT_ID } from '@/variables/constants';
import { googleLogout } from 'vue3-google-login';
//import { decodeCredential } from 'vue3-google-login';
import { googleSdkLoaded } from "vue3-google-login"

let gCredential = {};
let decodedCredentials = {};

const loginCallback = () => {
  googleSdkLoaded((google) => {
    console.log('gogle: ',google)
    google.accounts.oauth2.initCodeClient({
      client_id: CLIENT_ID,
      scope: 'email profile openid',
      callback: (response) => {
        console.log("Handle the response", response)
      }
    }).requestCode()
  })
}

const gLogOut = function () {
  //const res = getCredentials()
  console.log('gCredential', gCredential);
  console.log('decodedCredentials', decodedCredentials);
  googleLogout();
};
// const loginCallback = (response) => {
//   gCredential = response;
//   decodedCredentials = decodeCredential(response.credential);
//   console.log('Handle the response', response);
// };
</script>

<style scoped></style>
