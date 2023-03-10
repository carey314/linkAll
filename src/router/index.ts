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
    name: 'home',
    component: () => import('../views/home/index.vue') 
  },

]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router;
