import Vue from 'vue'
import Router from 'vue-router'

import Docs from './docs'
import Examples from './examples'

Vue.use(Router)

const routes = [...Docs, ...Examples]

const router = new Router({
  routes
})

export default router
