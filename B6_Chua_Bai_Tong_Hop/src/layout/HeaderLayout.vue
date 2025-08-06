<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink to="/tac-gia"><span>Trang chủ</span></RouterLink>
              <!-- <a class="nav-link active" aria-current="page" href="#"><span>Trang chủ</span></a> -->
            </li>
            <li class="nav-item">
              <RouterLink to="/pages"><span>Pages</span></RouterLink>
              <!-- <a class="nav-link active" aria-current="page" href="#"><span>Pages</span></a> -->
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
span {
  font-weight: bold;
}
</style>
