import type { CartItem } from '@/types/state'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    products: [] as CartItem[],
  }),
})
