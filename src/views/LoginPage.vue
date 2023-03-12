<template lang="html">
  <div class="card mx-auto mt-5" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">Please log in to continue</h5>
      <GoogleLogin :callback="onLogin" />
      <button
        type="button"
        class="btn btn-success"
        v-bind:class="{'classDisabled': !isLogined }"
      >
        <router-link to="/" class="text-white">Continue</router-link>
      </button>
    </div>
  </div>
</template>

<script setup>
import { decodeCredential } from 'vue3-google-login';
import { defineEmits } from 'vue';
import { ref } from 'vue';

const emit = defineEmits(['onLogined']);

let isLogined = ref(window.localStorage.theUser);

const onLogin = (response) => {
  const userData = decodeCredential(response.credential);
  const email = userData.email;
  const name = userData.name;
  window.localStorage.setItem('theUser', JSON.stringify({ name, email }));
  emit('onLogined');
  isLogined.value = true;
};

</script>

<style scoped>
.classDisabled {
 opacity: .3;
}
</style>
