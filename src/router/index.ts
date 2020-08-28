import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index/index.vue')
  },
  {
    path: '/note',
    name: 'note',
    component: () => import('@/views/note/editor.vue'),
    children: [
      {
        path: 'editor',
        name: 'note.editor',
        component: () => import('@/views/note/editor.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
