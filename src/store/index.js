import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    timelineArticles: [],
    activeIcon: "mdi-pen",
    user: {
      isSignIn: true,
      isOnline: true,
      avatar: require("../assets/Rocky.png"),
      nickName: "",
      email: "",
      bio: "",
      myArticles: [],
      favArticles: []
    },
    settings: {
      isDarkMode: true,
      isCancelId: false
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
