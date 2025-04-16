<script setup lang="ts">
import {
  CdChromeClose,
  IcNavArrowDown,
  CgFacebook,
  AkInstagramFill,
  CoBrandViber,
  LaTelegram,
  AkYoutubeFill,
  ReLinkedinFill,
} from '@kalimahapps/vue-icons'
import { ref } from 'vue'
const isInformationShow = ref(false)
const isServiceShow = ref(false)
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
          <h6>Входи</h6>
          <span></span>
          <h6>Регестрация</h6>
        </div>
        <div class="menu__information">
          <button class="menu__information-section" @click="isInformationShow = !isInformationShow">
            <h6>Информация</h6>
            <IcNavArrowDown
              class="menu__icons"
              :style="{ transform: isInformationShow ? 'rotate(180deg)' : 'rotate(0deg)' }"
            />
          </button>
          <Transition name="slide-down">
            <div class="menu__information-subcategory" v-if="isInformationShow">
              <ul class="menu__service-list">
                <li class="titles__Normal-t12">Акции</li>
                <li class="titles__Normal-t12">Кредит</li>
                <li class="titles__Normal-t12">Оплата и доставка</li>
                <li class="titles__Normal-t12">Гарантия</li>
                <li class="titles__Normal-t12">Частые вопросы</li>
                <li class="titles__Normal-t12">Новости</li>
                <li class="titles__Normal-t12">Блог</li>
                <li class="titles__Normal-t12">О нас</li>
                <li class="titles__Normal-t12">Политика конфиденциальности</li>
                <li class="titles__Normal-t12">Контакты</li>
              </ul>
            </div>
          </Transition>
        </div>
        <div class="menu__service">
          <button class="menu__service-section" @click="isServiceShow = !isServiceShow">
            <h6>Наши сервисы</h6>
            <IcNavArrowDown
              class="menu__icons"
              :style="{ transform: isServiceShow ? 'rotate(180deg)' : 'rotate(0deg)' }"
            />
          </button>
          <Transition name="slide-down">
            <div class="menu__service-subcategory" v-if="isServiceShow">
              <ul class="menu__service-list">
                <li class="titles__Normal-t12">Rosetka</li>
                <li class="titles__Normal-t12">UA</li>
              </ul>
            </div>
          </Transition>
        </div>
        <div class="menu__contacts">
          <h6>Контакты</h6>
          <div class="menu__contacts-list">
            <ul>
              <li class="titles__Normal-t12">(067) 11-12-485 - Отдел продаж</li>
              <li class="titles__Normal-t12">(066) 484-39-22 - Отдел продаж</li>
              <li class="titles__Normal-t12">(063) 747-33-48 - Отдел продаж</li>
              <li class="titles__Normal-t12">Днепр Европейская, 8 (бывшая Миронова 8)</li>
              <li class="titles__Normal-t12">
                Понедельник-Пятница 9:00-19:00 Суббота-Воскресенье: с 9:00-16:00
              </li>
            </ul>
          </div>
        </div>
        <div class="menu__networks">
          <h6>Следите за нами</h6>
          <div class="menu__networks-buttons">
            <button>
              <AkInstagramFill class="menu__icons" />
            </button>
            <button>
              <CgFacebook class="menu__icons" />
            </button>
            <button>
              <CoBrandViber class="menu__icons" />
            </button>
            <button>
              <LaTelegram class="menu__icons" />
            </button>
            <button>
              <AkYoutubeFill class="menu__icons" />
            </button>
            <button>
              <ReLinkedinFill class="menu__icons" />
            </button>
          </div>
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
  color: #d9d9d9;
  h6 {
    color: #d9d9d9;
  }
}
.burger__content {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 20%;
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

.burger__content-menu {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.menu__authorization {
  display: flex;
  gap: 8px;
  align-items: center;

  span {
    display: inline-block;
    width: 1px;
    height: 16px;
    background-color: #d9d9d9;
  }
}
.menu__networks-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  button {
    width: 32px;
    height: 32px;
    background: #f4f8fb;
    border-radius: 50px;
    padding: 4px;
    color: #060f42;
  }
}
.menu__networks-icons {
  font-size: 24px;
}
.menu__information,
.menu__service {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.menu__information-section,
.menu__service-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu__service-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.menu__contacts {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.menu__contacts-list {
  ul {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
}
.menu__networks {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.menu__icons {
  font-size: 24px;
  transition:
    transform 0.3s ease,
    color 0.3s ease;
}
@media (max-width: 1440px) {
  .burger__content {
    width: 30%;
  }
}
@media (max-width: 1024px) {
  .burger__content {
    width: 40%;
    padding: 15px 15px 0 15px;
  }
}
@media (max-width: 768px) {
  .burger__content {
    width: 80%;
  }
}
</style>
