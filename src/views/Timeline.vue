<template>
  <div>
    <v-card dark max-width="560" class="mx-auto mt-3" color="grey darken-4" @click="JumpTo()">
      <v-list-item>
        <v-list-item-avatar color="grey">
          <v-img src="../assets/Rocky.png"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline">{{title}}</v-list-item-title>
          <v-list-item-subtitle>by {{writer}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-img src="../assets/roco_desktop.png" max-height="270"></v-img>

      <v-card-text>{{content}}</v-card-text>

      <v-card-actions>
        <v-btn depressed color="#9147FF" class="ml-2">Read</v-btn>
        <v-spacer></v-spacer>
        <v-btn icon color="red">
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon color="yellow">
          <v-icon>mdi-star</v-icon>
        </v-btn>
        <v-btn icon color="blue">
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card dark max-width="560" class="mx-auto mt-3" color="grey darken-4" @click="JumpTo()">
      <v-list-item>
        <v-list-item-avatar color="grey">
          <v-img src="../assets/Rocky.png"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline">{{title}}</v-list-item-title>
          <v-list-item-subtitle>by {{writer}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-img src="../assets/roco_desktop.png" max-height="270"></v-img>

      <v-card-text>{{content}}</v-card-text>

      <v-card-actions>
        <v-btn depressed color="#9147FF" class="ml-2">Read</v-btn>
        <v-spacer></v-spacer>
        <v-btn icon color="red">
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon color="yellow">
          <v-icon>mdi-star</v-icon>
        </v-btn>
        <v-btn icon color="blue">
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: "Welcome to Roco!",
    writer: "Roco_official",
    content:
      "Roco, the web app with blog, todo-list, and any tools a geek worker will need."
  }),
  methods: {
    JumpTo(root) {
      this.$router.push(root);
    }
  }
};
</script>