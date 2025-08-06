<template>
  <section>
    <form @submit.prevent>
      <!-- Tên -->
      <div class="mb-3">
        <label class="form-label">Tên</label>
        <input
          type="text"
          class="form-control"
          v-model="tacGia.ten"
          :class="{ 'is-invalid': errors?.ten }"
          aria-invalid="true"
        />
        <div v-if="errors?.ten" class="invalid-feedback">{{ errors.ten }}</div>
      </div>

      <!-- Giới tính -->
      <div class="mb-3">
        <label class="form-label">Giới tính</label>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            id="genderMale"
            name="gender"
            :value="true"
            v-model="tacGia.gioiTinh"
          />
          <label class="form-check-label" for="genderMale">Nam</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            id="genderFemale"
            name="gender"
            :value="false"
            v-model="tacGia.gioiTinh"
          />
          <label class="form-check-label" for="genderFemale">Nữ</label>
        </div>
        <div>
          <small v-if="errors?.gioiTinh" class="text-danger">{{ errors.gioiTinh }}</small>
        </div>
      </div>

      <!-- Địa chỉ -->
      <div class="mb-3">
        <label class="form-label">Địa chỉ</label>
        <input
          type="text"
          class="form-control"
          v-model="tacGia.diaChi"
          :class="{ 'is-invalid': errors?.diaChi }"
          aria-invalid="true"
        />
        <div v-if="errors?.diaChi" class="invalid-feedback">{{ errors.diaChi }}</div>
      </div>

      <!-- Tuổi -->
      <div class="mb-3">
        <label class="form-label">Tuổi</label>
        <input
          type="text"
          class="form-control"
          v-model="tacGia.tuoi"
          :class="{ 'is-invalid': errors?.tuoi }"
          aria-invalid="true"
          inputmode="numeric"
        />
        <div v-if="errors?.tuoi" class="invalid-feedback">{{ errors.tuoi }}</div>
      </div>
    </form>
  </section>
</template>

<script setup>
const tacGia = defineModel('tacGia', {
  default: () => ({
    ten: '',
    gioiTinh: true,
    diaChi: '',
    tuoi: 0,
  }),
})

const props = defineProps({
  // Nhận object lỗi từ parent: { ten: '', gioiTinh: '', diaChi: '', tuoi: '' }
  errors: { type: Object, default: () => ({}) },
})
</script>

<style scoped>
.form-label {
  margin-right: 10px;
}
</style>
