<template>
  <div class="cart__empty">
    <h4>В вашей корзине ничего нет</h4>
    <slot></slot>
  </div>
</template>
<style scoped>
.cart__empty {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
