<template>
  <div class="cart">
    <div class="cart__content">
      <div class="cart__content-header">
        <h6>Корзина</h6>
        <button @click="$emit('close')">
          <AnOutlinedClose />
        </button>
      </div>
      <div class="cart__content-item">
        <div v-for="(item, index) in cart.contents" :key="index" class="cart__item">
          <div class="cart__item-info">
            <img :src="item.product?.image_url" alt="" />
            <p>{{ item.product?.name }}</p>
          </div>
          <div class="cart__item-details">
            <div class="cart__item-quantity">
              <button><AkMinus class="cart__item-quantity-icons" /></button>
              <input
                class="cart__item-quantity-input"
                type="number"
                v-model.number="item.quantity"
              />
              <button><ByPlus class="cart__item-quantity-icons" /></button>
            </div>
            <div class="cart__item-price">
              <p class="titles__Strong-t18">{{ item.product?.price }}</p>
              <span class="label__Normal-Small–12">грн</span>
            </div>
            <button class="cart__item-delete"><AkTrashCan /></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { AnOutlinedClose, ByPlus, AkMinus, AkTrashCan } from '@kalimahapps/vue-icons'
const cart = useCartStore()
</script>
<style scoped>
.cart {
  z-index: 100;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #00000080;
}
.cart__content {
  width: 1064px;
  margin: 62px auto;
  background-color: white;
  padding: 24px;
  border-radius: 4px;
}

.cart__content-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    font-size: 20px;
    color: #e93232;
  }
}
.cart__content-item {
  display: flex;
  flex-direction: column;
}
.cart__item {
  padding: 12px;
  display: flex;
  justify-content: space-between;
  gap: 106px;
}
.cart__item-info {
  display: flex;
  gap: 30px;
  align-items: center;
  flex: 1;
  img {
    width: 70px;
    height: 70px;
  }
  p {
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #333333;
  }
}
.cart__item-details {
  display: flex;
  align-items: center;
  gap: 84px;
  justify-content: space-between;
  flex: 1;
}
.cart__item-quantity {
  display: flex;
  align-items: center;
  gap: 22px;
  button {
    width: 32px;
    height: 32px;
    border-radius: 40px;
    background-color: #e5e5e580;
    padding: 4px;
  }
}
.cart__item-quantity-icons {
  font-size: 24px;
  color: #01579b;
}
.cart__item-price {
  display: flex;
  gap: 2;
  align-items: flex-end;
  color: #060f42;
}
.cart__item-delete {
  font-size: 16px;
  color: #e93232;
}
.cart__item-quantity-input {
  -moz-appearance: textfield;
  appearance: textfield;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 18px;
  width: 43px;
  height: 38px;
  border: 1px solid #e6e6e6;
  padding: 16px 8px;
  text-align: center;
  color: #333333;
}
.cart__item-quantity-input::-webkit-outer-spin-button,
.cart__item-quantity-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
