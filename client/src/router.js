import Vue from 'vue'
import Router from 'vue-router'
// import Login from './views/login/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      // component: Login
      component: () => import('./views/login/login.vue')
    },
    {
      path: '/app',
      name: 'gallery',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/gallery/gallery.vue')
    }
  ]
})
