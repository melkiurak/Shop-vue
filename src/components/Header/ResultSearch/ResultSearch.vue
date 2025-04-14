<template>
  <div class="result">
    <ul>
      <li v-for="(edge, index) in props.filteredProducts" :key="index">{{ edge.node.name }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  filteredProducts: { node: { name: string } }[]
}>()
</script>
<style scoped>
.result {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background: #00000080;
}
</style>
