<template lang="html">
  <div class="card mx-auto mt-5" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">Please log in to continue</h5>
      <GoogleLogin v-if="!isLogined" :callback="onLogin" />
      <!-- <button
        type="button"
        class="btn btn-outline-secondary"
        @click="loginHandle"
      >
        Login
      </button> -->
      <button @click="getSheet">Get Sheet</button>
      <div></div>

      <router-link to="/" class="" v-bind:class="{ classDisabled: !isLogined }"
        >Continue</router-link
      >
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { decodeCredential, googleTokenLogin } from 'vue3-google-login';
import { CLIENT_ID, SCOPES } from '@/variables/constants';
import { API_KEY } from '@/variables/constants';
import { googleSdkLoaded } from 'vue3-google-login';
import { useAppStore } from '@/stores/store';

const DISCOVERY_DOC =
  'https://sheets.googleapis.com/$discovery/rest?version=v4';

let tokenClient;
let gapiInited = false;
let gisInited = false;
const store = useAppStore();

let isLogined = ref(store.getUserEmail);

const gapi = window.gapi;


onMounted(() => {
  gapiLoaded();
  // gisLoaded();
});

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

// function loginHandle() {
//   tokenClient.callback = async (resp) => {
//     if (resp.error !== undefined) {
//       throw resp;
//     }
//     console.log('loginHandle >>> ', resp);
//   };

//   if (gapi.client.getToken() === null) {
//     // Prompt the user to select a Google Account and ask for consent to share their data
//     // when establishing a new session.
//     tokenClient.requestAccessToken({ prompt: 'consent' });
//   } else {
//     // Skip display of account chooser and consent dialog for an existing session.
//     tokenClient.requestAccessToken({ prompt: '' });
//   }
// }

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

const onLogin = (response) => {
  store.setLoadingStatus(true)
  const decodedData = decodeCredential(response.credential);
  console.log(decodedData);
  const { email, name } = decodedData;
  
  // window.localStorage.setItem('theUser', JSON.stringify({ name, email }));
  googleTokenLogin().then((response) => {
    store.setUserEmail(email);
    store.setLoadingStatus(false)

    console.log('Handle the response', response);
  });
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
