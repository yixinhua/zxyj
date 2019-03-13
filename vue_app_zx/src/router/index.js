import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from "../components/tabbar/Home.vue"
import goodsinfo from "../components/goos/goodsinfo.vue"
import login from "../components/home/login.vue"
import type from "../components/goos/type.vue"
import register from "../components/home/register.vue"
import shopcart from "../components/home/shopcart.vue"
import loginout from "../components/home/loginout.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/Home',meta:{title:"中信易家-让生活更佳-移动版"}},
    {path:'/Home',component:Home,meta:{title:"中信易家-让生活更佳-移动版"}},
    {path:"/goodsinfo",component:goodsinfo,meta:{title:"商品详情-中信易家-移动版"}},
    {path:"/login",component:login,meta:{title:"登录-中信易家-移动版"}},
    {path:"/type",component:type,meta:{title:"中信易家-商品分类-移动版"}},
    {path:"/register",component:register,meta:{title:"注册-中信易家-移动版"}},
    {path:"/shopcart",component:shopcart,meta:{title:"购物车-中信易家-移动版"}},
    {path:"/loginout",component:loginout,meta:{title:"中信易家-退出-移动端"}}
  ]
})
