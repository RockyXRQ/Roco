<template>
  <v-card class="mt-2" color="grey darken-4" dark min-height="620" max-width="800">
    <v-card-title>{{showCard.head}}</v-card-title>
    <v-card-content>{{showCard.content}}</v-card-content>
  </v-card>
</template>

<script>
export default {
  name: "my-article-show-item",
  props: {
    showCard: {
      type: Object,
      default: () => {
        return {
          head: "",
          content: ""
        };
      }
    }
  }
};
</script>