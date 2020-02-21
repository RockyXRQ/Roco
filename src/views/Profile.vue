<template>
  <div>
    <v-card class="my-5 mx-auto" color="grey darken-4" max-width="600">
      <v-container>
        <v-row>
          <v-col cols="4">
            <v-avatar class="ml-11" size="80">
              <v-img src="../assets/Rocky.png"></v-img>
            </v-avatar>
            <v-file-input
              class="mx-11"
              dark
              dense
              accept="image/png, image/jpeg, image/bmp"
              placeholder="Upload"
              prepend-icon="mdi-camera"
              color="#9147FF"
            ></v-file-input>
          </v-col>
          <v-col cols="8">
            <v-card class="mr-6" flat color="grey darken-4">
              <v-text-field
                class="ma-auto"
                dark
                label="Nick Name"
                color="#9147FF"
                :value="nickName"
                outlined
                dense
              ></v-text-field>
              <v-text-field
                class="ma-auto"
                dark
                label="E-mail"
                color="#9147FF"
                :value="email"
                outlined
                dense
              ></v-text-field>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card class="mx-6" flat color="grey darken-4">
              <v-textarea
                auto-grow
                dark
                outlined
                clearable
                dense
                label="Bio"
                color="#9147FF"
                :value="bio"
              ></v-textarea>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="mx-auto">
          <v-col class="mx-auto" cols="4">
            <v-btn rounded block dark color="#9147FF">Save</v-btn>
          </v-col>
          <v-col class="mx-auto" cols="4">
            <v-btn rounded block dark color="grey darken-3">Restore</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    nickName: "Rocky",
    email: "1315930212@qq.com",
    bio: "This people is great.  :^)"
  })
};
</script>