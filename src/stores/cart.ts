import { defineStore } from 'pinia'
import type { CartState } from '@/types/products'
import { CART_STORAGE } from '@/hooks/StorageCart'

export const useCartStore = defineStore('cart', {
  state: (): CartState => ({
    contents: JSON.parse(localStorage.getItem(CART_STORAGE) as string),
  }),
  actions: {
    add(productId: string) {
      if (this.contents[productId]) {
        this.contents[productId].quantity += 1
      } else {
        this.contents[productId] = { productId, quantity: 1 }
      }
    },
  },
})
