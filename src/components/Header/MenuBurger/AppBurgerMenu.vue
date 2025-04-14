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
          <div class="menu__information-section">
            <h6>Информация</h6>
            <IcNavArrowDown class="menu__icons" />
          </div>
          <div class="menu__information-subcategory">
            <ul>
              <li>Акции</li>
              <li>Кредит</li>
              <li>Оплата и доставка</li>
              <li>Гарантия</li>
              <li>Частые вопросы</li>
              <li>Новости</li>
              <li>Блог</li>
              <li>О нас</li>
              <li>Политика конфиденциальности</li>
              <li>Контакты</li>
            </ul>
          </div>
        </div>
        <div class="menu__service">
          <div class="menu__service-section">
            <h6>Наши сервисы</h6>
            <IcNavArrowDown class="menu__icons" />
          </div>
          <div class="menu__service-subcategory">
            <ul>
              <li>Rosetka</li>
              <li>UA</li>
            </ul>
          </div>
        </div>
        <div class="menu__contacts">
          <h6>Контакты</h6>
          <div class="menu__contacts-list">
            <ul>
              <li>(067) 11-12-485 - Отдел продаж</li>
              <li>(066) 484-39-22 - Отдел продаж</li>
              <li>(063) 747-33-48 - Отдел продаж</li>
              <li>Днепр Европейская, 8 (бывшая Миронова 8)</li>
              <li>Понедельник-Пятница 9:00-19:00 Суббота-Воскресенье: с 9:00-16:00</li>
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
.menu__information {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.menu__information-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu__icons {
  font-size: 24px;
}
</style>
