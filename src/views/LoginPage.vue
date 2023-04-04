<template lang="html">
  <div class="card mx-auto mt-5" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">Please log in to continue</h5>
      <!-- <GoogleLogin :callback="onLogin" /> -->
      <button
        type="button"
        class="btn btn-outline-secondary"
        @click="loginHandle"
      >
        Login
      </button>
      <button @click="getSheet">Get Sheet</button>
      <button
        type="button"
        class="btn btn-outline-secondary"
        @click="getUserData"
      >
        Get user data
      </button>
      <div></div>

      <router-link to="/" class="" v-bind:class="{ classDisabled: !isLogined }"
        >Continue</router-link
      >
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

import { CLIENT_ID, SCOPES } from '@/variables/constants';
import { API_KEY } from '@/variables/constants';
import { useAppStore } from '@/stores/store';

const DISCOVERY_DOC =
  'https://sheets.googleapis.com/$discovery/rest?version=v4';

let tokenClient;
let gapiInited = false;
let gisInited = false;

let isLogined = ref(false);
const store = useAppStore();

let currentUserEmail = ref(store.getUserEmail);

const gapi = window.gapi;

let token = '';

onMounted(() => {
  gapiLoaded();
  gisLoaded();

  // gapi.load('auth2', function () {
  //   gapi.auth2.init({
  //     client_id: CLIENT_ID,
  //   });
  // });
});

function getUserData() {
  const theToken = window.gapi.client.getToken()
  console.log(' this token: > ',theToken.access_token)
  gapi.client.request({
  path: 'https://www.googleapis.com/userinfo/v2/me',
  headers: {
    'Authorization': 'Bearer ' + theToken.access_token
  }
}).then((credentials) =>{
  console.log(credentials)
  const {email, given_name, picture} = credentials.result;
  console.log(email, given_name, picture)
})
}

function loginHandle() {
  tokenClient.callback = async (resp) => {
    if (resp.error !== undefined) {
      throw resp;
    }
    console.log('loginHandle >>> ', resp);
    store.setUserEmail('User@gmail.com');
    token =  resp.access_token
    // const currentUser = resp.currentUser.get();
    // console.log('currentUser >>> ', currentUser);
  };

  if (gapi.client.getToken() === null) {
    // Prompt the user to select a Google Account and ask for consent to share their data
    // when establishing a new session.
    tokenClient.requestAccessToken({ prompt: 'consent' });
  } else {
    // Skip display of account chooser and consent dialog for an existing session.
    tokenClient.requestAccessToken({ prompt: '' });
  }
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
  //initAuth2();
}

async function initializeGapiClient() {
  await gapi.client.init({
    apiKey: API_KEY,
    discoveryDocs: [DISCOVERY_DOC],
  });
  gapiInited = true;
  // maybeEnableButtons();
}

// function initAuth2() {
//   console.log('initAuth2');
//   gapi.load('auth2', function () {
//     gapi.auth2.init({
//       client_id: CLIENT_ID,
//     });
//   });
// }

function getSheet() {
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
