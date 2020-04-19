import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2d0351ea = () => interopDefault(import('..\\pages\\address\\index.vue' /* webpackChunkName: "pages_address_index" */))
const _6331908d = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages_cart" */))
const _db17a568 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _249200d4 = () => interopDefault(import('..\\pages\\placeorder.vue' /* webpackChunkName: "pages_placeorder" */))
const _7d6a3e68 = () => interopDefault(import('..\\pages\\profile.vue' /* webpackChunkName: "pages_profile" */))
const _086b6945 = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages_signup" */))
const _90fe48cc = () => interopDefault(import('..\\pages\\address\\add.vue' /* webpackChunkName: "pages_address_add" */))
const _563ca033 = () => interopDefault(import('..\\pages\\address\\_id.vue' /* webpackChunkName: "pages_address__id" */))
const _8a36b08e = () => interopDefault(import('..\\pages\\products\\_id.vue' /* webpackChunkName: "pages_products__id" */))
const _7d5783ec = () => interopDefault(import('..\\pages\\reviews\\_id.vue' /* webpackChunkName: "pages_reviews__id" */))
const _6e66eb96 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    path: "/address",
    component: _2d0351ea,
    name: "address"
  }, {
    path: "/cart",
    component: _6331908d,
    name: "cart"
  }, {
    path: "/login",
    component: _db17a568,
    name: "login"
  }, {
    path: "/placeorder",
    component: _249200d4,
    name: "placeorder"
  }, {
    path: "/profile",
    component: _7d6a3e68,
    name: "profile"
  }, {
    path: "/signup",
    component: _086b6945,
    name: "signup"
  }, {
    path: "/address/add",
    component: _90fe48cc,
    name: "address-add"
  }, {
    path: "/address/:id",
    component: _563ca033,
    name: "address-id"
  }, {
    path: "/products/:id?",
    component: _8a36b08e,
    name: "products-id"
  }, {
    path: "/reviews/:id?",
    component: _7d5783ec,
    name: "reviews-id"
  }, {
    path: "/",
    component: _6e66eb96,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
