<template>
  <v-container class="mx-auto">
    <v-row>
      <v-col cols="6">
        <v-card class="mt-2" color="grey darken-4" min-height="620" max-width="600">
          <v-textarea autofocus no-resize dark auto-grow rounded rows="23" v-model="text"></v-textarea>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card class="mt-2" color="grey darken-4" min-height="620" max-width="600">
          <div></div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "write",
  data: () => ({
    text: ""
  })
};
</script>

<style scoped>
</style>