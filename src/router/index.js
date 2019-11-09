import Vue from 'vue'
import VueRouter from 'vue-router'
import PlaceSearch from '../views/PlaceSearch.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'placesearch',
    component: PlaceSearch
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/findxyz',
    name: 'findxyz',
    component: () => import(/* webpackChunkName: "findxyz" */ '../views/FindXYZ.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
