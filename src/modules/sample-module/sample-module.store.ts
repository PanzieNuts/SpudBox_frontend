import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserManagementStore = defineStore('useUserManagementStore', () => {
  const firstName = ref<string | undefined>(undefined)

  return {
    firstName,
  }
})
