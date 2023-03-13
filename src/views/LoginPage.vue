<template lang="html">
  <div class="card mx-auto mt-5" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">Please log in to continue</h5>
      <GoogleLogin :callback="onLogin" />
      <div>
        <!-- <button
          type="button"
          @click="login"
          class="btn btn-outline-secondary mb-4"
        >
          <GoogleIcon /><span class="ml-2">Log in</span>
        </button> -->
      </div>
      <!-- <button
        type="button"
        class="btn btn-outline-success"
        v-bind:class="{ classDisabled: !isLogined }"
        :disabled="!isLogined"
      > -->
      <router-link to="/" class="" v-bind:class="{ classDisabled: !isLogined }"
        >Continue</router-link
      >
      <!-- </button> -->
    </div>
  </div>
</template>

<script setup>
import { decodeCredential } from 'vue3-google-login';
//import { defineEmits } from 'vue';
import { computed, onMounted, reactive, ref } from 'vue';
//import { GoogleLogin } from 'vue3-google-login'
import { googleTokenLogin } from 'vue3-google-login';
import GoogleIcon from '../icons/GoogleIcon.vue';
import { googleSdkLoaded } from 'vue3-google-login';
//import { googleAuthCodeLogin } from 'vue3-google-login';
import {
  // API_KEY,
  CLIENT_ID,
  SCOPES,
  // SHEET,
  //SHEET_DB_RAND,
} from '@/variables/constants';

//  onMounted (()=>{
//   console.log('isLogined -> ', isLogined)
// });
let isLogined = ref(false);

//isLogined = true;

// const login = () => {
//   googleTokenLogin().then((token) => {
//     console.log('token: ', token);
//   });
// };

const onLogin = (response) => {
  const decodedData = decodeCredential(response.credential);
  const { email, name } = decodedData;
  window.localStorage.setItem('theUser', JSON.stringify({ name, email }));

  googleSdkLoaded((gSdk) => {
    console.log('SDK >>> ', gSdk);
    gSdk.accounts.oauth2
      .initCodeClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: () => {},
      })
      .requestCode();
  });

  googleTokenLogin().then((token) => {
    console.log('token ', token);
    window.localStorage.setItem('gToket', token.access_token);
    isLogined.value = true;
  });
};

// const onLogin = (response) => {
//   console.log('onLogin', response);
//   const userData = decodeCredential(response.credential);
//   console.log('decodeCredential', userData);

//   const email = userData.email;
//   const name = userData.name;
//   window.localStorage.setItem('theUser', JSON.stringify({ name, email }));

//   isLogined.value = true;
//   googleSdkLoaded((gSdk) => {
//     gSdk.accounts.oauth2
//       .initCodeClient({
//         client_id: CLIENT_ID,
//         scope: SCOPES,
//         callback: () => {},
//       })
//       .requestCode();
//   });
// };
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
