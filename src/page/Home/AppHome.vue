<template>
  <AppTopProducts :top-products="topProducts" />
</template>

<script setup lang="ts">
import AppTopProducts from '@/components/home/TopProducts/AppTopProducts.vue'
import type { Product } from '@/types/products'
import { computed } from 'vue'

const props = defineProps<{
  product: { edges: { node: Product }[] } | undefined
}>()
const topProducts = computed(() => {
  return props.product?.edges?.filter((edge) => edge.node.SalesCount >= 10).map((edge) => edge.node)
})
</script>
