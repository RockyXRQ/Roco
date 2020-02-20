<template>
  <v-app>
    <v-app-bar app dense dark color="grey darken-4">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <sign></sign>
      <v-btn small outlined dark class="mx-2" icon color="white">
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content app>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Sign from "./components/Sign.vue"

export default {
  name: "App",

  components: {
    Sign
  },

  data: () => ({}),

  methods: {
    JumpTo(root) {
      this.$router.push(root);
    }
  }
};
</script>

<style scoped>
#real-nav {
  position: absolute;
  bottom: 10%;
  right: 6%;
}
</style>
