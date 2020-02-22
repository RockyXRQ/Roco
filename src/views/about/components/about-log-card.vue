<template>
    <v-card-text>
      <div class="title">· {{log.ver}}</div>
      <div class="body-1 ml-4" v-for="(detail,num) in log.details" :key="num">· {{detail}}.</div>
    </v-card-text>
</template>

<script>
export default {
  name: "about-log-card",
  props: {
    log: {
      type: Object,
      default: function() {
        return {
          ver: "",
          details: []
        };
      }
    }
  }
};
</script>