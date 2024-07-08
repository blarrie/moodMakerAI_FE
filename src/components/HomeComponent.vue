<script>
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import axios from "axios";
import LoadingComponent from "./LoadingComponent.vue";

export default {
  name: "HomeComponent",
  components: {
    LoadingComponent,
  },
  data() {
    return {
      videoFile: null,
      fileName: "",
      loading: false,
      res: []
    };
  },

  methods: {
    // post form to flask endpoint to upload video

    async uploadVideo() {
      // const apiBaseUrl = "https://moodmaker-flask-backend-944549f9ef80.herokuapp.com"
      const apiBaseUrl = import.meta.env.VITE_APP_API_BASE_URL;
      
      console.log("BaseURL: ",apiBaseUrl);
      console.log("Submit button key pressed!");

      const formData = new FormData();
      formData.append("file", this.videoFile);

      this.fileName = this.videoFile.name;
      // post form
      let uploadPath = `${apiBaseUrl}/upload`;
      console.log("uploadPath: ",uploadPath)
      // get music + overlay
      let overlayPath = `${apiBaseUrl}/overlay/${this.fileName}`;

      const uploadReq = axios.post(uploadPath, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const overlayReq = axios.get(overlayPath);

      console.log("Calling Flask Endpoint POST");
      this.loading = true;

      axios
        .all([uploadReq, overlayReq])
        .then(
          axios.spread((...responses) => {
            // Response from posts
            const uploadRes = responses[0];
            const overlayRes = responses[1];
            this.res[0] = uploadRes.data;
            this.res[1] = overlayRes.data;

            if (responses) {
              this.$router.push({
                name: "Download",
                params: { filename: this.fileName },
              });
            }
            console.log(this.res);
          })
        )
        .catch((errors) => {
          console.error(errors);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<template>
  <div>
    <template v-if="loading">
      <LoadingComponent />
    </template>

    <template v-else>
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
  </div>
</template>

<style>
.form {
  width: 500px;
  text-align: center;
}
</style>
