import Vue from 'vue'
import App from "./App.vue"
import store from './store'

import "../css/app.css";
// import "../css/tailwind.css";

import router from "./router";

window.Vue = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

