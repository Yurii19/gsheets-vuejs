<template lang="html">
  <div class="card mx-auto mt-5" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">Please log in to continue</h5>
      <GoogleLogin :callback="onLogin" />
    </div>
  </div>
</template>

<script setup>
import { decodeCredential } from 'vue3-google-login';

const onLogin = (response) => {
  const userData = decodeCredential(response.credential);
  const email = userData.email;
  const name = userData.name;
  window.localStorage.setItem('theUser', JSON.stringify({ name, email }));
  location.reload();
};

</script>

<style scoped>
/* .home {
  } */
</style>
