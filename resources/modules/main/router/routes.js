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
  },
  {
    path: '/*',
    name: 'notFound',
    meta: { layout: 'main' },
    component: () => import('../pages/404.vue')
  }
]

export default routes
