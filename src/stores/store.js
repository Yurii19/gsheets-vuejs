import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useAppStore = defineStore(
  'appstore',
  () => {
    const isLoading = ref(false);
    const userEmail = ref('');
    const userAvatarUrl = ref(
      'https://cdn-icons-png.flaticon.com/512/1077/1077114.png'
    );

    const getIsLoading = computed(() => isLoading);
    const getUserEmail = computed(() => userEmail);
    const getAvatarUrl = computed(() => userAvatarUrl);

    function setLoadingStatus(value) {
      isLoading.value = value;
    }
    function setUserEmail(value) {
      userEmail.value = value;
    }
    function setAvatarUrl(value) {
      if (value) {
        userAvatarUrl.value = value;
      } else {
        userAvatarUrl.value =
          'https://cdn-icons-png.flaticon.com/512/1077/1077114.png';
      }
    }

    return {
      isLoading,
      userEmail,
      userAvatarUrl,
      getIsLoading,
      getUserEmail,
      getAvatarUrl,
      setUserEmail,
      setLoadingStatus,
      setAvatarUrl,
    };
  },
  {
    persist: true,
  }
);
