<script setup>
import { RouterView } from 'vue-router'
import FooterLayout from './layout/FooterLayout.vue'
import HeaderLayout from './layout/HeaderLayout.vue'
import TacGiaPage from './pages/TacGiaPage.vue'
</script>

<template>
  <HeaderLayout />
  <!-- <TacGiaPage /> -->
  <RouterView />
  <FooterLayout />
</template>

<style scoped></style>
