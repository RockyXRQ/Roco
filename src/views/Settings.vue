<template>
  <div>
    <v-card class="my-5 mx-auto" color="grey darken-4" dark max-width="600">
      <v-card-title>Appearance</v-card-title>
      <v-list dark>
        <v-list-item-group>
          <v-list-item dark>
            <v-list-item-name>Dark Mode</v-list-item-name>
            <v-spacer></v-spacer>
            <v-list-item-action>
              <v-switch
                color="#9147FF"
                v-model="settings.isDarkMode"
                @click="ChangeSetting('Dark')"
              ></v-switch>
            </v-list-item-action>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>

    <v-card class="my-5 mx-auto" color="grey darken-4" dark max-width="600">
      <v-card-title>Reading Habits</v-card-title>
      <v-list dark>
        <v-list-item-group>
          <v-list-item dark>
            <v-list-item-name>Cancel Indentation</v-list-item-name>
            <v-spacer></v-spacer>
            <v-list-item-action>
              <v-switch
                color="#9147FF"
                v-model="settings.isCancelId"
                @click="ChangeSetting('CancelId')"
              ></v-switch>
            </v-list-item-action>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "settings",
  computed: {
    settings() {
      return this.$store.state.settings;
    }
  },
  methods: {
    ChangeSetting(setting) {
      this.$store.dispatch("Change" + setting);
    }
  }
};
</script>