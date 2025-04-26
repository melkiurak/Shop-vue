import type { ProductState } from '@/types/products'
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const products = ref<ProductState[]>([])
  const cartItemLocal = localStorage.getItem('cartItem')
  const addCart = (productId: string) => {
    if (products[productId]) {
      products[productId].stock_quantity += 1
    }
  }
  console.log(products)
  watch(
    () => products.value,
    (state) => {
      localStorage.setItem('cartItem', JSON.stringify(state))
    },
    { deep: true },
  )
  return {
    products,
    addCart,
  }
})
