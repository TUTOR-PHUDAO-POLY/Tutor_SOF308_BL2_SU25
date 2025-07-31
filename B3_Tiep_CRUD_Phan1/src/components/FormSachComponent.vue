<template>
  <section>
    <form>
      <h1>Quản lý sach</h1>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Tên</label>
        <input type="text" class="form-control" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Loại</label>
        <select class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Tác giả</label>
        <input type="text" class="form-control" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Giá</label>
        <input type="text" class="form-control" />
      </div>
      <button type="button" class="btn btn-success">Add</button>
      <button type="button" class="btn btn-warning">Update</button>
    </form>
  </section>
</template>

<script setup></script>

<style scoped>
h1 {
  text-align: center;
}
button {
  margin-right: 50px;
}
</style>
