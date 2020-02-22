<template>
  <div>
    <timeline-card v-for="a in articles" :key="a.id" :article="a"></timeline-card>
  </div>
</template>

<script>
import TimelineCard from "./components/timeline-card.vue";

export default {
  name: "timeline",
  components: {
    TimelineCard
  },
  data: () => {
    return {
      articles: [
        {
          id: 0,
          authorAvatar: require("../../assets/Rocky.png"),
          head: "Welcome to Roco!",
          cover: require("../../assets/roco_desktop.png"),
          subHead: "Rocky",
          content: "Roco record the future",
          route: ""
        }
      ]
    };
  }
};
</script>