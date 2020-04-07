import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1e320f6f = () => interopDefault(import('..\\pages\\category.vue' /* webpackChunkName: "pages_category" */))
const _1289620e = () => interopDefault(import('..\\pages\\product.vue' /* webpackChunkName: "pages_product" */))
const _59a2ea31 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/category",
    component: _1e320f6f,
    name: "category"
  }, {
    path: "/product",
    component: _1289620e,
    name: "product"
  }, {
    path: "/",
    component: _59a2ea31,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
