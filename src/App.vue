<template>
  <v-app>
    <v-fab-transition>
      <v-btn
        color="#9147FF"
        class="mr-12 mb-10"
        dark
        fixed
        fab
        right
        large
        bottom
        @click="JumpTo('/write');activeFab='mdi-content-save'"
      >
        <v-icon>{{activeFab}}</v-icon>
      </v-btn>
    </v-fab-transition>

    <v-app-bar app dense dark color="grey darken-4">
      <v-app-bar-nav-icon @click.stop="drawer=true"></v-app-bar-nav-icon>
      <v-img src="./assets/logo.svg" max-width="30" max-height="30" class="mx-2"></v-img>
      <v-spacer></v-spacer>
      <sign></sign>
      <user></user>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" color="grey darken-4">
      <v-list rounded>
        <v-img class="mx-auto mb-5 mt-3" src="./assets/logo.svg" max-width="60" max-height="60"></v-img>
        <v-divider dark></v-divider>

        <v-list-item-group v-model="item">
          <v-list-item dark color="#9147FF" @click="JumpTo('/');activeFab='mdi-pen'">
            <v-list-item-icon>
              <v-icon>mdi-chart-timeline-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Timeline</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item dark color="#9147FF" @click="JumpTo('/my-article')">
            <v-list-item-icon>
              <v-icon>mdi-book-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>My Article</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item dark color="#9147FF" @click="JumpTo('/settings')">
            <v-list-item-icon>
              <v-icon>mdi-cogs</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Settings</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <template v-slot:append>
        <div class="ma-4">
          <v-btn rounded dark depressed block color="#9147FF" @click="JumpTo('/about')">
            <v-img src="./assets/logo-white.svg" max-width="27" max-height="27" class="mr-2"></v-img>About Roco.
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-content app>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Sign from "./components/Sign.vue";
import User from "./components/User.vue";

export default {
  name: "App",

  components: {
    Sign,
    User
  },

  data: () => ({
    drawer: false,
    item: "null",
    online: true,
    avatarHref: "./assets/Rocky.png",
    activeFab: "mdi-pen"
  }),

  methods: {
    JumpTo(root) {
      this.$router.push(root);
    }
  }
};
</script>

<style scoped>
</style>
