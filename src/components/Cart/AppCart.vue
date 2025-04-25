<template>
  <div class="cart">
    <div class="cart__content">
      <div class="cart__content-header">
        <h6>Корзина</h6>
        <button @click="$emit('close')">
          <AnOutlinedClose />
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { AnOutlinedClose } from '@kalimahapps/vue-icons'
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
</style>
