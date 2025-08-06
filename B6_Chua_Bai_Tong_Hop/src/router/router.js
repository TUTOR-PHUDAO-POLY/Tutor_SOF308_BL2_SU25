import AboutPage from '@/pages/AboutPage.vue'
import TacGiaPage from '@/pages/TacGiaPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
// B1: tao list router
const listRouter = [
  {
    path: '/tac-gia',
    nam: 'TrangTacGia',
    component: TacGiaPage,
    alias: '/',
  },
  {
    path: '/pages',
    nam: 'TrangPage',
    component: AboutPage,
  },
]
const router1 = createRouter({
  history: createWebHistory(),
  routes: listRouter,
})

export default router1
