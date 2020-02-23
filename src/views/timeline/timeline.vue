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
  
  computed:{
    articles(){
      return this.$store.state.timelineArticles;
    }
  }
};
</script>