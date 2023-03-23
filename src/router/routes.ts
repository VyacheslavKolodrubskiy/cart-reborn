import { Pages } from 'src/shared/enums'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/TheMainLayout.vue'),
    redirect: { name: Pages.MAIN },
    children: [
      {
        path: 'main',
        name: Pages.MAIN,
        component: () => import('pages/MainPage.vue'),
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
