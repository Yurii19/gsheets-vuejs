<template lang="html">
    <h5>Some usefull links here</h5>
    <span class="badge badge-pill badge-light">
  <a
    href="https://console.cloud.google.com/apis/credentials?project=shap-v&supportedpurview=project&pli=1"
    class="link-primary"
    target="blank"
    >Google cloud</a
  >
  </span>
    <span class="badge badge-pill badge-light">
  <a
    href="https://developers.google.com/sheets/api/quickstart/js"
    class="link-primary"
    target="blank"
    @click="preloader"
    >Sheets API</a
  >
  </span>
  <a href="#" class="badge badge-primary">Primary</a>
  
</template>

<script setup>

function preloader(){
    console.log('preloader')
}
</script>

<style scoped></style>
