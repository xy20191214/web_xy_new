import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

const index = () => import('@/views/index/index.vue')

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'index',
    component: index
  }
]

const router = new VueRouter({
  routes
})

export default router
