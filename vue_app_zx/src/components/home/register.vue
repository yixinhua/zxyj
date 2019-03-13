<template>
    <div class="app-register">
        <div class="head">
                <img src="../../img/back.png">
                <router-link to="/Login" class="register">登录</router-link>
        </div>
          <div class="inputbox">
                <div class="uname">
                    <label>登录名</label>
                    <input type="text" placeholder="请输入手机号" v-model="phoneMsg">
                </div>
                <div class="upwd">
                    <label>密码</label>
                    <input type="password" placeholder="请输入密码" v-model="upwdMsg">
                </div>
            </div>
            <div class="btn-box">
                <button class="login-btn" @click="butLogin">注册</button> 
                </div>
            </div>
    </div>
</template>
<script>
import {Toast} from "mint-ui"
export default {
    data(){
        return{
            upwdMsg:"",
            phoneMsg:""
        }
    },
    methods:{
        butLogin(){
            var phone=this.phoneMsg
            var upwd=this.upwdMsg
            if(!phone){
                Toast("用户名不能为空")
                return
            }
            if(!upwd){
                Toast("密码不能为空")
                return
            }
            var url="http://127.0.0.1:3000/register?phone="+phone+"&upwd="+upwd
            this.axios.get(url).then(result=>{
                console.log(result)
                if(result.data.code==1){
                    Toast("注册成功")
                    this.$router.push("/Home")
                }else{
                    Toast("用户名已经存在")
                    this.upwdMsg=""
                    this.phoneMsg=""
                }
            })
        }
    }
}
</script>
<style lang="">
  .app-register{
    background-color:#fff;
}
.app-register .container{
    position:relative;
}

.head{
    padding:20px;
    display:flex;
    justify-content:space-between;
}
.head img{
    width:20px;
    height:20px;
}
.head .register{
    color:#d7000f;
} 
.app-register .inputbox{
    padding:40px 25px;
    font-size:15px;
    color:#333;
}
.app-register .inputbox .uname,.app-register .inputbox .upwd{
    vetical-align:middle;
    position:relative;
}
.app-register .inputbox .uname label,.app-register .inputbox .upwd label{
    float:left;
    margin-top:10px;
    position:absolute;
}
.app-register .inputbox .uname input,.app-register .inputbox .upwd input{
    padding-left:60px;
    border:none;
    border-bottom:1px solid #eee;
    font-size:15px;
}
.app-register .btn-box{
    padding:0 30px;
}
.app-register .login-btn{
    width:100%;
    height:40px;
    border:none;
    background-color:#d7000f;
    color:white;
    font-size:18px;
    border-radius:5px;
    margin-bottom:5px;
}
</style>