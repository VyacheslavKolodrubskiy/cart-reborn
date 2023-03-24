import type { Router } from 'vue-router'

export function beforeEachGuard(router: Router) {
  router.beforeEach((to, _from) => {
    // const { isAuthenticated } = useAuthStore()

    // if (to.name !== Pages.AUTH && !isAuthenticated) {
    //   return { name: Pages.AUTH }
    // }

    // if (to.name === Pages.AUTH && isAuthenticated) {
    //   return { name: Pages.MAIN }
    // }

    return true
  })
}
