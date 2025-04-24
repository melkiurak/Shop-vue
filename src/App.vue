<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/Header/AppHeader.vue'
import { useQuery } from '@vue/apollo-composable'
import { GET_CATEGORYS, GET_PRODUCTS, GET_SUB_CATEGORYS } from './server/data'
import type { GetProductsData } from './types/products'
const { result: productsResult } = useQuery<GetProductsData>(GET_PRODUCTS)
const { result: categoriesResult } = useQuery<GetProductsData>(GET_CATEGORYS)
const { result: subCategoryResult } = useQuery<GetProductsData>(GET_SUB_CATEGORYS)
</script>
<template>
  <div>
    <AppHeader
      :product="productsResult?.products"
      :category="categoriesResult?.categories"
      :subCategory="subCategoryResult?.subCategory"
    />
    <main>
      <RouterView v-slot="{ Component }">
        <component :is="Component" :product="productsResult?.products"></component>
      </RouterView>
    </main>
  </div>
</template>
