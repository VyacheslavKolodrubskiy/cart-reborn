import type { Router } from 'vue-router'
import { Pages } from 'src/shared/enums'
import { useAuthStore } from '../modules/auth/stores/auth.store'

export function beforeEachGuard(router: Router) {
  router.beforeEach((to, _from) => {
    const { isAuthenticated } = useAuthStore()

    if (to.name !== Pages.AUTH && !isAuthenticated) {
      return { name: Pages.AUTH }
    }

    if (to.name === Pages.AUTH && isAuthenticated) {
      return { name: Pages.MAIN }
    }
  })
}
