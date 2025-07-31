<template>
  <header>
    <HeaderLayout />
  </header>
  <main class="container">
    <FormSachComponent />
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </main>
  <FooterLayout />
</template>

<script setup>
import FormSachComponent from '@/components/FormSachComponent.vue'
import FooterLayout from '@/layout/FooterLayout.vue'
import HeaderLayout from '@/layout/HeaderLayout.vue'
</script>

<style lang="scss" scoped></style>
