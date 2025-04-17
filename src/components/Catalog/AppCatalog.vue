<template>
  <div class="catalog container" @click.self="$emit('toggleOverlay')">
    <div class="catalog__menu">
      <div class="catalog__menu-header">
        <h6>Каталог</h6>
        <CdChromeClose class="menu__icons-header" />
      </div>
      <div class="catalog__menu-list">
        <button
          v-for="category in categorys?.categories.edges"
          :key="category.node.objectId"
          @click="() => handelClick(category.node)"
        >
          <span class="catalog__icons-wrapper">
            <component
              class="catalog__icons"
              :is="categoryIcons[normalizedCategoryName(category.node.name)] || null"
            ></component>
            <span class="titles__Normal-t16">{{ category.node.name }}</span>
          </span>
          <MdTwoToneKeyboardArrowRight class="catalog__icons" />
        </button>
      </div>
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
const handelClick = (category: Categories) => {
  console.log(category.subCategory)
}
</script>
<style>
@import './Catalog.module.css';
</style>
