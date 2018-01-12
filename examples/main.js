import Vue from 'vue'
import App from './App'
import router from './router'

import MrUI from '../packages'
import '../packages/styles/index.less'

import '@/assets/less/index.less'

Vue.use(MrUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
