<template>
  <div class="catalog container" @click.self="$emit('toggleOverlay')">
    <div class="catalog__menu">
      <div class="catalog__menu-header">
        <h6>Каталог</h6>
        <CdChromeClose class="menu__icons-header" />
      </div>
      <ul class="catalog__modal-categories">
        <li
          v-for="category in categorys?.categories.edges"
          :key="category.node.objectId"
          @mouseenter="hoveredCategory(category.node)"
        >
          <a href="">
            <component
              class="catalog__icons"
              :is="categoryIcons[normalizedCategoryName(category.node.name)] || null"
            ></component>
            <span class="titles__Normal-t16">{{ category.node.name }}</span>
            <MdTwoToneKeyboardArrowRight class="catalog__icons-arrow" />
          </a>
        </li>
      </ul>
      <ul v-if="currentHoveredCategory" class="catalog-modal__subcategories">
        <li>
          <a class="titles__Strong-t16" href="">{{ currentHoveredCategory }}</a>
          <ul>
            <li
              v-for="subCategory in currentHoveredCategory.subCategory.edges"
              :key="subCategory.node.objectId"
              class="titles__Strong-t14"
            >
              <a href="">{{ subCategory.node.name }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { GET_CATEGORYS } from '@/server/data'
import type { Categories, GetProductsData } from '@/types/products'
import { useQuery } from '@vue/apollo-composable'
import {
  PhLightHeadphones,
  BsCpu,
  AkDesktopDevice,
  AkLaptopDevice,
  BsPcDisplay,
  IoOutlineGameController,
  IcLaptopFix,
  AkTabletDevice,
  AnOutlinedPrinter,
  MdOutlinedRouter,
  BsTv,
  MdTwoToneKeyboardArrowRight,
  CdChromeClose,
} from '@kalimahapps/vue-icons'
import { ref } from 'vue'
const { result: categorys } = useQuery<GetProductsData>(GET_CATEGORYS)
const normalizedCategoryName = (name: string) => name.trim()
const categoryIcons: Record<string, unknown> = {
  Аудиотехника: PhLightHeadphones,
  'Принтеры и МФУ': AnOutlinedPrinter,
  Телевизоры: BsTv,
  'Комплектующие ПК': BsCpu,
  Мониторы: AkDesktopDevice,
  Ноутбуки: AkLaptopDevice,
  Компьютеры: BsPcDisplay,
  Планшеты: AkTabletDevice,
  'Комплектующие к ноутбукам': IcLaptopFix,
  'Сетевое оборудование': MdOutlinedRouter,
  'Игровые консоли': IoOutlineGameController,
}
const currentHoveredCategory = ref<Categories | null>(null)
const hoveredCategory = (subCategory: Categories) => {
  currentHoveredCategory.value = subCategory
}
</script>
<style>
@import './Catalog.module.css';
</style>
