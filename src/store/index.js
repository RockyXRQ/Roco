import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    timelineArticles: [{
      id: 0,
      authorAvatar: require("../assets/Rocky.png"),
      head: "Welcome to Roco!",
      cover: require("../assets/roco_desktop.png"),
      subHead: "Rocky",
      content: "Roco record the future.",
      route: ""
    }],
    activeIcon: "mdi-pen",
    user: {
      isSignIn: true,
      isOnline: true,
      avatar: require("../assets/Rocky.png"),
      nickName: "Rocky",
      email: "1315930212@qq.com",
      bio: "This people is great.  :^)",
      myArticles: [{
        id: 0,
        head: "Welcome to Roco!",
        subHead: "Rocky",
        content: "Roco record the future.",
        route: ""
      }],
      favArticles: [{
        id: 0,
        authorAvatar: require("../assets/Rocky.png"),
        head: "Welcome to Roco!",
        subHead: "Rocky",
        content: "Roco record the future.",
        route: ""
      }]
    },
    settings: {
      isDarkMode: true,
      isCancelId: false
    },
    textToUpload: ""
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
