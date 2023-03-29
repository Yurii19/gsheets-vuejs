<template>
  <div class="head-container bg-info d-flex justify-content-between align-items-center">
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
    <div class="spinner-border text-light" role="status">
      <!-- <span class="sr-only">Loading...</span> -->
    </div>
    <!-- <div class="spinner-grow text-light" role="status">
      <span class="sr-only">Loading...</span>
    </div> -->
    <div class="d-flex">
      <button type="button" class="btn btn-sm btn-info">
        <router-link to="/login" class="text-white"> Log in</router-link>
      </button>
    </div>
    <div class="d-flex align-items-center" color="#ffdd59">
      <span class="text-white">{{ currentUserEmail }}</span>
      <span class="mx-2" color="red"><MailIcon /></span>
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
import MailIcon from '@/icons/MailIcon.vue';
import { useAppStore } from '@/stores/store';
//import { googleSdkLoaded } from 'vue3-google-login';
//import { getList } from '@/services/sheetsRest';
//import { useRouter } from 'vue-router';

onMounted(function () {
  //   window.gapi.load('client');
  //   const user = window.localStorage.getItem('theUser');
  //   if (user) {
  //     const email = JSON.parse(user).email;
  //     currentUserEmail.value = email;
  //   }
});

const store = useAppStore();
let currentUserEmail = ref(store.getUserEmail);

//const router = useRouter();

const gLogOut = () => {
  store.setUserEmail('mail @@@');
  // location.reload();
  // window.localStorage.removeItem('theUser');
};
</script>

<style scoped></style>
