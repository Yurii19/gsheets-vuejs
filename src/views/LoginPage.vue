<template lang="html">
  <div class="card mx-auto mt-5" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">Please log in to continue</h5>
      <GoogleLogin :callback="onLogin" />
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

let isLogined = ref(false);

const onLogin = (response) => {
  const decodedData = decodeCredential(response.credential);
  const { email, name } = decodedData;
  window.localStorage.setItem('theUser', JSON.stringify({ name, email }));

  googleSdkLoaded((gSdk) => {
    console.log('googleSdkLoaded: ', gSdk);
    gSdk.accounts.oauth2
      .initCodeClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: () => {},
      })
      .requestCode();
  });
  isLogined.value = true;
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
