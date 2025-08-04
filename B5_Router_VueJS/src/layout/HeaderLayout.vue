<template>
  <header>
    <!-- <a href=""></a> -->
    <!-- Thay the the a => RouterLink: vue-router -->
    <RouterLink to="/dong-ho"><span>Trang chủ</span></RouterLink>
    <RouterLink to="/page"><span>Content</span></RouterLink>
    <RouterLink :to="`/about/${id}`"><span>About</span></RouterLink>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
const id = ref(10)
</script>

<style scoped>
header {
  display: flex;
  justify-content: center;
  gap: 30px;
}
span {
  font-weight: bold;
  font-size: 20px;
}
</style>
