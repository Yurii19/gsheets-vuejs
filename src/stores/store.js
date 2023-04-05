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
    const userCredentials = ref({
      email: '',
      given_name: '',
      picture: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png',
    });

    const getIsLoading = computed(() => isLoading);
    const getUserEmail = computed(() => userEmail);
    const getAvatarUrl = computed(() => userAvatarUrl);
    const getUserCredentials = computed(() => userCredentials);

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
    function setUserCredentials(value) {
      userCredentials.value = value;
    }

    return {
      userCredentials,
      isLoading,
      userEmail,
      userAvatarUrl,
      getUserCredentials,
      getIsLoading,
      getUserEmail,
      getAvatarUrl,
      setUserCredentials,
      setUserEmail,
      setLoadingStatus,
      setAvatarUrl,
    };
  },
  {
    persist: true,
  }
);
