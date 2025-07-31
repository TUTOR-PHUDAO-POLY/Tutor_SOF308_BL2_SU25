<template>
  <div>
    <h1>On tap ve vong lap</h1>
    <table class="table container">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Ma</th>
          <th scope="col">Ten</th>
          <th scope="col">Chuc vụ</th>
          <th scope="col">Lương</th>
          <th scope="col">Kinh nghiệm</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, index) in listNhanVien" :key="item.id">
          <tr>
            <td>{{ index + 1 }}</td>
            <td>{{ item.ma }}</td>
            <td>{{ item.ten }}</td>
            <td>{{ item.chucVu }}</td>
            <td>{{ item.luong }}</td>
            <td>{{ item.kinhNghiem }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
  <div class="container">
    <h1>Tính toán</h1>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Number 1</label>
      <input type="text" class="form-control" v-model="numberFirst" />
    </div>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Number 2</label>
      <input type="text" class="form-control" v-model="numberSecond" />
    </div>
    <button type="button" class="btn btn-outline-primary" @click="tinhTong">Tổng</button>
    <button type="button" class="btn btn-outline-secondary">Hiệu</button>
    <button type="button" class="btn btn-outline-success">Tích</button>
    <button type="button" class="btn btn-outline-warning">Thương</button>
    <br />
    <br />
    <label for="exampleFormControlInput1" class="form-label">Kết quả:{{ ketQua }} </label>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const numberFirst = ref(0)
const numberSecond = ref(0)
const ketQua = ref(0)
function tinhTong() {
  ketQua.value = Number(numberFirst.value) + Number(numberSecond.value)
}
const listNhanVien = ref([
  {
    ma: 'ma 1',
    ten: 'ten 1',
    chucVu: 'chucVu 1',
    luong: 63,
    kinhNghiem: 99,
    id: '1',
  },
  {
    ma: 'ma 2',
    ten: 'ten 2',
    chucVu: 'chucVu 2',
    luong: 21,
    kinhNghiem: 57,
    id: '2',
  },
  {
    ma: 'ma 3',
    ten: 'ten 3',
    chucVu: 'chucVu 3',
    luong: 51,
    kinhNghiem: 4,
    id: '3',
  },
  {
    ma: 'ma 4',
    ten: 'ten 4',
    chucVu: 'chucVu 4',
    luong: 3,
    kinhNghiem: 87,
    id: '4',
  },
  {
    ma: 'ma 5',
    ten: 'ten 5',
    chucVu: 'chucVu 5',
    luong: 37,
    kinhNghiem: 6,
    id: '5',
  },
  {
    ma: 'ma 6',
    ten: 'ten 6',
    chucVu: 'chucVu 6',
    luong: 65,
    kinhNghiem: 63,
    id: '6',
  },
  {
    ma: 'ma 7',
    ten: 'ten 7',
    chucVu: 'chucVu 7',
    luong: 28,
    kinhNghiem: 39,
    id: '7',
  },
  {
    ma: 'ma 8',
    ten: 'ten 8',
    chucVu: 'chucVu 8',
    luong: 74,
    kinhNghiem: 42,
    id: '8',
  },
  {
    ma: 'ma 9',
    ten: 'ten 9',
    chucVu: 'chucVu 9',
    luong: 69,
    kinhNghiem: 13,
    id: '9',
  },
  {
    ma: 'ma 10',
    ten: 'ten 10',
    chucVu: 'chucVu 10',
    luong: 75,
    kinhNghiem: 40,
    id: '10',
  },
  {
    ma: 'ma 11',
    ten: 'ten 11',
    chucVu: 'chucVu 11',
    luong: 76,
    kinhNghiem: 78,
    id: '11',
  },
  {
    ma: 'ma 12',
    ten: 'ten 12',
    chucVu: 'chucVu 12',
    luong: 84,
    kinhNghiem: 89,
    id: '12',
  },
  {
    ma: 'ma 13',
    ten: 'ten 13',
    chucVu: 'chucVu 13',
    luong: 68,
    kinhNghiem: 85,
    id: '13',
  },
  {
    ma: 'ma 14',
    ten: 'ten 14',
    chucVu: 'chucVu 14',
    luong: 99,
    kinhNghiem: 56,
    id: '14',
  },
  {
    ma: 'ma 15',
    ten: 'ten 15',
    chucVu: 'chucVu 15',
    luong: 64,
    kinhNghiem: 81,
    id: '15',
  },
  {
    ma: 'ma 16',
    ten: 'ten 16',
    chucVu: 'chucVu 16',
    luong: 69,
    kinhNghiem: 69,
    id: '16',
  },
  {
    ma: 'ma 17',
    ten: 'ten 17',
    chucVu: 'chucVu 17',
    luong: 99,
    kinhNghiem: 36,
    id: '17',
  },
  {
    ma: 'ma 18',
    ten: 'ten 18',
    chucVu: 'chucVu 18',
    luong: 69,
    kinhNghiem: 76,
    id: '18',
  },
  {
    ma: 'ma 19',
    ten: 'ten 19',
    chucVu: 'chucVu 19',
    luong: 71,
    kinhNghiem: 91,
    id: '19',
  },
])
</script>

<style scoped>
h1 {
  text-align: center;
}
button {
  margin-right: 30px;
}
</style>
