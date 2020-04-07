import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1e320f6f = () => interopDefault(import('..\\pages\\category.vue' /* webpackChunkName: "pages_category" */))
const _ea5c48dc = () => interopDefault(import('..\\pages\\owner.vue' /* webpackChunkName: "pages_owner" */))
const _310e2a0d = () => interopDefault(import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages_products_index" */))
const _6e494bb5 = () => interopDefault(import('..\\pages\\products\\_id.vue' /* webpackChunkName: "pages_products__id" */))
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
    path: "/owner",
    component: _ea5c48dc,
    name: "owner"
  }, {
    path: "/products",
    component: _310e2a0d,
    name: "products"
  }, {
    path: "/products/:id",
    component: _6e494bb5,
    name: "products-id"
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
