import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useAppStore = defineStore('appstore', () => {
  const isLoading = ref(false);
  const userEmail = ref('email');

  const getIsLoading = computed(() => isLoading);
  const getUserEmail = computed(() => userEmail);
  // function increment() {
  //   count.value++;
  // }
  function setLoginStatus(value) {isLoading.value = value}

  return { isLoading, userEmail, getIsLoading, getUserEmail };
});
