<script>
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader

export default {
  name: 'HomeComponent',
  methods: {
    submitForm() {
      console.log("Submit button key pressed!");
      this.$router.push("./download");
    },
  },
};
</script>

<template>
  <v-form @submit.prevent="submitForm" class="form">
    <v-file-input
      accept="video/*"
      label="Input Video File Here"
      icon="mdi-paperclip"
    >
    </v-file-input>
    
    <v-btn
      rounded="sm"
      variant="outlined"
      color="red"
      append-icon="mdi-music-box-multiple-outline"
      type="submit"
      class="button"
    >
      Find Music!
    </v-btn>

  </v-form>


</template>

<style>
.form {
  width: 500px;
  text-align: center;
}

</style>
