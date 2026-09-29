export const env = {
  app_name: import.meta.env.VITE_APP_NAME,
  mode: import.meta.env.MODE,
  is_dev: import.meta.env.DEV,
  is_prod: import.meta.env.PROD,
  debug: import.meta.env.VITE_DEBUG === 'true',
  api: {
    timeout: import.meta.env.DEV ? Number(import.meta.env.VITE_API_TIMEOUT) : undefined,
    url: import.meta.env.VITE_API,
  },
}
