<template>
    <div class="app-Login">
        <div class="container">
            <div class="head">
                <img src="../../img/back.png">
                <span>登录</span>
                <router-link to="/register" class="register">注册</router-link>
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
                <button class="login-btn" @click="butLogin">登录</button>
                <div class="link">
                    <a>快速登录</a>
                    <a>忘记密码</a>
                </div>
            </div>
            <div class="read">
                <div>
                    <img src="../../img/agree.png">
                    <span>我已阅读并同意<a href="http://m.citic-mall.com/currency/h5-index-AccProtocol#">《中信联盟用户注册协议》</a></span>
                </div>
                <span>登录代表阅读并同意<a href="http://m.citic-mall.com/currency/h5-index-PrivacyPolicy">《隐私相关政策》</a></span>
            </div>
        </div>
    </div>
</template>
<script>
import {Toast} from "mint-ui"
export default {
    data(){
        return{
            phoneMsg:"",
            upwdMsg:""
        }
    },
    methods:{
        butLogin(){
            var phone=this.phoneMsg
            var upwd=this.upwdMsg
            var reg=/^1[34578]\d{9}$/;
            if(!reg.test(phone)){
                Toast("手机号码格式不正确，请检查");
                return;
            }
            var url="http://127.0.0.1:3000/Login?phone="+phone+"&upwd="+upwd;
            this.axios.get(url).then(result=>{
                //console.log(result.data.code)
                if(result.data.code==1)
                this.$router.push("/Home")
                else
                Toast("手机号码或密码错误请重新输入")
                this.phoneMsg=""
                this.upwdMsg=""
            })
        }
    },
    created() {
    },
}
</script>
<style lang="">
.app-Login{
    background-color:#fff;
}
.app-Login .container{
    position:relative;
}

.container .head{
    padding:20px;
    display:flex;
    justify-content:space-between;
}
.container .head img{
    width:20px;
    height:20px;
}
.container .head .register{
    color:#d7000f;
}

.app-Login .inputbox{
    padding:40px 25px;
    font-size:15px;
    color:#333;
}
.app-Login .inputbox .uname,.app-Login .inputbox .upwd{
    vetical-align:middle;
    position:relative;
}
.app-Login .inputbox .uname label,.app-Login .inputbox .upwd label{
    float:left;
    margin-top:10px;
    position:absolute;
}
.app-Login .inputbox .uname input,.app-Login .inputbox .upwd input{
    padding-left:60px;
    border:none;
    border-bottom:1px solid #eee;
    font-size:15px;
}
.app-Login .btn-box{
    padding:0 30px;
}
.app-Login .login-btn{
    width:100%;
    height:40px;
    border:none;
    background-color:#d7000f;
    color:white;
    font-size:18px;
    border-radius:5px;
}
.app-Login .link{
    display:flex;
    padding:10px 0;
    font-size:13px;
    color:#333;
    justify-content:space-between;
}
.app-Login .link a{
    color:#333;
}
.app-Login .read{
    font-size:12px;
    color:#666;
    text-align:center;
    vetical-align:middle;
    padding:200px 20px 50px;
}
.app-Login .read img{
    width:15px;
    height:15px;
    display:inline-block;
    margin-top:5px;
}
.app-Login .read a{
    color:#d7000f;
}
.app-Login .read>div{
    margin-bottom:10px;
}
</style>