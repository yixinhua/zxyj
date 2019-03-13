<template>
    <router-link to="/Home">回到首页</router-link>
</template>
<script>
import {Toast} from "mint-ui"
export default {
    data(){
        return{}
    },
    methods:{
        loginout(){
            var url="http://127.0.0.1:3000/logout"
            this.axios.get(url).then(result=>{
                Toast("已退出")
            })
        }
    },
    created(){
        this.loginout()
    },
}
</script>