<template>
  <section>
    <form>
      <h1>Quản lý sach</h1>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Tên</label>
        <input type="text" class="form-control" v-model="b.ten" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Loại</label>
        <select class="form-select" aria-label="Default select example" v-model="b.loai">
          <option selected>Open this select menu</option>
          <option value="loai 1">One</option>
          <option value="loai 2">Two</option>
          <option value="loai 3">Three</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Tác giả</label>
        <input type="text" class="form-control" v-model="b.tac_gia" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Giá</label>
        <input type="text" class="form-control" v-model="b.gia" />
      </div>
    </form>
  </section>
</template>

<script setup>
// Goi model
defineModel('b', {
  default: () => ({
    // liet ke cac thuoc tinh cua doi tuong b
    ten: '',
    loai: '',
    tac_gia: '',
    gia: 0,
  }),
})
// defineModel('b', {
//   default: () => ({ ten: '', loai: '', tac_gia: '', gia: 0 }),
// })
</script>

<style scoped>
h1 {
  text-align: center;
}
button {
  margin-right: 50px;
}
</style>
