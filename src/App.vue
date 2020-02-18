<template>
  <v-app>
    <v-system-bar app color="deep-orange"></v-system-bar>
    <v-container app>
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
            <v-icon v-else>mdi-apps</v-icon>
          </v-btn>
        </template>
        <v-btn fab dark small color="red">
          <v-icon>mdi-tools</v-icon>
        </v-btn>
        <v-btn fab dark small color="indigo">
          <v-icon>mdi-book-outline</v-icon>
        </v-btn>
        <v-btn fab dark small color="green">
          <v-icon>mdi-chart-timeline-variant</v-icon>
        </v-btn>
      </v-speed-dial>
      <v-divider></v-divider>
    </v-container>
  </v-app>
</template>
<script>
//import timeline from './components/timeline.vue';

export default {
  name: "App",

  components: {
    //timeline,
  },

  data: () => ({
    bottomNav: "timeline",
    fab: "false"
  })
};
</script>

<style scoped>
#real-nav {
  position: absolute;
  bottom: 10%;
  right: 6%;
}
</style>
