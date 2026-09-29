import type { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { TOKEN_KEY } from '../constant'

export function axiosInterceptor(instance: AxiosInstance) {
  instance.interceptors.request.use(
    (request: InternalAxiosRequestConfig) => {
      const token = sessionStorage.getItem(TOKEN_KEY)

      if (token) {
        request.headers.Authorization = `Bearer ${token}`
      }
      return request
    },
    (error: Error) => {
      return Promise.reject(error)
    },
  )

  instance.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      return Promise.reject(error)
    },
  )
}
