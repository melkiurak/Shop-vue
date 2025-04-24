<template>
  <h4>Топ продаж</h4>
  <div>
    <div v-for="(edge, index) in props.topProducts" :key="index">
      <AppProductCart :product="edge" />
    </div>
  </div>
</template>
<script setup lang="ts">
import AppProductCart from '@/components/ProductCart/AppProductCart.vue'
import type { Product } from '@/types/products'

const props = defineProps<{
  topProducts: Product[] | undefined
}>()
</script>
<style scoped></style>
