import { createApp } from 'vue'
import App from './App.vue'

import './style.css'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'


const app = createApp(App)

createApp(App).use(ElementPlus).use(router).mount('#app')
