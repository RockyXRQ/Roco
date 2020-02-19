<template>
  <v-speed-dial
    v-model="fab"
    :bottom="true"
    :right="true"
    direction="left"
    :open-on-hover="true"
    transition="slide-x-transition"
    id="real-nav"
  >
    <template v-slot:activator>
      <v-btn v-model="fab" color="orange" large dark fab>
        <v-icon v-if="fab">mdi-close</v-icon>
        <v-img v-else src="../assets/logo-white-no-shade.svg" max-width="40px" max-height="40px"></v-img>
      </v-btn>
    </template>
    <v-btn fab dark small color="red" @click="gotoLink('/settings')">
      <v-icon>mdi-tools</v-icon>
    </v-btn>
    <v-btn fab dark small color="gray" @click="gotoLink('/signinup')">
      <v-icon>mdi-account</v-icon>
    </v-btn>
    <v-btn fab dark small color="indigo" @click="gotoLink('/my-article')">
      <v-icon>mdi-book-outline</v-icon>
    </v-btn>
    <v-btn fab dark small color="green" @click="gotoLink('/')">
      <v-icon>mdi-chart-timeline-variant</v-icon>
    </v-btn>
  </v-speed-dial>
</template>

<script>
export default {
  name: "FloatingNav",

  data: () => ({
    fab: false
  }),

  methods: {
    gotoLink(link) {
      this.$router.push(link);
    }
  }
};
</script>

<style>
#real-nav {
  position: absolute;
  bottom: 10%;
  right: 6%;
}
</style>