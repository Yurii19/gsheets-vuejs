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
    <div v-if="isLoading" class="spinner-border text-light" role="status">
      <!-- <span class="sr-only">Loading...</span> -->
    </div>
    <div class="d-flex">
      <button type="button" class="btn btn-sm btn-info">
        <router-link to="/login" class="text-white"> Log in</router-link>
      </button>
    </div>
    <div class="d-flex align-items-center" color="#ffdd59">
      <span class="text-white">{{
        currentUserEmail ? currentUserEmail : 'log in please'
      }}</span>
      <!-- <span class="mx-2" color="red"><MailIcon /></span> -->
      <img
        width="40"
        height="40"
        :src="avatarUrl"
        class="img-thumbnail mx-2 p-0"
        alt="..."
        style="border-radius: 50%"
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

onMounted(function () {});

const store = useAppStore();
let currentUserEmail = ref(store.getUserEmail);
let isLoading = ref(store.getIsLoading);
let avatarUrl = ref(store.getAvatarUrl);

const gLogOut = () => {
  store.setUserEmail('');
  store.setAvatarUrl('');
};
</script>

<style scoped></style>
