<template>
  <div>
    <v-card class="mx-auto mt-2" dark max-width="750">
      <v-card-title class="headline">About Roco.</v-card-title>
      <v-img class="mx-auto" src="../../assets/logo.svg" max-height="300" max-width="300"></v-img>

      <div class="title yellow--text ml-4">· Special Thanks to:</div>
      <div class="body-1 ml-8" v-for="(helper,num) in helpers" :key="num">☆ {{helper}}.</div>

      <about-log-card v-for="l in logs" :key="l.ver" :log="l"></about-log-card>
    </v-card>
    <v-card></v-card>
  </div>
</template>

<script>
import AboutLogCard from "./components/about-log-card.vue";

export default {
  name: "about",
  components: {
    AboutLogCard
  },
  data: () => {
    return {
      helpers: ["Logo design: YukiMia(An)"],
      logs: [
        {
          ver: "1.0.0",
          details: [
            "Material Design",
            "Made with Vue & Node & love",
            "Write by MarkDown",
            "Realtime markdown writting experience",
            "Share/star/like the author/article"
          ]
        }
      ]
    };
  }
};
</script>