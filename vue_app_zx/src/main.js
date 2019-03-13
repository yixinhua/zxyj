// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vuex from 'vuex' 
//注册Vuex组件
Vue.use(Vuex)
//创建store
var store=new Vuex.Store({
  state:{
      cartCount:sessionStorage.getItem("cartCount")//共享数据，购物车中商品数量
  },
  mutations:{
      increment(state){
        state.cartCount++;
      },
      //显示购物车列表时
      updateCount(state,count){
        state.cartCount=count;
        sessionStorage.setItem("cartCount",count);
      },    
  },
  getters:{
    //获取购物车中数量方法
    optCartCount:function(state){
      return state.cartCount;
    }
  }
})
//引入mint-ui组件库
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
Vue.use(Mint)

/* eslint-disable no-new */
//引入elemt-ui组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//5引入axios库   52
import axios from "axios"
//6配置跨域访问保存session
axios.defaults.withCredentials=true;
//7将axios库配置Vue实例对象中
Vue.prototype.axios=axios;
//7.1加载qs模块
import qs from "qs"
//7.2配置qs模块成为Vue属性
Vue.prototype.qs=qs;
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})