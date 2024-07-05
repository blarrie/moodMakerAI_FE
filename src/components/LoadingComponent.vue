<script>
export default {
    name: 'LoadingComponent'
};
</script>

<template>
    <div>
        <v-progress-circular
        color="#00f2ea"
        indeterminate
        :size="90"
        :width="9"
        class="spinner"
        >
        <!-- <template v-slot:default> Generating Music</template> -->
    </v-progress-circular>
    </div>
</template>
<style>
.spinner {
  text-align: center;
}

</style>