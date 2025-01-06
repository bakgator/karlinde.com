import { createRouter, createWebHistory } from 'vue-router';
import Index from '../pages/Index.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Index,
    },
    {
      path: '/about',
      component: () => import('../pages/About.vue'),
    },
  ],
});

export default router;