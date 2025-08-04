<script setup>
import FooterLayout from './layout/FooterLayout.vue'
import HeaderLayout from './layout/HeaderLayout.vue'
</script>

<template>
  <HeaderLayout />
  <!-- Noi dung thay doi o giua -->
  <RouterView />
  <FooterLayout />
</template>

<style scoped></style>
