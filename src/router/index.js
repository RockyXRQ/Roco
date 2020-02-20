import Vue from 'vue'
import VueRouter from 'vue-router'
import Timeline from '../views/Timeline.vue'
import Settings from "../views/Settings.vue"
import MyArticle from "../views/MyArticle.vue"
//import Profile from "../views/Profile.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Timeline
  },
  {
    path: '/settings',
    component: Settings
  },
  {
    path: "/my-article",
    component: MyArticle
  },
]

const router = new VueRouter({
  routes
})

export default router
