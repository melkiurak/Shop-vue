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
  BxUser,
  AnOutlinedProduct,
  BsSuitHeart,
  MdOutlinedShoppingCart,
  CaScalesTipped,
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
        <div class="menu__actions">
          <div class="menu__auth">
            <BxUser class="menu__icons" />
            <div class="menu__auth-links">
              <h6>Входи</h6>
              <span></span>
              <h6>Регистрация</h6>
            </div>
          </div>
          <div class="menu__catalog">
            <AnOutlinedProduct class="menu__icons" />
            <a href="/catalog">Каталог товаров</a>
          </div>
          <div class="menu__cart">
            <MdOutlinedShoppingCart class="menu__icons" />
            <a href="/cart">Корзина</a>
          </div>
          <div class="menu__scale">
            <CaScalesTipped class="menu__icons" />
            <a href="/compare">Сравнение</a>
          </div>
          <div class="menu__elected">
            <BsSuitHeart class="menu__icons" />
            <a href="/favorites">Избранное</a>
          </div>
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
<style>
@import './Burger.module.css';
</style>
