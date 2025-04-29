import { defineStore } from 'pinia'
import type { CartState, Product } from '@/types/products'
import { CART_STORAGE } from '@/hooks/StorageCart'

export const useCartStore = defineStore('cart', {
  state: (): CartState => ({
    contents: JSON.parse(localStorage.getItem(CART_STORAGE) as string) ?? {},
  }),
  getters: {
    totalQuantity: (state) => {
      return Object.values(state.contents).reduce((acc, item) => acc + item.quantity, 0)
    },
    totalPrice: (state) => {
      return Object.values(state.contents).reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0,
      )
    },
  },
  actions: {
    add(product: Product) {
      if (this.contents[product.objectId]) {
        if (this.contents[product.objectId].quantity < 99) {
          this.contents[product.objectId].quantity += 1
        }
      } else {
        this.contents[product.objectId] = { product, quantity: 1 }
      }
    },
    down(product: Product) {
      if (this.contents[product.objectId] && this.contents[product.objectId].quantity > 1) {
        this.contents[product.objectId].quantity -= 1
      } else {
        this.contents[product.objectId].quantity = 0
      }
    },
    delete(product: Product) {
      delete this.contents[product.objectId]
    },
  },
})
