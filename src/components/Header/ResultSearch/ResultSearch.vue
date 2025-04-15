<template>
  <div class="result">
    <nav class="result__nav">
      <ul class="result__nav-list">
        <h6>Поиск по названию</h6>
        <li class="result__nav-item" v-for="(edge, index) in props.filteredProducts" :key="index">
          <a href="">{{ edge.node.name }}</a>
        </li>
      </ul>
      <ul class="result__nav-list">
        <h6>Поиск по категории</h6>
        <li lass="result__nav-item" v-for="(edge, index) in props.filteredProducts" :key="index">
          <a href="">{{ edge.node.name }} {{ edge.node.category_id.name }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  filteredProducts: { node: { name: string; category_id: { name: string } } }[]
}>()
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
  a:hover {
    color: red;
    text-decoration: underline red;
    text-underline-offset: 4px;
  }
}
</style>
