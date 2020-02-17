<template>
  <v-app>
    <timeline></timeline>
  </v-app>
</template>

<script>
import HelloWorld from './components/timeline.vue';

export default {
  name: 'App',

  components: {
    timeline,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
</style>
