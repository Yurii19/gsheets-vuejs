<template lang="html">
  <section class="form-container">
    <form v-on:submit.prevent="submitForm()">
      <div class="form-group">
        <label for="exampleInputEmail1">Name</label>
        <input
          type="text"
          :value="nameInput"
          @input="updateNameInput($event)"
          class="form-control"
          aria-describedby="emailHelp"
        />
        <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Device</label>
        <input
          type="text"
          :value="deviceInput"
          class="form-control"
          @input="updateDeviceInput($event)"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Reference</label>
        <input
          type="text"
          :value="refInput"
          class="form-control"
          @input="updateRefInput($event)"
        />
      </div>
      <button type="submit" class="btn btn-primary mr-2">Submit</button>
      <button
        type="button"
        class="btn btn-warning"
        @click.prevent="clearInputs()"
      >
        Clear
      </button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      viewTitle: 'Form page',
      nameInput: '',
      deviceInput: '',
      refInput: '',
    };
  },

  methods: {
    submitForm() {
      //e.preventDefault();
      console.log(this.nameInput);
      console.log(this.deviceInput);
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
