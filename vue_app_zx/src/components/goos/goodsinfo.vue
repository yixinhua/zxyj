<template>
    <div class="app-goods">
        <div class="search">
            <input type="text" placeholder="搜索商品,了解更多" v-model="key">
                <img src="../../img/search.png" class="sicon1">
                <img src="../../img/xiaoxi@2x.png" class="sicon2" @click="search">
            </input>  
        </div>
        <!--<div class="search" style="margin-top:50px;">
            <p v-for="item in rows" :key="item.id">{{item.title}}</p>
        </div>-->
        <div style="margin-top:1rem;" class="container">
            <img :src="info.img_url">
        </div>
        <div class="wrpbox">
            <div class="wrpname">
                {{info.title}}
            </div>
            <div class="wrpdetail">{{info.subtitle}}</div>
            <div class="wrpprice"><p>￥{{info.price}}</p></div>
        </div>
        <button class="btn1" @click="addcart">加入购物车</button>
        <button class="btn1" @click="go">进入购物车</button>
    </div>
</template>
<script>
import {Toast} from "mint-ui"
export default {
    data(){
        return{
            info:{},
            id:this.$route.query.id,
            key:"",
            rows:{}
        }
    },
    methods:{
        findproduct(){
            var url="http://127.0.0.1:3000/findproduct?id="+this.id;
            this.axios.get(url).then(result=>{
                this.info=result.data.data[0]
            })
        },
        search(){
            var key=this.key
            var url="http://127.0.0.1:3000/find?key="+key
            this.axios.get(url).then(result=>{
                this.rows=result.data.data
                this.key=""
            })
        },
        addcart(){
            var id=this.id
            var price=this.info.price
            var img_url=this.info.img_url
            var title=this.info.title
            var url="http://127.0.0.1:3000/addcart?id="+id+"&price="+price+"&img_url="+img_url+"&title="+title
            this.axios.get(url).then(result=>{
                console.log(result)
                if(result.data.code==1){
                    Toast("添加成功")
                }else{
                    Toast("请登录")
                }
            })
        },
        go(){
            this.$router.push("/shopcart")
        }
    },
    created() {
        this.findproduct();
    },
}
</script>
<style lang="">
html{
    font-size:50px;
}
.app-goods .search{
    position:fixed;
    width:100%;
    height:50px;
    top:0;
    background:#fff;
    z-index:999;
}
.app-goods .search input{
    width:80%;
    height:64%;
    background:#eee;
    border-radius:5px;
    margin-left:28px;
    margin-top:8px;
    padding-left:42px;
    font-size:14px;
    color:#999;
    border:0; 
    position:relative;
}
.sicon1{
    position:absolute;
    top:30%;
    left:10%;
    height:40%;
}
.sicon2{
    position:absolute;
    top:24%;
    height:47%;
    width:7%;
    left:90%;
}
/*搜索 */
.search p{
    text-align:center;
    font-size:24px;
    font-weight:bold;
}
body{
    background:#fff;
}
.container{
    width:100%;
    height:7.5rem;
}
.container img{
    width:100%;
    height:100%;
}
.wrpbox{
    padding: .21rem 0 .3rem .24rem;
}
.wrpname{
    height: auto;
    max-height: .88rem;
    line-height: .44rem;
    font-size: .32rem;
    font-weight: 600;
    padding-right: 0.3rem;
    color: #333;
    overflow:hidden;
}
.wrpdetail{
    padding: 0;
    padding-right: .3rem;
    margin-top: .1rem;
    color: #666;
    font-size: .26rem;
    max-height: .72rem;
    /* display: -webkit-box; */
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    line-height:0.36rem;
}
.wrpprice{
    height: .46rem;
    margin-top: .32rem;
}
.wrpprice p{
    font-size: .46rem;
    color: #d7000f;
    margin-right: 0.2rem;
}
.btn1{
    background: #F6A623;
    display: inline-block;
    width: 50%;
    height: 0.98rem;
    text-align: center;
    line-height: 0.98rem;
    font-size: 0.32rem;
    color: #fff;
    float:right
    ;
}
</style>