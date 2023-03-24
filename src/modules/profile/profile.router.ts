import type { RouteRecordRaw, Router } from 'vue-router'
import { Pages } from 'src/shared/enums'

const moduleRoute: RouteRecordRaw = {
  path: '/profile',
  component: () => import('layouts/TheMainLayout.vue'),
  children: [
    {
      path: '',
      name: Pages.PROFILE,
      component: () => import('./pages/ProfilePage.vue'),
    },
  ],
}

export default (router: Router) => {
  router.addRoute(moduleRoute)
}
