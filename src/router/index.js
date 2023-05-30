import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: import('../views/HomeView.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/RegistrationView.vue')
  },
  {
    path: '/catalog', 
    name: 'catalog',
    component: import('../views/CatalogView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: import('../views/CartView.vue')
  },
  // Админка
  {
    path: '/admin/home',
    name: 'admin',
    component: import('../views/Admin/HomeView.vue')
  },
  {
    path: '/admin/shop/create',
    name: 'admin_shop_create',
    component: import('../views/Admin/ShopCreateView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
