<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-card dark color="grey darken-4" class="mt-2" min-height="620" max-width="400">
          <v-card-title>Favorites</v-card-title>
          <v-text-field
            filled
            autofocus
            prepend-inner-icon="mdi-magnify"
            dense
            outlined
            class="mx-4"
            color="#9147FF"
          ></v-text-field>
          <v-divider dark></v-divider>
          <v-list three-line>
            <v-list-item-group>
              <v-list-item>
                <v-list-item-avatar>
                  <v-img src="../assets/Rocky.png"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Hello Roco！</v-list-item-title>
                  <v-list-item-subtitle>Roco, the web app with blog, todo-list, and any tools a geek worker will need. :^）</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon color="red" x-small>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>
                  <v-btn icon color="yellow" x-small>
                    <v-icon>mdi-star</v-icon>
                  </v-btn>
                  <v-btn icon color="blue" x-small>
                    <v-icon>mdi-share-variant</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="8">
        <v-card dark color="grey darken-4" class="mt-2" min-height="620" max-width="800">
          <div v-html="message"></div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({})
};
</script>