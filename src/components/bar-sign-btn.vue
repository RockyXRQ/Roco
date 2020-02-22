<template>
  <div>
    <v-btn
      class="mx-2"
      color="grey darken-3"
      dark
      depressed
      small
      @click="dialog=true;tab='sign-in'"
    >Sign In</v-btn>
    <v-btn
      class="mx-2"
      color="#9147FF"
      dark
      depressed
      small
      @click="dialog=true;tab='sign-up'"
    >Sign Up</v-btn>
    <v-dialog v-model="dialog" max-width="600">
      <v-card color="grey darken-4">
        <v-card-title class="text-center py-6 white--text">
          <v-img class="mx-8" max-height="70" max-width="70" src="../assets/logo.svg"></v-img>
          <h1>
            Welcome To
            <span class="my-purple-text">Roco</span>.
          </h1>
        </v-card-title>

        <v-tabs background-color="grey darken-4" centered color="#9147FF" dark v-model="tab">
          <v-tab href="#sign-in">Sign In</v-tab>
          <v-tab href="#sign-up">Sign Up</v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item value="sign-in">
            <v-container>
              <v-row justify="center">
                <v-col cols="10">
                  <v-text-field
                    color="#9147FF"
                    dense
                    label="E-mail"
                    light
                    outlined
                    required
                    v-model="inEmail"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="10">
                  <v-text-field
                    color="#9147FF"
                    dense
                    label="Password"
                    light
                    outlined
                    required
                    type="password"
                    v-model="inPassword"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="10">
                  <v-btn color="#9147FF" block dark depressed rounded>Sign In</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
          <v-tab-item value="sign-up">
            <v-container fluid>
              <v-row justify="center"></v-row>
              <v-row justify="center">
                <v-col cols="10">
                  <v-text-field
                    color="#9147FF"
                    counter="20"
                    dense
                    label="Nick Name"
                    light
                    outlined
                    required
                    v-model="upNickName"
                    :rules="nickNameRules"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="10">
                  <v-text-field
                    color="#9147FF"
                    counter="25"
                    dense
                    label="E-mail"
                    light
                    outlined
                    required
                    v-model="upEmail"
                    :rules="emailRules"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="10">
                  <v-text-field
                    color="#9147FF"
                    counter="18"
                    dense
                    label="Password"
                    light
                    outlined
                    required
                    type="password"
                    v-model="upPassword"
                    :rules="passwordRules"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="10">
                  <v-btn block color="#9147FF" dark depressed rounded>Sign Up</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "bar-sign-btn",

  data: () => ({
    dialog: false,
    tab: null,

    inEmail: "",
    inPassword: "",

    upNickName: "",
    upEmail: "",
    upPassword: "",

    nickNameRules: [
      v => !!v || "Nick name is required",
      v => (v && v.length <= 20) || "Nick name must be less than 20 characters"
    ],
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    passwordRules: [
      v => !!v || "Password is required",
      v =>
        (v.length >= 6 && v.length <= 18) ||
        "Password must be less than 18 characters"
    ]
  })
};
</script>

<style scoped>
.my-purple-text {
  color: #9147ff !important;
}
</style>