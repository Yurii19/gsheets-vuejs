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
  DISCOVERY_DOC,
  SCOPES,
  SHEET,
} from '@/variables/constants';
import { onMounted } from 'vue';
//import { googleLogout } from 'vue3-google-login';
//import { decodeCredential } from 'vue3-google-login';
import { googleSdkLoaded } from 'vue3-google-login';

// let gCredential = {};
// let uCredentials = {};
let googleClient = {};

onMounted(function () {
  window.gapi.load('client', {
    initializeGapiClient,
  });
  // setTimeout(() => {
  //    console.log('setTimeout->window.gapi: ', window.gapi);
  //  // initializeGapiClient()
  // }, 2000);

  console.log('onMounted:  window.gapi.client: ', window.gapi);
});

const initializeGapiClient = async function () {
  console.log('initializeGapiClient called.', window.gapi.client);
  await window.gapi.client
    .init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: [DISCOVERY_DOC],
      scope: SCOPES,
    })
    .then((d) => console.log('initializeGapiClient: ', d));
  // gapiInited = true;
  // maybeEnableButtons();
};

const onLogin = (gUser) => {
  const authResponse = gUser;
  console.log('onSuccess authResponse: -> ', authResponse);
  googleSdkLoaded((gSdk) => {
    console.log('googleSdkLoaded: ', gSdk);
    gSdk.accounts.oauth2
      .initCodeClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: (response) => {
          googleClient = response;
          console.log('Handle the response', googleClient);
        },
      })
      .requestCode();
  });
};

const gLogOut = () => {
  //console.log('googleClient => ', googleClient )
   window.gapi.client.request({
    path: SHEET,
    method: 'GET',
    params: { key: API_KEY}
  }).then((r)=> console.log('gLogOut >>> ',r));
  // console.log('gLogOut:  window.gapi: ', window.gapi);
  // console.log('gLogOut:  window.gapi.client: ', window.gapi.client);
  //console.log('gLogOut:  window.gapi.client.sheets: ', gClient);

  // googleLogout();
};

// const loginCallback = (gUser) => {
//   //setCredential(resp);
//   const authResponse = gUser;
//   console.log('authResponse: ', authResponse)

//   googleSdkLoaded((google) => {
//     //console.log('gogle: ', google);
//     google.accounts.oauth2
//       .initCodeClient({
//         client_id: CLIENT_ID,
//         scope: SCOPES,
//         callback: (response) => {
//           //googleClient = response;
//           googleClient = response;
//           console.log(googleClient)
//           console.log('Handle the response', response);
//         },
//       })
//       .requestCode();
//   });
// };

// const setCredential = function (response) {
//   gCredential = response;
//   uCredentials = decodeCredential(response.credential);
// };
// const loginCallback1 = (response) => {
//   gCredential = response;
//   //decodedCredentials = decodeCredential(response.credential);
//   loginCallback()
//   console.log('loginCallback1: ', response);
// };
</script>

<style scoped></style>
