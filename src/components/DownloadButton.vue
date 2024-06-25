<script>
export default {
  name: "DownloadButton",
  methods:{
    downloadVideo() {
      console.log("Retrieve video with sound");
    }
  }

};
</script>

<template>
  <div>
    <v-btn
    @click.prevent="downloadVideo()"
    >
        Download here
    </v-btn>
  </div>
</template>
