import Vue from 'vue'
import VueRouter from 'vue-router'
import Timeline from '../views/timeline/timeline.vue'
import Settings from "../views/settings.vue"
import MyArticle from "../views/my-article.vue"
import Profile from "../views/profile.vue"
import Write from "../views/write.vue"
import Favorites from "../views/favorites.vue"
import About from "../views/about/about.vue"

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
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/write",
    component: Write
  },
  {
    path: "/favorites",
    component: Favorites
  },
  {
    path: "/about",
    component: About
  }
]

const router = new VueRouter({
  routes
})

export default router
