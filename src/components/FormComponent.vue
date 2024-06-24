<script>
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader

export default {
  methods: {
    submitForm() {
      console.log("Enter key pressed!");
    },
  },
};
</script>

<template>
  <v-form @submit.prevent="submitForm">
    <v-file-input
      accept="video/*"
      label="Input Video File Here"
      class="input"
      icon="mdi-paperclip"
    >
    </v-file-input>

    <v-btn
      rounded="sm"
      variant="outlined"
      color="red"
      append-icon="mdi-music-box-multiple-outline"
      type="submit"
    >
      Find Music!
    </v-btn>

  </v-form>


</template>

<style>
.input {
  width: 500px;
}
p {
  color: white;
  font-size: larger;
}
</style>
