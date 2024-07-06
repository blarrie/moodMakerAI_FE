<script>
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import axios from "axios";
import LoadingComponent from "./LoadingComponent.vue";

export default {
  name: "HomeComponent",
  components: LoadingComponent,
  data() {
    return {
      videoFile: null,
      fileName: ""
    };
  },

  methods: {
    // post form to flask endpoint to upload video
    async uploadVideo() {
      console.log("Submit button key pressed!");

      const formData = new FormData();
      formData.append("file", this.videoFile);

    
      this.fileName = this.videoFile.name;

      const path = "http://127.0.0.1:5000/upload";
      console.log("Calling Flask Endpoint POST");

      axios
        .post(path, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          // loading page?
          console.log("Data submitted: ");
          console.log(res.data);

          this.$router.push({ name: 'Download', params: { filename: this.fileName } });
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<template>
  <v-form class="form" @submit.prevent="uploadVideo">
    <!-- add validation if there is no file uploaded -->
    <v-file-input
      accept="video/*"
      label="Input Video File Here"
      icon="mdi-paperclip"
      v-model="videoFile"
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
