<template>
  <div class="ma-4">
    <v-btn block color="#9147FF" dark depressed rounded @click="ToAbout()">
      <v-img class="mr-2" max-height="27" max-width="27" src="../assets/logo-white.svg"></v-img>About Roco.
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "nav-bottom-btn",
  methods: {
    ToAbout() {
      this.$router.push("/about");
    }
  }
};
</script>