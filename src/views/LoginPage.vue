<template lang="html">
  <div class="card mx-auto mt-5" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">Please log in to continue</h5>
      <GoogleLogin :callback="onLogin" />
      <button @click="loginHandle">Login</button>
      <button @click="getSheet">Get Sheet</button>
      <div></div>

      <router-link to="/" class="" v-bind:class="{ classDisabled: !isLogined }"
        >Continue</router-link
      >
    </div>
  </div>
</template>

<script setup>
import { decodeCredential } from 'vue3-google-login';
import { ref } from 'vue';

import { googleSdkLoaded } from 'vue3-google-login';
import { CLIENT_ID, SCOPES } from '@/variables/constants';
import { API_KEY } from '@/variables/constants';

const DISCOVERY_DOC =
  'https://sheets.googleapis.com/$discovery/rest?version=v4';

let tokenClient;
let gapiInited = false;
let gisInited = false;

let isLogined = ref(false);

const gapi = window.gapi;

function getSheet() {
  // console.log('getSheet')
  const gClient = window.gapi.client;
  console.log('getSheet', gClient);

  gClient.sheets.spreadsheets
    .create({
      properties: {
        title: 'title',
      },
    })
    .then((resp) => console.log(' ->', resp));
}

function loginHandle() {
  gapi.load('client', initializeGapiClient);
  gisLoaded();

  console.log('gapiInited', gapiInited);
  console.log('gisInited', gisInited);
  console.log('window', window);
}

/**
 * Callback after Google Identity Services are loaded.
 */
function gisLoaded() {
  tokenClient = window.google.accounts.oauth2.initTokenClient({
    client_id: CLIENT_ID,
    scope: SCOPES,
    callback: '', // defined later
  });
  gisInited = true;
  // maybeEnableButtons();
}

function gapiLoaded() {
  gapi.load('client', initializeGapiClient);
}

async function initializeGapiClient() {
  await gapi.client.init({
    apiKey: API_KEY,
    discoveryDocs: [DISCOVERY_DOC],
  });
  gapiInited = true;
  // maybeEnableButtons();
}

// function maybeEnableButtons() {
//   if (gapiInited && gisInited) {
//     document.getElementById('authorize_button').style.visibility = 'visible';
//   }
// }

const onLogin = (response) => {
  // const decodedData = decodeCredential(response.credential);
  // const { email, name } = decodedData;
  // window.localStorage.setItem('theUser', JSON.stringify({ name, email }));
  // googleSdkLoaded((gSdk) => {
  //   console.log('googleSdkLoaded: ', gSdk);
  //   gSdk.accounts.oauth2
  //     .initCodeClient({
  //       client_id: CLIENT_ID,
  //       scope: SCOPES,
  //       callback: () => {},
  //     })
  //     .requestCode();
  // });
  // isLogined.value = true;
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
.classDisabled {
  opacity: 0.3;
}
</style>
