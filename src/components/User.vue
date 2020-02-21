<template>
  <div>
    <v-menu open-on-click offset-y>
      <template v-slot:activator="{ on }">
        <v-btn small dark class="mx-2" icon color="white" v-on="on">
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>
      <v-list color="grey darken-4">
        <v-list-item>
          <v-avatar class="mx-auto mb-2" color="#9147FF" v-if="isSignIn">
            <v-img alt="avatar" src="../assets/Rocky.png"></v-img>
          </v-avatar>
          <v-avatar class="mx-auto mb-2" color="#9147FF" v-else>
            <v-icon dark>mdi-account-circle</v-icon>
          </v-avatar>
        </v-list-item>
        <v-list-item dark v-if="isSignIn">
          <v-list-item-title>Online</v-list-item-title>
          <v-list-item-action>
            <v-switch color="#9147FF" class="mr-6" v-model="isOnLine"></v-switch>
          </v-list-item-action>
        </v-list-item>
        <v-divider dark></v-divider>
        <v-list-item dark>
          <v-list-item-icon>
            <v-icon>mdi-card-bulleted</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Profile</v-list-item-title>
        </v-list-item>
        <v-list-item dark>
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Favorites</v-list-item-title>
        </v-list-item>
        <v-list-item dark>
          <v-list-item-icon>
            <v-icon>mdi-logout-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Log Out</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data: () => ({
    isOnLine: false,
    isSignIn: true
  })
};
</script>

<style scoped>
</style>