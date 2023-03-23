import { boot } from 'quasar/wrappers'
import type { AxiosInstance } from 'axios'
import axios from 'axios'
import { useAuthStore } from '../modules/auth/stores/auth.store'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance
  }
}

const RTO = 30000

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  responseType: 'json',
  timeout: RTO,
})

export default boot(({ app }) => {
  const authStore = useAuthStore()

  api.interceptors.request.use((config) => {
    const token = authStore.isAuthenticated

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  })

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
        authStore.logout()
      }

      return Promise.reject(error)
    }
  )

  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api
})

export { api }
