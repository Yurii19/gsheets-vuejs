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
      <span class="text-white">{{ currentUserEmail }}</span>
      <button type="button" class="btn btn-sm btn-info mr-2" @click="gLogOut">
        Log out
      </button>

      <!-- <GoogleLogin :callback="onLogin" /> -->
    </div>
  </div>
</template>

<script setup>
// import // API_KEY,
// // CLIENT_ID,
// // SCOPES,
// // SHEET,
// //SHEET_DB_RAND,
// '@/variables/constants';
import { onMounted } from 'vue';
import { ref } from 'vue';
//import { googleSdkLoaded } from 'vue3-google-login';
//import { getList } from '@/services/sheetsRest';
//import { useRouter } from 'vue-router';

onMounted(function () {
  window.gapi.load('client');
  const user = window.localStorage.getItem('theUser');
  const email = JSON.parse(user).email;
  currentUserEmail.value = email;
});

let currentUserEmail = ref('234');

//const router = useRouter();

const gLogOut = () => {
  location.reload();
  window.localStorage.removeItem('theUser');
};
</script>

<style scoped></style>
