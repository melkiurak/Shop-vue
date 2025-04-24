<template>
  <h4>Топ продаж</h4>
  <div class="product__card-wrapper">
    <div v-for="(edge, index) in props.topProducts" :key="index" class="product">
      <AppProductCart :product="edge" />
    </div>
  </div>
  <a href="" class="product__link Label__Normal-Medium–14">
    <span>Смотреть все товары</span>
    <BsArrowRightShort class="product__link-icons" />
  </a>
</template>
<script setup lang="ts">
import AppProductCart from '@/components/ProductCart/AppProductCart.vue'
import type { Product } from '@/types/products'
import { BsArrowRightShort } from '@kalimahapps/vue-icons'
const props = defineProps<{
  topProducts: Product[] | undefined
}>()
</script>
<style scoped>
.product__card-wrapper {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
}
.product {
  width: 242px;
  height: 100%;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.1);
}
.product__link {
  display: flex;
  align-items: center;
  justify-content: end;
  color: #01579b;
}
.product__link-icons {
  font-size: 24px;
}
</style>
