<template>
  <div class="cart">
    <div class="cart__content">
      <div v-if="cart.totalQuantity" class="cart__content-wrapper">
        <div class="cart__content-header">
          <h6>Корзина</h6>
          <button @click="$emit('close')" class="cart__close-btn">
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
              <div class="cart__item-info-wrapper">
                <p class="titles__Normal-t12">{{ item.product.name }}</p>
                <button class="cart__item-delete" @click="cart.delete(item.product)">
                  <AkTrashCan />
                </button>
              </div>
              <div class="cart__item-details-wrapper">
                <div class="cart__item-quantity">
                  <button
                    @click="cart.down(item.product)"
                    :disabled="item.quantity <= 1"
                    :class="
                      item.quantity <= 1
                        ? 'cart__item-quantity-block'
                        : 'cart__item-quantity-noblock'
                    "
                  >
                    <AkMinus class="cart__item-quantity-icons" />
                  </button>
                  <input
                    class="cart__item-quantity-input"
                    type="number"
                    v-model.number="item.quantity"
                    :disabled="item.quantity >= 99"
                  />
                  <button
                    @click="cart.add(item.product)"
                    :class="
                      item.quantity >= 99
                        ? 'cart__item-quantity-plusBlock'
                        : 'cart__item-quantity-plusNoBlock'
                    "
                  >
                    <ByPlus class="cart__item-quantity-icons" />
                  </button>
                </div>
                <div class="cart__item-price">
                  <p class="titles__Strong-t18">{{ item.product?.price * item.quantity }}</p>
                  <span class="label__Normal-Small–12">грн</span>
                </div>
                <button class="cart__item-delete" @click="cart.delete(item.product)">
                  <AkTrashCan />
                </button>
              </div>
            </div>
          </div>
          <div class="cart__controls">
            <button class="cart__controls-back">
              <h6>Продолжить покупку</h6>
            </button>
            <div class="cart__controls-summary">
              <div class="cart__controls-price">
                <p class="label__Strong-Extra-Large–22">{{ cart.totalPrice }}</p>
                <span class="label__Strong-Medium–14">грн</span>
              </div>
              <button class="cart__controls-submit">
                <span class="label__Strong-Small-12">Оформить заказ</span>
              </button>
            </div>
          </div>
        </div>
        <div class="cart__content-suggested-items"></div>
      </div>
      <AppCartEmpty v-else>
        <button @click="$emit('close')" class="cart__close-btn">
          <AnOutlinedClose />
        </button>
      </AppCartEmpty>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { AnOutlinedClose, ByPlus, AkMinus, AkTrashCan } from '@kalimahapps/vue-icons'
import AppCartEmpty from './CartEmpty/AppCartEmpty.vue'
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
  padding: 30px;
}
.cart__content {
  max-width: 1064px;
  width: 100%;
  margin: 62px auto;
  background-color: white;
  padding: 24px;
  border-radius: 4px;
}
.cart__content-wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.cart__content-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.cart__close-btn {
  color: #e93232;
  font-size: 20px;
}
.cart__content-item {
  display: flex;
  flex-direction: column;
}
.cart__item {
  padding: 12px 0;
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
    padding: 4px;
  }
}
.cart__item-quantity-block,
.cart__item-quantity-plusBlock {
  background-color: #cccccc;
  cursor: not-allowed;
}
.cart__item-quantity-noblock,
.cart__item-quantity-plusNoBlock {
  background-color: #e5e5e580;
  cursor: pointer;
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
.cart__controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
}
.cart__controls-back {
  border: 2px solid #01579b;
  border-radius: 4px;
  color: #01579b;
  padding: 7px;
}
.cart__controls-summary {
  display: flex;
  align-items: center;
  gap: 29px;
}
.cart__controls-submit {
  background-color: #06a56c;
  border-radius: 4px;
  color: #f4f8fb;
  padding: 9px 20.4px;
}
.cart__controls-price {
  display: flex;
  gap: 2px;
  align-items: flex-end;
  color: #060f42;
}
.cart__item-info-wrapper {
  display: none;
}
.cart__item-details-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 84px;
  justify-content: space-between;
  flex: 1;
}
@media (max-width: 1024px) {
  .cart__item-details,
  .cart__item-details-wrapper {
    gap: 0;
  }
  .cart__item {
    gap: 40px;
  }
}
@media (max-width: 768px) {
  .cart {
    padding: 0;
  }
  .cart__content {
    margin: 0;
    height: 100%;
    padding: 16px;
  }
  .cart__item-delete {
    display: none;
  }
  .cart__item-info {
    p {
      display: none;
    }
  }
  .cart__item-details {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }
  .cart__item-price {
    padding-left: 49px;
  }
  .cart__item-info-wrapper {
    width: 100%;
    display: flex;
    gap: 4px;
    align-items: flex-start;
    justify-content: space-between;
    button {
      display: block;
      color: #060f42;
    }
  }
}
</style>
