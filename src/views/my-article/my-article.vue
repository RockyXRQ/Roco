<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-card class="mt-2" dark color="grey darken-4" min-height="620" max-width="400">
          <v-card-title>My Article</v-card-title>

          <v-text-field
            class="mx-4"
            autofocus
            color="#9147FF"
            dense
            filled
            outlined
            prepend-inner-icon="mdi-magnify"
          ></v-text-field>

          <v-divider dark></v-divider>

          <v-list three-line>
            <v-list-item-group v-model="chosedItem">
              <my-article-list-item
                v-for="item in items"
                :key="item.id"
                :value="item.id"
                :favorite="{head:item.head,subHead:item.subHead,content:item.content}"
              ></my-article-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>

      <v-col cols="8">
        <my-article-show-item
          :showCard="{head:items[chosedItem].head,content:items[chosedItem].content}"
        ></my-article-show-item>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MyArticleListItem from "./components/my-article-list-item.vue";
import MyArticleShowItem from "./components/my-article-show-item.vue";

export default {
  name: "favorites",
  components: {
    MyArticleListItem,
    MyArticleShowItem
  },

  data: () => {
    return {
      chosedItem: 0
    };
  },

  computed: {
    items() {
      return this.$store.state.user.myArticles;
    }
  }
};
</script>