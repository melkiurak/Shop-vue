<script setup lang="ts">
import { CdChromeClose } from '@kalimahapps/vue-icons'
</script>
<template>
  <div class="burger" @click.self="$emit('close')">
    <div class="burger__content">
      <div class="burger__content-top">
        <img src="../../../assets/LogoPhone.png" alt="" />
        <button @click="$emit('close')"><CdChromeClose class="burger__icons-close" /></button>
      </div>
      <div class="burger__content-menu">
        <div class="menu__authorization">
          <button>Вход</button>
          <span></span>
          <button>Регестрация</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.burger {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background: #00000080;
}
.burger__content {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 500px;
  padding: 30px 30px 0 30px;
  height: 100%;
  background-color: #060f42;
}
.burger__content-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.burger__icons-close {
  color: white;
  font-size: 32px;
}

.menu__authorization {
  display: flex;
  gap: 8px;
  align-items: center;
  button {
    color: #d9d9d9;
    font-weight: 600;
    font-size: 18px;
    font-family: 'Lato', sans-serif;
  }
  span {
    display: inline-block;
    width: 1px;
    height: 16px;
    background-color: #d9d9d9;
  }
}
</style>
