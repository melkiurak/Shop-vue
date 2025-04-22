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
    </nav>
  </div>
</template>

<script setup lang="ts">
import type { Categories } from '@/types/products'
import { AnOutlinedProduct, AkArrowRight } from '@kalimahapps/vue-icons'
const props = defineProps<{
  filteredProducts: { node: { name: string; category_id: { edges: { node: Categories }[] } } }[]
  searchTerm: string
}>()
const highlightInput = (text: string, searchTerm: string) => {
  const cleanedSearch = searchTerm.trim().replace(/\s+/g, ' ')
  const regex = new RegExp(`(${cleanedSearch})`, 'i')
  return text.replace(regex, `<span class="text-black">$1</span>`)
}
console.log(props.filteredProducts)
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
</style>
