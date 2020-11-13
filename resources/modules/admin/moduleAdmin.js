import Vue from 'vue'
import App from "./App.vue"
import store from './store'
import router from "./router/router.js"

const adminModule = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#moduleAdmin')

export default adminModule
