<template>
  <v-fab-transition>
    <v-btn class="mr-12 mb-10" color="#9147FF" bottom dark fixed fab large right>
      <v-icon>{{activeIcon}}</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {
  name: "app-flt-btn",
  data: () => ({
    activeIcon: "mdi-pen"
  })
};
</script>