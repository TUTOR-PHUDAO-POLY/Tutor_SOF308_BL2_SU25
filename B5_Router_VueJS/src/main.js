import { createApp } from 'vue'
import App from './App.vue'
import a1 from './router/router'

// createApp(App).mount('#app')
const app1 = createApp(App)
// viet o giua : dang ky bat cu cai gi: Component toan cau, router
app1.use(a1)
app1.mount('#app')
