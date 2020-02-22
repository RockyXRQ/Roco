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
              accept="image/png, image/jpeg, image/bmp"
              dark
              dense
              color="#9147FF"
              placeholder="Upload"
              prepend-icon="mdi-camera"
            ></v-file-input>
          </v-col>
          <v-col cols="8">
            <v-card class="mr-6" flat color="grey darken-4">
              <v-text-field
                class="ma-auto"
                color="#9147FF"
                dark
                dense
                label="Nick Name"
                outlined
                :value="nickName"
              ></v-text-field>
              <v-text-field
                class="ma-auto"
                color="#9147FF"
                dark
                dense
                label="E-mail"
                outlined
                :value="email"
              ></v-text-field>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card class="mx-6" flat color="grey darken-4">
              <v-textarea
                auto-grow
                clearable
                color="#9147FF"
                dark
                dense
                label="Bio"
                outlined
                :value="bio"
              ></v-textarea>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="mx-auto">
          <v-col class="mx-auto" cols="4">
            <v-btn color="#9147FF" block dark rounded>Save</v-btn>
          </v-col>
          <v-col class="mx-auto" cols="4">
            <v-btn color="grey darken-3" block dark rounded>Restore</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  name:"profile",
  data: () => ({
    nickName: "Rocky",
    email: "1315930212@qq.com",
    bio: "This people is great.  :^)"
  })
};
</script>