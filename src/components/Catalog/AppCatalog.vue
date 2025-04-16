<template>
  <div class="catalog container">
    <div class="catalog__menu">
      <div class="catalog__menu-list">
        <button v-for="category in categorys?.categories.edges" :key="category.node.objectId">
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
import type { GetProductsData } from '@/types/products'
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
</script>
<style>
.catalog {
  margin-top: 5px;
  background: #ffffff;
  border-radius: 4px;
  padding: 0;
  height: 566px;
}
.catalog__menu {
  height: 100%;
}
.catalog__menu-list {
  width: 100%;
  width: 370px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 2.8px;
  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    color: #060f42;
    box-shadow: 0px 2px 0px 0 #0000000a;
  }
  button:hover {
    background-color: #f4f8fb;
    color: #01579b;
  }
}
.catalog__icons-wrapper {
  display: flex;
  gap: 8px;
}
.catalog__icons {
  font-size: 24px;
}
</style>
