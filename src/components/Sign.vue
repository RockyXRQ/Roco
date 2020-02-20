<template>
  <div>
    <v-btn
      small
      depressed
      dark
      class="mx-2"
      color="grey darken-3"
      @click.stop="dialog=true;tab='sign-in';"
    >登录</v-btn>
    <v-btn
      small
      depressed
      dark
      class="mx-2"
      color="#9147FF"
      @click.stop="dialog=true;tab='sign-up';"
    >注册</v-btn>
    <v-dialog v-model="dialog" max-width="600">
      <v-card color="grey darken-4">
        <v-card-title class="text-center justify-center py-6 white--text">
          <h1>
            Welcome To
            <span class="my-purple-text">Roco</span>.
          </h1>
        </v-card-title>

        <v-tabs dark centered v-model="tab" background-color="grey darken-4" color="#9147FF">
          <v-tab href="#sign-in">登录</v-tab>
          <v-tab href="#sign-up">注册</v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item value="sign-in">
            <v-container>
              <v-row justify="center">
                <v-col cols="10">
                  <v-text-field
                    light
                    color="#9147FF"
                    dense
                    outlined
                    v-model="inEmail"
                    label="E-mail"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="10">
                  <v-text-field
                    light
                    color="#9147FF"
                    dense
                    type="password"
                    outlined
                    v-model="inPassword"
                    label="Password"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-btn dark color="#9147FF">LINK START</v-btn>
              </v-row>
            </v-container>
          </v-tab-item>
          <v-tab-item value="sign-up">
            <v-container fluid>
              <v-row justify="center"></v-row>
              <v-row justify="center">
                <v-col cols="10">
                  <v-text-field
                    light
                    color="#9147FF"
                    dense
                    outlined
                    v-model="upNickName"
                    :counter="20"
                    :rules="nickNameRules"
                    label="Nick Name"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="10">
                  <v-text-field
                    light
                    color="#9147FF"
                    dense
                    outlined
                    v-model="upEmail"
                    :counter="25"
                    :rules="emailRules"
                    label="E-mail"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="10">
                  <v-text-field
                    light
                    color="#9147FF"
                    dense
                    type="password"
                    outlined
                    :counter="18"
                    v-model="upPassword"
                    :rules="passwordRules"
                    label="Password"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-btn dark color="#9147FF">LINK START</v-btn>
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