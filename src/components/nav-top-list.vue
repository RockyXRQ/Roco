<template>
  <v-list rounded>
    <v-list-item-group v-model="item">
      <v-list-item color="#9147FF" dark>
        <v-list-item-icon>
          <v-icon>mdi-chart-timeline-variant</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Timeline</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item color="#9147FF" dark>
        <v-list-item-icon>
          <v-icon>mdi-book-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>My Article</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item color="#9147FF" dark>
        <v-list-item-icon>
          <v-icon>mdi-cogs</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  name: "nav-top-list"
};
</script>