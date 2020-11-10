import Vue from 'vue'
import App from "./App.vue"
import store from './store'
import router from "./router/router.js"

window.Vue = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#moduleAdmin')

