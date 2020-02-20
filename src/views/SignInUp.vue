<template>
  <v-card class="ma-auto" color="grey darken-3" max-width="600px">
    <v-container fluid>
      <v-row justify="center"></v-row>
      <v-row justify="center">
        <v-col cols="10">
          <v-text-field
            dark
            color="#9147FF"
            dense
            outlined
            v-model="streetName"
            :counter="20"
            :rules="streetNameRules"
            label="Street Name"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="10">
          <v-text-field
            dark
            color="#9147FF"
            dense
            outlined
            v-model="email"
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
            dark
            color="#9147FF"
            dense
            type="password"
            outlined
            :counter="18"
            v-model="password"
            :rules="passwordRules"
            label="Password"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-btn light color="#9147FF">LINK START</v-btn>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    streetName: "",
    streetNameRules: [
      v => !!v || "Street name is required",
      v =>
        (v && v.length <= 20) || "Street name must be less than 20 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    password: "",
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
</style>