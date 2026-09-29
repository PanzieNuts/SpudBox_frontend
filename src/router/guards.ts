import type { Router } from 'vue-router'

export function setupGuards(router: Router) {
  router.beforeEach(async (to) => {
    const routeMeta = to.meta

    if (routeMeta.title) {
      document.title = `${routeMeta.title}`
    }

    // Evaluate route guard rules and return any redirect if necessary
    // Code Block

    // Allow navigation to proceed
    return true
  })
}
