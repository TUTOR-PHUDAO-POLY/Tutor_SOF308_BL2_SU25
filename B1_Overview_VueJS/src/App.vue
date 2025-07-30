<!-- Cau truc cua 1 file Vue gom 3
 thanh phan :
 Chua giao dien: template => html
 Chua logic: script setup => js
 Chua lam dep CSS => style 
  -->
<template>
  <div>
    <h1>Buoi 1 - Overview Vue JS</h1>
    <!-- Cu phap noi suy van ban: {{  }} -->
    Number: {{ number }}
    <!-- {{ btn }} -->
    <!-- Nhung HTML: v-html -->
    <div v-html="btn"></div>
    <div v-html="tbl"></div>
  </div>
  <div>
    <h1>Data binding</h1>
    <!-- v-on:ten sk = ten ham -->
    <button v-on:click="click1">Click me</button>
    <!-- cach viet nhanh @ten sk -->
    <button @click="click2">Click me2</button>
    <!-- v-bind -->
    <button v-bind:id="idButton" v-bind:class="classButton">Test</button>
    <button :id="idButton" :class="classButton">Test1</button>
  </div>
  <div>
    <h1>Nhung Boostrap</h1>
    <!--
    C1: Link cdn 
    C2: Nhu slide 
    C3: vue-boostrap -->
    <button type="button" class="btn btn-outline-primary">Primary</button>
    <button type="button" class="btn btn-outline-secondary">Secondary</button>
    <button type="button" class="btn btn-outline-success">Success</button>
    <button type="button" class="btn btn-outline-danger">Danger</button>
    <button type="button" class="btn btn-outline-warning">Warning</button>
    <button type="button" class="btn btn-outline-info">Info</button>
    <button type="button" class="btn btn-outline-light">Light</button>
    <button type="button" class="btn btn-outline-dark">Dark</button>
  </div>
  <div>
    <h1>Ref & Reactive</h1>
    <h2>Thong tin SV</h2>
    <p>Ma SV: {{ sinhVien1.ma1 }}</p>
    <p>Ten SV: {{ sinhVien1.ten }}</p>
    <p>Tuoi SV: {{ sinhVien1.tuoi }}</p>
    <p>Gioi tinh SV: {{ sinhVien1.gioiTinh }}</p>
    <p>Dia chi SV: {{ sinhVien1.diaChi }}</p>
    <h2>Thong tin may tinh</h2>
    <p>Ma mt: {{ mayTinh.ma }}</p>
    <p>Ten mt: {{ mayTinh.ten }}</p>
    <p>Mau sac mt: {{ mayTinh.mauSac }}</p>
    <p>Gia mt: {{ mayTinh.gia }}</p>
    <p>Ngay san xuat mt: {{ mayTinh.ngaySanXuat }}</p>
  </div>
  <div>
    <h1>V-model</h1>
    Nhap ten: <input type="text" v-model="mess" />
    <p>Ten vua nhap la: {{ mess }}</p>
  </div>
  <div>
    <h1>Sk</h1>
    <button @click="increaseValue">Increase</button>
    <button @click="descreaseValue">Decrease</button>
    <p>Count = {{ count }}</p>
  </div>
  <div>
    <h1>Vong lap</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Ma</th>
          <th scope="col">Ten</th>
          <th scope="col">Gioi tinh</th>
          <th scope="col">Tuoi</th>
          <th scope="col">Dia chi</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, index) in listSinhVien" :key="item.ma">
          <tr>
            <td>{{ index + 1 }}</td>
            <td>{{ item.ma }}</td>
            <td>{{ item.ten }}</td>
            <td>{{ item.gioiTinh }}</td>
            <td>{{ item.tuoi }}</td>
            <td>{{ item.diaChi }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
function increaseValue() {
  // console.log(count.value)
  count.value++
}
function descreaseValue() {
  count.value--
}
const number = 5
const btn = '<button>Click me</button>'
const tbl = `<table class="table">
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
</table>`
function click1() {
  alert('Ban da click vao toi')
}
// arrow function (=>)
const click2 = () => {
  alert('Click 2')
}
const idButton = 'button'
const classButton = 'classs'
// 1. Tao 1 bien ref cua doi tuong SV  gom cac thuoc tinh: ma - String, ten String
// tuoi - number, gioiTinh - boolean, diaChi - String va hien thi thong tin sv len giao dien
// 2. Tao 1 bien ref cua doi tuong MayTinh gom cac thuoc tinh: ma - String, ten - String,
// mauSac- String, gia - Number, ngaySanXuat - date va hien thi thong tin may tinh len giao dien
// 3. Tao 1 o input va 1 the p. Nhap gia tri vao o input thi  o duoi the p hien thi gia tri vua nhap
// 4. Tao 1 button Increase, button Descrease vaf 1 the the p hien thi gia tri.
// Bam vap increase gia tri cua bien count tang 1
// Bam vao descrease thi gia tri giam 1 don vi
// 5. Tao 1 danh sach doi tuong SV  gom cac thuoc tinh: ma - String, ten String
// tuoi - number, gioiTinh - boolean, diaChi - String va hien thi danh sach thong tin sv len giao dien
// Quay lai bai trong file
const sinhVien1 = ref({
  ma1: 'SV01',
  ten: 'Nguyen Van A',
  tuoi: 10,
  gioiTinh: true,
  diaChi: 'Ha noi',
})
const mayTinh = ref({
  ma: 'MT01',
  ten: 'May tinh1',
  mauSac: 'Bac',
  gia: 100,
  ngaySanXuat: '15/05/2025',
})
const mess = ref('')
const listSinhVien = ref([
  {
    ma: 'SV01',
    ten: 'Ten 1',
    tuoi: 10,
    gioiTinh: true,
    diaChi: 'ha noi',
  },
  {
    ma: 'SV02',
    ten: 'Ten 2',
    tuoi: 11,
    gioiTinh: false,
    diaChi: 'ha noi1',
  },
  {
    ma: 'SV012',
    ten: 'Ten 12',
    tuoi: 110,
    gioiTinh: true,
    diaChi: 'ha noi',
  },
  {
    ma: 'SV011',
    ten: 'Ten 1',
    tuoi: 23,
    gioiTinh: true,
    diaChi: 'ha noi1',
  },
  {
    ma: 'SV101',
    ten: 'Ten 1',
    tuoi: 22,
    gioiTinh: true,
    diaChi: 'ha noi23',
  },
  {
    ma: 'SV013',
    ten: 'Ten 1',
    tuoi: 21,
    gioiTinh: false,
    diaChi: 'ha noiresdr',
  },
])
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
<!-- SFC: Single File Component: Moi thu vao 1 file(CSS, JS, HTML) -->
