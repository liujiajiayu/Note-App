import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';

import './index.css'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

import { registerSW } from 'virtual:pwa-register'

createApp(App).use(ElementPlus).use(router).use(store).mount('#app')
