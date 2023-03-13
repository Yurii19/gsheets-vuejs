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
      <button type="button" class="btn btn-sm btn-info">
        <router-link to="/login" class="text-white"> Log in</router-link>
      </button>
    </div>
    <div class="d-flex">
      <button type="button" class="btn btn-sm btn-info mr-2" @click="gLogOut">
        Log out
      </button>

      <!-- <GoogleLogin :callback="onLogin" /> -->
    </div>
  </div>
</template>

<script setup>
import {
  // API_KEY,
  // CLIENT_ID,
  // SCOPES,
  // SHEET,
  //SHEET_DB_RAND,
} from '@/variables/constants';
import { onMounted } from 'vue';
//import { googleSdkLoaded } from 'vue3-google-login';
//import { getList } from '@/services/sheetsRest';
//import { useRouter } from 'vue-router';

onMounted(function () {
  window.gapi.load('client');
});

//const router = useRouter();

const gLogOut = () => {
  location.reload();
  //router.push('/login');
  window.localStorage.removeItem('theUser');
 // getList(SHEET_DB_RAND).then((r) => console.log('getList >>> ', r));
};

// window.gapi.client
//   .request({
//     path: SHEET,
//     method: 'GET',
//     params: { key: API_KEY },
//   })
//   .then((r) => console.log('gLogOut >>> ', r));

// const onLogin = () => {
//   googleSdkLoaded((gSdk) => {
//     gSdk.accounts.oauth2
//       .initCodeClient({
//         client_id: CLIENT_ID,
//         scope: SCOPES,
//         callback: () => {
//         },
//       })
//       .requestCode();
//    });
// };
</script>

<style scoped></style>
