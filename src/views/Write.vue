<template>
  <v-container class="mx-auto">
    <v-row>
      <v-col cols="6">
        <v-card color="grey darken-4" class="mt-2" min-height="620" max-width="600">
          <v-textarea autofocus no-resize dark auto-grow rounded rows="23" v-model="text"></v-textarea>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card color="grey darken-4" class="mt-2" min-height="620" max-width="600">
          <div v-html="message">{{message}}</div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    text: "",
    message: ""
  })
};
</script>

<style scoped>
</style>