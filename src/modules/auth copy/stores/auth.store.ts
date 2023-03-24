import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'

type Token = string | null

interface AuthState {
  token: Token
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    token: null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    setToken(token: Token) {
      this.token = token
    },
    async checkPhone(phone: string) {
      try {
        const { data } = await api('auth/request', { params: { phone } })
        console.log('data:', data)
      } catch (error) {
        console.error(error)
      }
    },
    logout() {
      this.token = null
    },
  },
  persist: true,
})
