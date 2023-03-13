<template lang="html">
  <div class="card mx-auto mt-5" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">Please log in to continue</h5>
      <!-- <GoogleLogin @click="login" /> -->
      <button type="button" class="btn btn-outline-secondary">
        <GoogleIcon /><span class="ml-2">Log in</span>
      </button>
      <button
        type="button"
        class="btn btn-success"
        v-bind:class="{ classDisabled: !isLogined }"
      >
        <router-link to="/" class="text-white">Continue</router-link>
      </button>
      <button type="button" @click="login" class="btn btn-primary">
        Get token
      </button>
    </div>
  </div>
</template>

<script setup>
//import { decodeCredential } from 'vue3-google-login';
//import { defineEmits } from 'vue';
import { ref } from 'vue';
//import { GoogleLogin } from 'vue3-google-login'
import { googleTokenLogin } from 'vue3-google-login';
import GoogleIcon from '../icons/GoogleIcon.vue';
// import { googleSdkLoaded } from 'vue3-google-login';
//import { googleAuthCodeLogin } from 'vue3-google-login';
// import {
//   // API_KEY,
//    CLIENT_ID,
//   SCOPES,
//   // SHEET,
//   //SHEET_DB_RAND,
// } from '@/variables/constants';

//const emit = defineEmits(['onLogined']);
const login = (response) => {
  console.log('Login', response);
  googleTokenLogin().then((r) => {
    console.log('onSuccess >>> ', r);
  });
};
// const callback = function () {
//   googleAuthCodeLogin().then((response) => {
//     console.log('Handle the response', response);
//   });
// };

let isLogined = ref(window.localStorage.theUser);

// const onLogin = (response) => {
//   console.log('onLogin', response)
//   const userData = decodeCredential(response.credential);
//   console.log('decodeCredential', userData)

//   const email = userData.email;
//   const name = userData.name;
//   window.localStorage.setItem('theUser', JSON.stringify({ name, email }));

//   isLogined.value = true;
//     googleSdkLoaded((gSdk) => {
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

<style scoped>
.classDisabled {
  opacity: 0.3;
}
</style>
