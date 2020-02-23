<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title>{{favorite.head}}</v-list-item-title>
      <v-list-item-subtitle>{{favorite.subHead}} -- {{favorite.content}}</v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item-action>
      <v-btn color="blue" icon x-small>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
export default {
  name: "my-article-list-item",
  props: {
    favorite: {
      type: Object,
      default: function() {
        return {
          head: "",
          subHead: "",
          content:""
        };
      }
    }
  }
};
</script>