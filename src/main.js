// import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import {createPinia} from 'pinia'
// import axios from 'axios'
// axios.defaults.baseURL = 'https://qqlykm.cn'
import '@/apis/request/index.js'
// console.log(request);
const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
// app.provide('setThemeColor','#42b883aa')
// app.config.globalProperties.$http = axios
app.mount('#app')
