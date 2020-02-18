<template>
  <v-container>
    <v-row justify="left">
      <v-menu transition="slide-y-transition">
        <template v-slot:activator="{ on }">
          <v-btn outlined color="orange" class="ma-2" v-on="on">Roco Guider</v-btn>
        </template>
        <v-list>
          <v-list-item v-for="link in links" :key="link.id" link>
            <v-list-item-title v-text="link.name"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "timeline",
  data: () => {
    return {
      links: [
        { id: "1", name: "Profile", href: "" },
        { id: "2", name: "Article", href: "" },
        { id: "3", name: "Log-in", href: "" }
      ]
    };
  } 
};
</script>

<style scoped>
</style>
