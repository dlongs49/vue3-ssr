import { createSSRApp  } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter} from './router/index.js'
export function  createApp(){
    const vm = createSSRApp(App)
    const router = createRouter()
    vm.use(router)
    return { vm, router }
}
