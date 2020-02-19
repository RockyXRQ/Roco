<template>
  <v-app>
    <v-app-bar app dark color="#3930D8">
      <v-img src="./assets/logo-white-no-shade.svg" max-width="60px" max-height="60px"></v-img>
      <v-divider class="mx-4" dark inset vertical></v-divider>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content app>
      <floating-nav></floating-nav>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>
<script>
import FloatingNav from "./components/FloatingNav.vue";

export default {
  name: "App",

  components: {
    FloatingNav
  },

  data: () => ({})
};
</script>

<style scoped>
#real-nav {
  position: absolute;
  bottom: 10%;
  right: 6%;
}
</style>
