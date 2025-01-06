import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './index.css'

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./pages/Index.vue')
    },
    {
      path: '/about',
      component: () => import('./pages/About.vue')
    }
  ]
})

// Create and mount the Vue application
const app = createApp(App)
app.use(router)
app.mount('#app')