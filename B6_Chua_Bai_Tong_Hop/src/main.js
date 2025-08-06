import { createApp } from 'vue'
import App from './App.vue'
// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import router1 from './router/router'
// createApp(App).mount('#app')
const app = createApp(App)
// viet o giua
app.use(router1)
app.mount('#app')
