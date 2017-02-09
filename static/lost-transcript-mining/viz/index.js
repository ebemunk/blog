import Vue from 'vue'
import store from './src/store'
// import Counter from './src/components/Counter.vue'

import {
  Counter,
  BarChart
} from './src/components'

new Vue({
  el: '#app',
  store,
  render: h => h(BarChart)
})
