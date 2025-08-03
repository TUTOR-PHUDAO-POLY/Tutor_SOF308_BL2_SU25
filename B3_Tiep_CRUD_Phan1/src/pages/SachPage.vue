<template>
  <header>
    <HeaderLayout />
  </header>
  <main class="container">
    <!-- props => truyen gia tri 
     emit => truyen su kien 
     vue 3.4 + => v-model 
      -->
    <FormSachComponent v-model:b="newObject" />
    <button type="button" class="btn btn-outline-success" @click="addBook()" v-if="isUpdate == -1">
      Add
    </button>
    <button
      type="button"
      class="btn btn-outline-primary"
      v-if="isUpdate != -1"
      @click="updateBook()"
    >
      Update
    </button>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Tên</th>
          <th scope="col">Loại</th>
          <th scope="col">Tác giả</th>
          <th scope="col">Giá</th>
          <th scope="col">Chức năng</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(a, i) in sachList" :key="a.id">
          <tr>
            <td>{{ a.id }}</td>
            <td>{{ a.ten }}</td>
            <td>{{ a.loai }}</td>
            <td>{{ a.tac_gia }}</td>
            <td>{{ a.gia }}</td>
            <td>
              <!-- Neu muon xoa theo index => vfor => phai truyen index -->
              <button type="button" class="btn btn-outline-danger" @click="removeBook(i)">
                Remove
              </button>
              <!-- Detail => truyen vao 1 Object => doi tuong trong for -->
              <button type="button" class="btn btn-outline-warning" @click="detailBook(a)">
                Detail
              </button>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </main>
  <FooterLayout />
</template>

<script setup>
import FormSachComponent from '@/components/FormSachComponent.vue'
import FooterLayout from '@/layout/FooterLayout.vue'
import HeaderLayout from '@/layout/HeaderLayout.vue'
import { ref } from 'vue'
const newObject = ref({
  ten: '',
  loai: '',
  tac_gia: '',
  gia: 0,
})
const isUpdate = ref(1) // isUpdate khac -1 => Update con = -1 => Add
const sachList = ref([
  {
    ten: 'ten 1',
    loai: 'loai 1',
    tac_gia: 'tac_gia 1',
    gia: 82,
    id: '1',
  },
  {
    ten: 'ten 2',
    loai: 'loai 2',
    tac_gia: 'tac_gia 2',
    gia: 70,
    id: '2',
  },
  {
    ten: 'ten 3',
    loai: 'loai 3',
    tac_gia: 'tac_gia 3',
    gia: 94,
    id: '3',
  },
  {
    ten: 'ten 4',
    loai: 'loai 1',
    tac_gia: 'tac_gia 4',
    gia: 94,
    id: '4',
  },
  {
    ten: 'ten 5',
    loai: 'loai 1',
    tac_gia: 'tac_gia 5',
    gia: 11,
    id: '5',
  },
  {
    ten: 'ten 6',
    loai: 'loai 2',
    tac_gia: 'tac_gia 6',
    gia: 36,
    id: '6',
  },
])
function removeBook(i) {
  // Xoa 1 phan tu tai vi tri i
  // splice <=> remove trong Java
  sachList.value.splice(i, 1)
  // phan 1
  // phan 2 X
  // phan 3
}
function detailBook(item) {
  newObject.value = { ...item } // copy object item => newObject
  // lay ra id cua doi tuong item (doi tuong dang muon update)
  isUpdate.value = sachList.value.findIndex((b) => b.id === item.id)
  // for (let i = 0; i < sachList.value.length; i++) {
  //   if (sachList.value[i].id === item.id) {
  //     isUpdate.value = i
  //   }
  // }
}
function resetData() {
  newObject.value = {
    ten: '',
    loai: '',
    tac_gia: '',
    gia: 0,
  }
}
function addBook() {
  // validate
  sachList.value.push({
    id: sachList.value.length + 1,
    ...newObject.value,
  })
  resetData() // lam sach form
}
function updateBook() {
  sachList.value[isUpdate.value] = { ...newObject.value }
  // reset data
  resetData()
  isUpdate.value = -1 // De update xong thi button chuyen thanh button Add
}
</script>

<style scoped>
button {
  margin-right: 20px;
}
</style>
