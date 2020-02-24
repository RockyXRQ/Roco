<template>
  <div>
    <v-card class="my-5 mx-auto" color="grey darken-4" max-width="600">
      <v-container>
        <v-row>
          <v-col cols="4">
            <v-avatar class="ml-11" size="80">
              <v-img :src="avatar"></v-img>
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
                v-model="nickName"
              ></v-text-field>
              <v-text-field
                class="ma-auto"
                color="#9147FF"
                dark
                dense
                label="E-mail"
                outlined
                readonly
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
                v-model="bio"
              ></v-textarea>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="mx-auto">
          <v-col class="mx-auto" cols="4">
            <v-btn color="#9147FF" block dark rounded @click="SaveProfile()">Save</v-btn>
          </v-col>
          <v-col class="mx-auto" cols="4">
            <v-btn color="grey darken-3" block dark rounded @click="RestoreProfile()">Restore</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "profile",

  data: () => {
    return {
      avatar: "",
      nickName: "",
      email: "",
      bio: ""
    };
  },

  created: function() {
    this.avatar = this.$store.state.user.avatar;
    this.nickName = this.$store.state.user.nickName;
    this.email = this.$store.state.user.email;
    this.bio = this.$store.state.user.bio;
  },

  methods: {
    RestoreProfile() {
      this.nickName = this.$store.state.user.nickName;
      this.bio = this.$store.state.user.bio;
    },

    SaveProfile() {
      this.$store.dispatch("SaveProfile", {
        newNickName: this.nickName,
        newBio: this.bio
      });
    }
  }
};
</script>