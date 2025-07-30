<template>
  <div>
    <h1>Buoi 2 - Vong lap</h1>
    <h1>Load duoi dang table</h1>
    <table class="table container">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Ma</th>
          <th scope="col">Ten</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, index) in listSanPham" :key="item.ma">
          <tr>
            <td>{{ index + 1 }}</td>
            <td>{{ item.ma }}</td>
            <td>{{ item.ten }}</td>
          </tr>
        </template>
      </tbody>
    </table>
    <h1>Load ul li</h1>
    <ul class="container">
      <template v-for="item in listSanPham" :key="item.ma">
        <li>{{ item.ma }} - {{ item.ten }}</li>
      </template>
    </ul>
    <h1>Load combobox - select & option</h1>
    <select class="form-select container" aria-label="Default select example">
      <template v-for="item in listSanPham" :key="item.ma">
        <option :value="item.ma">{{ item.ten }}</option>
      </template>
    </select>
    <h1>Quan ly nhan vien</h1>
    <div class="mb-3 container">
      <label for="exampleFormControlInput1" class="form-label">Search theo ten </label>
      <input type="text" class="form-control" v-model="searchText" />
    </div>

    <div class="container">
      <button type="button" @click="searchNhanVien" class="btn btn-outline-success">Search</button>
    </div>

    <table class="table container">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Mã</th>
          <th scope="col">Tên</th>
          <th scope="col">Tuổi</th>
          <th scope="col">Bậc</th>
        </tr>
      </thead>
      <tbody>
        <!-- Toan tu 3 ngoi, v-if, v-else-if, v-else, v-show  -->
        <template v-for="(item, index) in listNhanVien" :key="item.ma">
          <tr>
            <td>{{ index + 1 }}</td>
            <td>{{ item.ma }}</td>
            <td>{{ item.ten }}</td>
            <td>{{ item.tuoi }}</td>
            <td>{{ item.bac }}</td>
          </tr>
        </template>
      </tbody>
    </table>
    <h1>Loc ds nhan vien</h1>
    <table class="table container">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Mã</th>
          <th scope="col">Tên</th>
          <th scope="col">Tuổi</th>
          <th scope="col">Bậc</th>
        </tr>
      </thead>
      <tbody>
        <!-- Toan tu 3 ngoi, v-if, v-else-if, v-else, v-show  -->
        <template v-for="(item, index) in listNhanVien" :key="item.ma">
          <template v-if="item.tuoi > 20">
            <tr>
              <td>{{ index + 1 }}</td>
              <td>{{ item.ma }}</td>
              <td>{{ item.ten }}</td>
              <td>{{ item.tuoi }}</td>
              <td>{{ item.bac }}</td>
            </tr>
          </template>
        </template>
      </tbody>
    </table>
  </div>
</template>
<!--  
Nhan vien gom cac thuoc tinh: ma - String, ten - String, bac - number,
tuoi - number. 
1. Load du lieu danh sach Nhan vien len len table
2. Loc danh sach nhung nhan vien co tuoi > 20 
3. Tao trong giao dien them button Search, tao 1 o input search theo ten. 
-->
<script setup>
import { ref } from 'vue'

const listSanPham = ref([
  {
    ma: 'SP01',
    ten: 'San pham 1',
  },
  {
    ma: 'SP02',
    ten: 'San pham 2',
  },
  {
    ma: 'SP03',
    ten: 'San pham 3',
  },
  {
    ma: 'SP04',
    ten: 'San pham 4',
  },
  {
    ma: 'SP05',
    ten: 'San pham 5',
  },
])

const listNhanVien = ref([
  {
    ma: 'NV01',
    ten: 'Nhan vien 1',
    tuoi: 10,
    bac: 25,
  },
  {
    ma: 'NV06',
    ten: 'Nhan vien 6',
    tuoi: 18,
    bac: 5,
  },
  {
    ma: 'NV02',
    ten: 'Nhan vien 2',
    tuoi: 20,
    bac: 20,
  },
  {
    ma: 'NV03',
    ten: 'Nhan vien 3',
    tuoi: 30,
    bac: 30,
  },
  {
    ma: 'NV04',
    ten: 'Nhan vien 4',
    tuoi: 15,
    bac: 15,
  },
  {
    ma: 'NV05',
    ten: 'Nhan vien 5',
    tuoi: 17,
    bac: 17,
  },
])
const searchText = ref('')
const listCopy = ref([...listNhanVien.value]) // COPY LIST
// arrow function - ES5
// computed
const searchNhanVien = () => {
  // KHI SEARCH KHONG DUOC PHEP SEARCH TREN LIST CUA BIEN REF/REACTIVE (BIEN BAN DAU)
  const keyword = searchText.value.trim().toLowerCase()
  if (!keyword) {
    // k nhap gi
    listNhanVien.value = [...listCopy.value]
    return
  }
  // Bo sung if else dieu kien neu k ton tai thi la table rong
  // search
  listNhanVien.value = listCopy.value.filter((nv) => nv.ten.toLowerCase().includes(keyword))
}
function searchNhanVien1() {}
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
