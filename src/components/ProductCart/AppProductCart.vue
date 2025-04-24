<template>
  <div class="product">
    <div>
      <img src="" alt="" />
      <p class="titles__Normal-t14">{{ props.product?.name }}</p>
      <p>Отзывы:</p>
      <div>
        <div>
          <p></p>
          <span></span>
        </div>
        <button>КУПИТЬ</button>
      </div>
    </div>
  </div>
</template>
<style></style>
<script setup lang="ts">
import type { Product } from '@/types/products'

const props = defineProps<{
  product: Product | undefined
}>()
</script>
