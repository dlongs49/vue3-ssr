/*
* Author:dillonl
* DateTime:2022/9/23 下午 10:43
*/
import {createRouter as _createRrouter,createWebHistory,createMemoryHistory} from "vue-router";
const routes = [{
    path:'/',
    name:'home',
    component:()=> import("../views/home/index.vue")
},{
    path:'/news',
    name:'news',
    component:()=> import("../views/news/index.vue")
}]
export function createRouter() {
    return _createRrouter({
        history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
        routes
    })
}
