<template>
  <div
    class="head-container bg-info d-flex justify-content-between align-items-center"
  >
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
    <div v-if="store.getIsLoading" class="spinner-border text-light" role="status">
    </div>
    <div class="d-flex align-items-center" color="#ffdd59">
      <span class="text-white">{{ store.getUserCredentials.value.email }}</span>
      <img
        class="picture mx-3"
        :src="store.getUserCredentials.value.picture"
        width="30"
        alt=""
      />
      <button type="button" class="btn btn-sm btn-info mr-2" @click="gLogOut">
        Log out
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { ref } from 'vue';
import { useAppStore } from '@/stores/store';
//import { useGapi } from 'vue3-google-login' googleLogout
// import { googleLogout } from 'vue3-google-login';
// import { GoogleLogin } from 'vue3-google-login';
// import { CLIENT_ID } from '@/variables/constants';

onMounted(function () {
});

//const { gapi } = useGapi()

const store = useAppStore();
//
//const router = useRouter();

// const switchStatus =()=>{
//   const currentStatus = store.getIsLoading;
//   store.setLoadingStatus(!currentStatus)
// }

const gLogOut = () => {
  // store.setUserEmail('');
  // const token = window.gapi.client.getToken();
  // window.google.accounts.oauth2.revoke(token.access_token);
  // window.gapi.client.setToken('');
  // console.info('Token has revoked ');
  console.log(store.getUserCredentials.value);
  const theToken = window.gapi.client.getToken();
  console.log('theToken > ', theToken);
};
</script>

<style scoped>

.router-link-active, .router-link-exact-active {
  font-weight: 600;
}
.picture {
  border: 1px solid white;
  border-radius: 50%;
}
</style>
