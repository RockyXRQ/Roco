<template>
  <div>
    <v-card dark class="my-5 mx-auto" color="grey darken-4" max-width="600">
      <v-card-title>Appearance</v-card-title>
      <v-list dark>
        <v-list-item-group>
          <v-list-item dark>
            <v-list-item-name>Dark Mode</v-list-item-name>
            <v-spacer></v-spacer>
            <v-list-item-action>
              <v-switch color="#9147FF" v-model="isDarkMode"></v-switch>
            </v-list-item-action>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
    <v-card dark class="my-5 mx-auto" color="grey darken-4" max-width="600">
      <v-card-title>Reading Habits</v-card-title>
      <v-list dark>
        <v-list-item-group>
          <v-list-item dark>
            <v-list-item-name>Cancel Indentation</v-list-item-name>
            <v-spacer></v-spacer>
            <v-list-item-action>
              <v-switch color="#9147FF" v-model="isCancelId"></v-switch>
            </v-list-item-action>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    isDarkMode: true,
    isCancelId: false
  })
};
</script>

<style scoped>
</style>
