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
    ChangeFtlBtnIcon(state) {
      state.activeIcon = (state.activeIcon === "mdi-pen" ? "mdi-content-save" : "mdi-pen");
    },
    ChangeDarkMode(state) {
      state.settings.isDarkMode = !state.settings.isDarkMode;
    },
    ChangeCancelIdMode(state) {
      state.settings.isCancelId = !state.settings.isCancelId;
    },
    ChangeSignInMode(state) {
      state.user.isSignIn = !state.user.isSignIn;
    },
    ChangeOnlineMode(state) {
      state.user.isOnline = !state.user.isOnline;
    },
    ChangeTextToUpload(state, text) {
      state.textToUpload = text;
    },
    ChangeProfile(state, newAvatar, newNickName, newBio) {
      state.user.avatar = newAvatar;
      state.user.nickName = newNickName;
      state.user.bio = newBio;
    }
  },
  actions: {
    CheckOnline({ commit }) {

    },
    SignIn({ commit }, email, password) {

    },
    SignUp({ commit }, nickName, email, password) {

    },
    LogOut({ commit }) {

    },
    ChangeOnline({ commit }) {

    },
    SaveProfile({ commit }) {

    },
    ChangeDark({ commit }) {

    },
    ChangeCancelId({ commit }) {

    },
    ChangeTextToUpload({ commit }, text) {

    }
  },
})
