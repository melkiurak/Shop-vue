<template>
  <div class="product__info">
    <a>
      <img class="product__info-img" :src="props.product?.image_url" alt="" loading="lazy" />
    </a>
    <p class="titles__Normal-t14 product__name">{{ props.product?.name }}</p>
    <p class="product__review">Отзывы:</p>
    <div class="product-card__bottom">
      <div class="product-card__price-wrapper">
        <p class="titles__Strong-t18">{{ props.product?.price }}</p>
        <span class="label__Strong-Small-12">грн</span>
      </div>
      <button class="product-card__buy-btn" @click="handelBuyProduct">
        <span class="label__Strong-Small-12">КУПИТЬ</span>
        <MdOutlinedShoppingCart class="product-card__buy-icons" />
      </button>
    </div>
  </div>
</template>
<style>
.product {
  width: 242px;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.1);
}
.product__info {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  justify-content: space-between;
}
.product__info-img {
  width: 100%;
  height: 214px;
}
.product__name {
  color: #333333;
}
.product__review {
  font-weight: 400;
  font-size: 11px;
  line-height: 100%;
  color: #999999;
}
.product-card__bottom {
  display: flex;
  justify-content: space-between;
}
.product-card__price-wrapper {
  display: flex;
  gap: 2;
  align-items: flex-end;
}
.product-card__buy-btn {
  border-radius: 4px;
  background-color: #06a56c;
  color: #f4f8fb;
  padding: 4px 12px;
}
.product-card__buy-icons {
  display: none;
  font-size: 24px;
  color: #ffffff;
}
@media (max-width: 768px) {
  .product__info-img {
    height: 125px;
  }
  .product-card__buy-btn {
    padding: 4px 8px;
    span {
      display: none;
    }
  }
  .product-card__buy-icons {
    display: block;
  }
}
</style>
<script setup lang="ts">
import type { Product } from '@/types/products'
import { MdOutlinedShoppingCart } from '@kalimahapps/vue-icons'
const props = defineProps<{
  product: Product | undefined
}>()
const handelBuyProduct = () => {
  console.log(props.product?.name, props.product?.objectId)
}
</script>
