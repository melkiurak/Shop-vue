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
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
}
.product {
  width: 242px;
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
@media (max-width: 768px) {
  .product {
    width: 156px;
  }
}
@media (max-width: 768px) {
  .product__card-wrapper {
    gap: 0;
    row-gap: 10px;
  }
  .product {
    width: 147px;
  }
  .product-card__buy-btn {
    padding: 4px 8px;
  }
}
</style>
