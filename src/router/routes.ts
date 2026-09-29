import type { RouteRecordRaw } from 'vue-router'

const SampleMOdule = () => import('@/modules/sample-module/SampleModuleView.vue')
const Login = () => import('@/modules/auth/LoginView.vue')

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Login,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      requiredAuth: false,
      layout: 'auth',
      title: 'Login',
    },
  },
  {
    path: '/sample-module',
    name: 'sample-module',
    component: SampleMOdule,
    meta: {
      requiredAuth: true,
      layout: 'home',
      title: 'Login',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue'),
    meta: {
      layout: 'redirect',
      title: 'Not Found',
    },
  },
]
