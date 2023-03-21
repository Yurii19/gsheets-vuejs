<template>
  <h2>Table</h2>
  <!-- <div v-for="row in props.sheet" v-bind:key="row"> {{ row }}</div> -->
  <table class="table">
    <thead>
      <tr>
        <th class="text-left" v-for="cell in sheetHead" v-bind:key="cell">
          {{ cell }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in sheetBody" v-bind:key="row">
        <td class="text-left" v-for="cell in row" v-bind:key="cell">
          {{ cell }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup>
import { defineProps } from 'vue';
import { ref } from 'vue';
import { watch } from 'vue';

const props = defineProps({
  sheet: Array,
});

watch(
  () => props.sheet,
  (selection) => {
    sheetHead.value = selection[0];
    sheetBody.value = selection.filter((el, ind) => ind !== 0);
  }
);

let sheetHead = ref([['a', 'b', 'c', 'd']]);
let sheetBody = ref([]);


</script>
