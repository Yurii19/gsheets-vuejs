<template lang="html">
  <section class="form-container">
    <form v-on:submit.prevent="submitForm()">
      <div
        class="form-group d-flex flex-column flex-md-row justify-content-between align-items-center"
      >
        <label for="name_iid" class="m-0">Name</label>
        <input
          type="text"
          :value="nameInput"
          @input="updateNameInput($event)"
          class="form-control w-75"
          id="name_iid"
          aria-describedby="emailHelp"
        />
        <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
      </div>
      <div
        class="form-group d-flex flex-column flex-md-row justify-content-between align-items-center"
      >
        <label for="device_iid" class="m-0">Device</label>
        <input
          type="text"
          :value="deviceInput"
          class="form-control w-75"
          id="device_iid"
          @input="updateDeviceInput($event)"
        />
      </div>
      <div
        class="form-group d-flex flex-column flex-md-row justify-content-between align-items-center"
      >
        <label for="ref_iid" class="m-0">Reference</label>
        <input
          type="text"
          :value="refInput"
          class="form-control w-75"
          id="ref_iid"
          @input="updateRefInput($event)"
        />
      </div>
      <button
        type="submit"
        class="btn btn-sm btn-primary mr-2"
      >
        Submit
      </button>
      <button
        type="button"
        class="btn btn-sm btn-danger"
        @click.prevent="clearInputs()"
      >
        Clear
      </button>
    </form>
  </section>
</template>

<script>
import { updateList } from '@/services/sheetsRest';
import { SHEET_DB_RAND } from '@/variables/constants';
export default {
  data() {
    return {
      viewTitle: 'Form page',
      nameInput: '',
      deviceInput: '',
      refInput: '',
    };
  },
  onMounted() {
    console.log(window.localStorage.theUser);
    console.log('window.localStorage.theUser');
  },

  methods: {
    submitForm() {
      updateList(SHEET_DB_RAND + ':append').then((r) => console.log(r));
      // console.log('this.nameInput');
      // console.log('this.deviceInput');
    },

    clearInputs() {
      this.nameInput = '';
      this.deviceInput = '';
      this.refInput = '';
    },

    updateNameInput(e) {
      const input = e.target;
      this.nameInput = input.value;
    },

    updateDeviceInput(e) {
      const input = e.target;
      this.deviceInput = input.value;
    },

    updateRefInput(e) {
      const input = e.target;
      this.refInput = input.value;
    },
  },
};
</script>

<style scoped>
.form-container {
  width: 80%;
  margin: 0 auto;
}
</style>
