<template>
  <v-app>
    <app-flt-btn></app-flt-btn>

    <v-app-bar app dark dense color="grey darken-4">
      <v-app-bar-nav-icon @click.stop="drawer=true"></v-app-bar-nav-icon>
      <v-img src="./assets/logo.svg" max-width="30" max-height="30" class="mx-2"></v-img>
      <v-spacer></v-spacer>
      <bar-sign-btn></bar-sign-btn>
      <bar-user-btn></bar-user-btn>
    </v-app-bar>

    <v-navigation-drawer app dark color="grey darken-4" v-model="drawer">
      <v-img class="mx-auto mb-5 mt-3" src="./assets/logo.svg" max-width="60" max-height="60"></v-img>
      <v-divider></v-divider>
      <nav-top-list></nav-top-list>

      <template v-slot:append>
        <nav-bottom-btn></nav-bottom-btn>
      </template>
    </v-navigation-drawer>

    <v-content app>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import AppFltBtn from "./components/app-flt-btn.vue";

import BarSignBtn from "./components/bar-sign-btn.vue";
import BarUserBtn from "./components/bar-user-btn.vue";

import NavTopList from "./components/nav-top-list.vue";
import NavBottomBtn from "./components/nav-bottom-btn.vue";

export default {
  name: "App",

  components: {
    AppFltBtn,
    BarSignBtn,
    BarUserBtn,
    NavTopList,
    NavBottomBtn
  },

  data: () => ({
    drawer: false
  })
};
</script>