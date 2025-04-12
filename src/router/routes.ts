import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('pages/HomeGifs.vue'),
      },
      {
        path: 'favoritos',
        name: 'Favoritos',
        component: () => import('pages/FavoritosGifs.vue'),
      },
      {
        path: 'categorias',
        name: 'Categorias',
        component: () => import('pages/CategoriasGifs.vue'),
      },
      {
        path: 'sobre',
        name: 'Sobre',
        component: () => import('pages/SobreMim.vue'),
      },
    ],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
