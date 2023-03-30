import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useAppStore = defineStore('appstore', () => {
  const isLoading = ref(false);
  const userEmail = ref('');

  const getIsLoading = computed(() => isLoading);
  const getUserEmail = computed(() => userEmail);
  // function increment() {
  //   count.value++;
  // }
  function setLoadingStatus(value) {
    isLoading.value = value;
  }
  function setUserEmail(value) {
    userEmail.value = value;
  }

  return {
    isLoading,
    userEmail,
    getIsLoading,
    getUserEmail,
    setUserEmail,
    setLoadingStatus,
  };
});
