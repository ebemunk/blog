import Vue from 'vue'
import store from './src/store'

import {
  Counter,
  BarChart
} from './src/components'

import App from './src/App.vue'

new Vue({
  el: '#app',
  store,
	render: h => h(App)
})
