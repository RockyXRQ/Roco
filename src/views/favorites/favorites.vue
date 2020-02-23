<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-card class="mt-2" dark color="grey darken-4" min-height="620" max-width="400">
          <v-card-title>Favorites</v-card-title>

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
              <favorites-list-item
                v-for="item in items"
                :key="item.id"
                :value="item.id"
                :favorite="{authorAvatar:item.authorAvatar,head:item.head,subHead:item.subHead,content:item.content}"
              ></favorites-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>

      <v-col cols="8">
        <favorites-show-item
          :showCard="{head:items[chosedItem].head,content:items[chosedItem].content}"
        ></favorites-show-item>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FavoritesListItem from "./components/favorites-list-item.vue";
import FavoritesShowItem from "./components/favorites-show-item.vue";

export default {
  name: "favorites",
  components: {
    FavoritesListItem,
    FavoritesShowItem
  },
  
  data: () => {
    return {
      chosedItem: 0
    };
  },

  computed: {
    items() {
      return this.$store.state.user.favArticles;
    }
  }
};
</script>