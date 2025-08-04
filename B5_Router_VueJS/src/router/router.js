// B1: Liet ke 1 mang chua cac duong dan va noi dung cua tung duong dan
// /dong-ho => DongHoPage
// /page => ContentPage
// /about => AboutPage

import AboutPage from '@/pages/AboutPage.vue'
import ContentPage from '@/pages/ContentPage.vue'
import DongHoPage from '@/pages/DongHoPage.vue'
import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

const listRouter = [
  {
    path: '/dong-ho',
    name: 'TrangDongHo',
    component: DongHoPage,
    alias: '/', // Duong dan / cung co the hien thi noi dung cua DongHoPage
  },
  {
    path: '/page',
    name: 'TrangPage',
    component: ContentPage,
  },
  // Router co truyen tham so tren duong dan : tham so /:ten tham so
  {
    path: '/about/:id1',
    name: 'AboutPage',
    component: AboutPage,
  },
  //   {
  //     path: '/',
  //     name: 'TrangChuPage',
  //     component: DongHoPage,
  //   },
]
const a1 = createRouter({
  // createMemoryHistory : Nho duong dan tren trinh duyet
  history: createWebHistory(),
  routes: listRouter,
})
export default a1
