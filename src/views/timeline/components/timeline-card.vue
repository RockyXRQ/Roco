<template>
  <v-card
    class="mx-auto mt-3"
    color="grey darken-4"
    dark
    max-width="560"
    @click="JumpTo(article.route)"
  >
    <v-list-item>
      <v-list-item-avatar color="grey">
        <v-img :src="article.authorAvatar"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">{{article.head}}</v-list-item-title>
        <v-list-item-subtitle>by {{article.subHead}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-img max-height="270" :src="article.cover"></v-img>

    <v-card-text>{{article.content}}</v-card-text>

    <v-card-actions>
      <v-btn class="ml-2" color="#9147FF" depressed>Read</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="red" icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn color="yellow" icon>
        <v-icon>mdi-star</v-icon>
      </v-btn>
      <v-btn color="blue" icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "timeline-card",
  props: {
    article: {
      type: Object,
      default: function() {
        return {
          id: "",
          authorAvatar: "",
          head: "",
          cover: "",
          subHead: "",
          content: "",
          route: ""
        };
      }
    }
  },
  methods: {
    JumpTo(route) {
      this.$router.push(route);
    }
  }
};
</script>