import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    requiredAuth?: boolean
    layout?: 'auth' | 'home' | 'redirect'
    title?: string
  }
}
