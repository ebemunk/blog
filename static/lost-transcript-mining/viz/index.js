import Vue from 'vue'
import store from './src/store'

import App from './src/App.vue'

new Vue({
  el: '#app',
  store,
	render: h => h(App)
})
