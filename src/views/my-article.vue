<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-card dark color="grey darken-4" class="mt-2" min-height="620" max-width="400">
          <v-card-title>My Article</v-card-title>
          <v-text-field
            class="mx-4"
            autofocus
            color="#9147FF"
            dense
            filled
            outlined
            prepend-inner-icon="mdi-magnify"
          ></v-text-field>
          <v-divider dark></v-divider>
          <v-list three-line>
            <v-list-item-group>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Hello Roco！</v-list-item-title>
                  <v-list-item-subtitle>Roco, the web app with blog, todo-list, and any tools a geek worker will need. :^）</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn color="blue" icon x-small>
                    <v-icon>mdi-share-variant</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="8">
        <v-card class="mt-2" color="grey darken-4" dark min-height="620" max-width="800">
          <div></div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name:"my-article",
  data: () => ({})
};
</script>