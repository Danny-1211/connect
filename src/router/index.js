import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/StartInterfaceView.vue')
  },
  {
    path: '/game',
    component: () => import(/* webpackChunkName: "about" */ '../views/IntoGameView.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
