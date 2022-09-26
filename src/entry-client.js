/*
* Author:dillonl
* DateTime:2022/9/23 下午 10:15
*/
import {createApp} from './main.js'
const { vm, router } = createApp()
router.isReady().then(() => {
    vm.mount('#app')
})
