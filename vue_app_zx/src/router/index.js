import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from "../components/tabbar/Home.vue"
import goodsinfo from "../components/goos/goodsinfo.vue"
import login from "../components/home/login.vue"
import type from "../components/goos/type.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/Home'},
    {path:'/Home',component:Home},
    {path:"/goodsinfo",component:goodsinfo},
    {path:"/login",component:login},
    {path:"/type",component:type}
  ]
})
