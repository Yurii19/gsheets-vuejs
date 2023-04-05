<template lang="html">
  <div class="card mx-auto mt-5" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">Please log in to continue</h5>
      <button
        type="button"
        class="btn btn-outline-success my-3"
        @click="loginHandle"
      >
        Login
      </button>
      <router-link
        to="/"
        class="d-block"
        v-bind:class="{ classDisabled: !isLogined }"
        >Continue</router-link
      >
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { CLIENT_ID, SCOPES } from '@/variables/constants';
import { API_KEY } from '@/variables/constants';
import { useAppStore } from '@/stores/store';
// import { getCredentials } from '@/services/localServices';

const DISCOVERY_DOC =
  'https://sheets.googleapis.com/$discovery/rest?version=v4';

let tokenClient;
let isLogined = computed(()=> {
  //console.log(store.getUserCredentials.value.email)
  return store.getUserCredentials.value.email !== 'unlogined'
});
const store = useAppStore();

//let currentUserEmail = ref(store.getUserEmail);

const gapi = window.gapi;

onMounted(() => {
 
  setTimeout(() => {
    gapiLoaded();
    gisLoaded();
  }, 1000);
});



function loginHandle() {
  //store.setLoadingStatus(true)
  tokenClient.callback = async (resp) => {
    if (resp.error !== undefined) {
      throw resp;
    }
    setUserData();
  };
  if (gapi.client.getToken() === null) {
    // Prompt the user to select a Google Account and ask for consent to share their data
    // when establishing a new session.
    tokenClient.requestAccessToken({ prompt: 'consent' });
  } else {
    // Skip display of account chooser and consent dialog for an existing session.
    tokenClient.requestAccessToken({ prompt: '' });
  }  
  //store.setLoadingStatus(false)
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
  console.info('gisLoaded ! ');
}

function gapiLoaded() {
  gapi.load('client', initializeGapiClient);
  console.info('gapiLoaded ! ');
}

async function initializeGapiClient() {
  await gapi.client.init({
    apiKey: API_KEY,
    discoveryDocs: [DISCOVERY_DOC],
  });
}

function setUserData() {
  const theToken = window.gapi.client.getToken();
  window.gapi.client.request({
    path: 'https://www.googleapis.com/userinfo/v2/me',
    headers: {
      Authorization: 'Bearer ' + theToken.access_token,
    },
  }).then((credentials) => {
    const { email, given_name, picture } = credentials.result;
    store.setUserCredentials({ email, given_name, picture });
  });
}

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
