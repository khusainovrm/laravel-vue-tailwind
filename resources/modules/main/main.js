import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router/router.js'

const main = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default main
