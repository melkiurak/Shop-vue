<template>
  <div class="result">
    <nav class="result__nav">
      <ul class="result__nav-list">
        <li
          class="result__nav-item Label__Normal-Medium–14"
          v-for="(edge, index) in props.filteredProducts"
          :key="index"
        >
          <a href="">
            <span v-html="highlightInput(edge.node.name, searchTerm)"></span>
          </a>
        </li>
      </ul>
      <ul class="result__nav-list">
        <div class="list__title">
          <AnOutlinedProduct class="list__icons" />
          <p class="Label__Strong-Large-16">Поиск по категории</p>
        </div>
        <li class="result__nav-item" v-for="(edge, index) in props.filteredProducts" :key="index">
          <a href="">{{
            edge.node.category_id.edges.map((edge) => edge.node.name).join(', ') ||
            'Категория не доступна'
          }}</a>
          <AkArrowRight class="result__icons" />
        </li>
      </ul>
      <ul class="result__nav-list-product">
        <li
          class="result__nav-product"
          v-for="(edge, index) in props.filteredProducts"
          :key="index"
        >
          <a href="" class="result__nav-product-info">
            <img
              class="result__img-product"
              :src="edge.node.image_url || 'У него нет фото'"
              alt=""
            />
            <span>{{ edge.node.name }}</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import type { Categories } from '@/types/products'
import { AnOutlinedProduct, AkArrowRight } from '@kalimahapps/vue-icons'
const props = defineProps<{
  filteredProducts: {
    node: {
      name: string
      category_id: { edges: { node: Categories }[] }
      image_url: string
    }
  }[]
  searchTerm: string
}>()
const highlightInput = (text: string, searchTerm: string) => {
  const cleanedSearch = searchTerm.trim().replace(/\s+/g, ' ')
  const regex = new RegExp(`(${cleanedSearch})`, 'i')
  return text.replace(regex, `<span class="text-black">$1</span>`)
}
</script>
<style scoped>
.result {
  width: 100%;
  background-color: #ffffff;
  border-radius: 4px;
}
.result__nav {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-bottom: 12px;
}
.result__nav-list {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.result__nav-item {
  display: flex;
  align-items: center;
  padding: 12px 12px 12px 24px;
  a {
    color: #060f42;
  }
  span {
    color: #999999;
  }
}
.result__nav-item:hover {
  background-color: #060f4205;
}
.list__title {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #060f42;
  padding-left: 12px;
}
.list__icons {
  font-size: 20px;
}
.result__icons {
  margin-left: auto;
  font-size: 24px;
}
.result__nav-list-product {
  display: flex;
  gap: 22px;
  padding: 0 12px;
}
.result__nav-product {
  padding: 8px;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
.result__nav-product-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  span {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    color: #333333;
  }
}
.result__img-product {
  width: 80px;
  height: 80px;
}
</style>
