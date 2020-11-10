import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        meta: { layout: 'main' },
        component: () => import('../pages/index.vue')
    },
    {
        path: '/timetable',
        name: 'timetable',
        meta: { layout: 'main' },
        component: () => import('../pages/timetable.vue')
    },
    {
        path: '/chat',
        name: 'chat',
        meta: { layout: 'main' },
        component: () => import('../pages/chat.vue')
    },

    {
        path: '/admin',
        name: 'admin',
        meta: { layout: 'empty', auth: true },
        component: () => import('../pages/admin.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    // const authMeta = to.matched.some(record => record.meta.auth)
    next()
})

export default router
