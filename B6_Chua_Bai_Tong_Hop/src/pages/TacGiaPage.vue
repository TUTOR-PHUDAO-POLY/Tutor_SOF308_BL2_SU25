<template>
  <main class="container">
    <h1>Quản lý tác giả</h1>

    <FormTacGiaComponent v-model:tacGia="newTacGia" :errors="errors" />

    <section class="section-button">
      <button
        type="button"
        class="btn btn-outline-success"
        v-if="idUpdate == -1"
        @click="addTacGia"
      >
        Add
      </button>
      <button type="button" class="btn btn-outline-primary" v-else @click="updateTacGia">
        Update
      </button>
    </section>

    <section class="my-3 d-flex gap-2 align-items-center">
      <label>Search</label>
      <input class="form-control" placeholder="Nhập tên tác giả cần tìm..." v-model="inputSearch" />
      <button type="button" class="btn btn-secondary" @click="searchNhanVien()">Search</button>
    </section>

    <section>
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Tên</th>
            <th>Giới tính</th>
            <th>Địa chỉ</th>
            <th>Tuổi</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(item, i) in listTacGia" :key="item.id">
            <tr>
              <td>{{ i + 1 }}</td>
              <td>{{ item.ten }}</td>
              <td>{{ item.gioiTinh ? 'Nam' : 'Nữ' }}</td>
              <td>{{ item.diaChi }}</td>
              <td>{{ item.tuoi }}</td>
              <td>
                <section class="section-button2">
                  <button type="button" class="btn btn-outline-warning" @click="detailTacGia(item)">
                    Detail
                  </button>
                  <button type="button" class="btn btn-outline-danger" @click="removeTacGia(i)">
                    Remove
                  </button>
                </section>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import FormTacGiaComponent from '@/components/FormTacGiaComponent.vue'

const listTacGia = ref([
  { ten: 'ten 1', gioiTinh: true, diaChi: 'diaChi 1', tuoi: 76, id: '1' },
  { ten: 'ten 2', gioiTinh: false, diaChi: 'diaChi 2', tuoi: 31, id: '2' },
  { ten: 'ten 3', gioiTinh: false, diaChi: 'diaChi 3', tuoi: 77, id: '3' },
  { ten: 'ten 4', gioiTinh: false, diaChi: 'diaChi 4', tuoi: 96, id: '4' },
  { ten: 'ten 5', gioiTinh: false, diaChi: 'diaChi 5', tuoi: 60, id: '5' },
  { ten: 'ten 6', gioiTinh: false, diaChi: 'diaChi 6', tuoi: 59, id: '6' },
])

const newTacGia = ref({ ten: '', gioiTinh: true, diaChi: '', tuoi: 0 })
const idUpdate = ref(-1)

const errors = ref({ ten: '', gioiTinh: '', diaChi: '', tuoi: '' })
const clearErrors = () => {
  errors.value = { ten: '', gioiTinh: '', diaChi: '', tuoi: '' }
}

const validateTacGia = () => {
  clearErrors()
  const t = newTacGia.value

  if (!t.ten || !t.ten.trim()) errors.value.ten = 'Vui lòng nhập tên'
  if (!t.diaChi || !t.diaChi.trim()) errors.value.diaChi = 'Vui lòng nhập địa chỉ'

  const tuoiNum = Number(t.tuoi)
  if (!Number.isInteger(tuoiNum) || tuoiNum < 0 || tuoiNum > 120)
    errors.value.tuoi = 'Tuổi phải là số nguyên từ 0 đến 120'

  if (typeof t.gioiTinh !== 'boolean') errors.value.gioiTinh = 'Giới tính không hợp lệ'

  return !errors.value.ten && !errors.value.diaChi && !errors.value.tuoi && !errors.value.gioiTinh
}

const resetData = () => {
  newTacGia.value = { ten: '', gioiTinh: true, diaChi: '', tuoi: 0 }
  clearErrors()
}

const addTacGia = () => {
  if (!validateTacGia()) return
  listTacGia.value.push({ id: String(listTacGia.value.length + 1), ...newTacGia.value })
  resetData()
}

const updateTacGia = () => {
  if (!validateTacGia()) return
  listTacGia.value[idUpdate.value] = { ...newTacGia.value }
  resetData()
  idUpdate.value = -1
}

const removeTacGia = (i) => {
  listTacGia.value.splice(i, 1)
}

const detailTacGia = (tacGia) => {
  newTacGia.value = { ...tacGia }
  idUpdate.value = listTacGia.value.findIndex((b) => b.id === tacGia.id)
  clearErrors()
}

const inputSearch = ref('')
const listCopy = ref([...listTacGia.value])
const searchNhanVien = () => {
  const keyword = inputSearch.value.trim().toLowerCase()
  if (!keyword) {
    listTacGia.value = [...listCopy.value]
    return
  }
  listTacGia.value = listCopy.value.filter((nv) => nv.ten.toLowerCase().includes(keyword))
}
</script>

<style scoped>
h1 {
  text-align: center;
}
.section-button {
  display: flex;
  justify-content: space-around;
}
.section-button2 {
  display: flex;
  gap: 30px;
}
.my-3 {
  margin: 1rem 0;
}
.d-flex {
  display: flex;
}
.gap-2 {
  gap: 0.5rem;
}
.align-items-center {
  align-items: center;
}
</style>
