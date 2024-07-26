import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './style.css'
import App from './App.vue'
import router from './routes'

createApp(App)
.use(router)
.mount('#app')
