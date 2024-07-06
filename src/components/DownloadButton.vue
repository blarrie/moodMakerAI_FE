<script>
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import axios from "axios";

export default {
  name: "DownloadButton",
  props: {
    filename: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      // change this to get the filename from home component
      filename: this.$route.params.filename,
      snackbar: {
        visible: false,
        msg: "",
        color: "success",
      },
    };
  },
  mounted(){
    console.log("Filename to download: ", this.filename);
  },

  methods: {
    downloadVideo() {
      const path = `http://127.0.0.1:5000/download/${this.filename}`;

      // error testing
      // const path = `http://127.0.0.1:5000/fake-endpoint/${this.filename}`;

      axios
        .get(path)
        .then((response) => {
          if (response.data.status === "success") {
            const url = response.data.url;
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", this.filename);

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            console.log("File downloaded!");

            this.snackbar.msg = "File downloaded successfully!";
            this.snackbar.color = "success";
            this.snackbar.visible = true;
          } else {
            console.log("Error generating link");

            this.snackbar.msg =
              "Unfortunately we have run into a problem :(. You will be redirected to try again!";
            this.snackbar.color = "error";
            this.snackbar.visible = true;
          }
        })
        .catch((error) => {
          console.error(error);

          this.snackbar.msg =
            "Unfortunately we have run into a problem :(. You will be redirected to try again!";
          this.snackbar.color = "error";
          this.snackbar.visible = true;
          setTimeout(() => {
            this.$router.push("./");
          }, 5000);
        });
    },
  },
};
</script>

<template>
  <div>
    <v-btn append-icon="mdi-download" @click="downloadVideo">
      Download here
    </v-btn>

    <v-snackbar v-model="snackbar.visible" :color="snackbar.color" multi-line>
      {{ snackbar.msg }}

      <template v-slot:actions>
        <v-btn color="white" variant="text" @click="snackbar.visible = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
