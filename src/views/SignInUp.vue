<template>
  <v-container fluid>
    <v-row justify="center">
      <h1>没时间解释了！快上车！！！</h1>
    </v-row>
    <v-row justify="center">
      <v-col cols="4">
        <v-text-field
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
      <v-col cols="4">
        <v-text-field
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
      <v-col cols="4">
        <v-text-field
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
      <v-btn dark color="orange">LINK START!!!</v-btn>
    </v-row>
  </v-container>
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