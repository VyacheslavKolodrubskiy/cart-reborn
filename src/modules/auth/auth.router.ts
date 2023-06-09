import { Pages } from 'src/shared/enums'
import type { RouteRecordRaw, Router } from 'vue-router'

const moduleRoute: RouteRecordRaw = {
  path: '/auth/:filter*/',
  component: () => import('layouts/TheAuthLayout.vue'),
  children: [
    {
      path: '',
      name: Pages.AUTH,
      component: () => import('./pages/AuthMain.vue'),
    },
  ],
}

export default (router: Router) => {
  router.addRoute(moduleRoute)
}
