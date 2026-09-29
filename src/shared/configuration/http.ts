import axios from 'axios'
import { env } from './env'
import { axiosInterceptor } from './interceptors'

export const http = axios.create({
  baseURL: env.api.url,
  timeout: env.api.timeout,
})

axiosInterceptor(http)
