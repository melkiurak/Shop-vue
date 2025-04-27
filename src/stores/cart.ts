import { defineStore } from 'pinia'
import type { CartState, Product } from '@/types/products'
import { CART_STORAGE } from '@/hooks/StorageCart'

export const useCartStore = defineStore('cart', {
  state: (): CartState => ({
    contents: JSON.parse(localStorage.getItem(CART_STORAGE) as string) ?? {},
  }),
  actions: {
    add(product: Product) {
      if (this.contents[product.objectId]) {
        this.contents[product.objectId].quantity += 1
      } else {
        this.contents[product.objectId] = { product, quantity: 1 }
      }
    },
  },
})
