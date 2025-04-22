<template>
  <div class="result">
    <nav class="result__nav">
      <ul class="result__nav-list">
        <li
          class="result__nav-item Label__Normal-Medium–14"
          v-for="(edge, index) in props.filteredProducts"
          :key="index"
        >
          <span v-html="highlightInput(edge.node.name, searchTerm)"></span>
        </li>
      </ul>
      <ul class="result__nav-list">
        <div class="list__title">
          <AnOutlinedProduct class="list__icons" />
          <p class="Label__Strong-Large-16">Поиск по категории</p>
        </div>
        <li lass="result__nav-item" v-for="(edge, index) in props.filteredProducts" :key="index">
          <a href="">{{ edge.node.name || '' }} {{ edge.node.category_id.name || '' }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { AnOutlinedProduct } from '@kalimahapps/vue-icons'
const props = defineProps<{
  filteredProducts: { node: { name: string; category_id: { name: string } } }[]
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
  position: absolute;
  top: 78px;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  border-radius: 4px;
}
.result__nav {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px 20px;
}
.result__nav-list {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.result__nav-item {
  a {
    color: #060f42;
  }
  a:hover {
    color: red;
    text-decoration: underline red;
    text-underline-offset: 4px;
  }
  span {
    color: #999999;
  }
}
.list__title {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #060f42;
}
.list__icons {
  color: #060f42;
  font-size: 20px;
}
</style>
