import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import Home from '../view/home.vue';

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home,
  // },
  {  
    path: '/',
    name: 'origin',
    component: () => import('../views/origin/index.vue') 
  },
  {  
    path: '/home',
    name: 'home',
    component: () => import('../views/home/index.vue') 
  },
  {  
    path: '/sign',
    name: 'sign',
    component: () => import('../views/sign/index.vue') 
  },
  {  
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue') 
  },
  {  
    path: '/user',
    name: 'user',
    component: () => import('../views/user/index.vue') 
  },

]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router;
