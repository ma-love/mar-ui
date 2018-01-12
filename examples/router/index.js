import Vue from 'vue'
import Router from 'vue-router'

import Document from './document'
import Examples from './examples'

Vue.use(Router)

const routes = [...Document, ...Examples]

const router = new Router({
  routes
})

export default router
