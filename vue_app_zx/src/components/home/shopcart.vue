<template>
    <div class="app-shopCart">
        <div class="container">
            <div class="head">
                <img src="../../img/back.png">
                <span>购物车</span>
                <router-link to="/login">登录</router-link>
            </div>
        </div>
        <div class="cartlist">
            <div class="shopname">
                <input type="checkbox" class="cbn" @click="selectAll" :checked="allcb">
                <span>宝航专营店</span>
                <img src="../../img/into.png">
            </div>
            <div class="cart-content" v-for="(item,i) of rows" :key="item.uid">
                <input type="checkbox" :checked="item.cb" @click="modifyitem" :data-i="i">
                <div class="cart-img">
                    <img :src="item.img_url">
                </div>
                <div class="cart-details"> 
                    <div class="title">{{item.title}}</div>
                    <div class="normal">默认规格</div>
                    <div class="num-flex">
                        <div class="price">￥{{item.price}}</div>
                        <div class="numbox">
                            <button class="less" type="button">-</button>
                            <input type="number" value="1" v-model="item.count"/>
                            <button class="add" type="button">+</button>
				        </div>
                        <button @click="delItem" :data-idx="i">删除</button>
                    </div>
                </div>
            </div>
        </div>
        <div style="height:50px;"></div>
    </div>
</template>
<script>
import {Toast} from "mint-ui"
export default {
    data(){
        return{
            rows:[],
            allcb:false,
        }
    },
    methods:{
        cartlist(){
            var url="http://127.0.0.1:3000/cartlist"
            this.axios.get(url).then(result=>{
                if(result.data.code==-1){
                    Toast("请登录")
                    this.$router.push("/login")
                }
                var list=result.data.data
                this.$store.commit("updateCount",list.length)
                for(var item of list){
                    item.cb=false
                }
                this.rows=list
            })
        },
        selectAll(e){
            var cb=e.target.checked
            this.allcb=cb
            for(var item of this.rows){
                item.cb=cb
            }
        },
        modifyitem(e){
            var idx=e.target.dataset.i
            var checked=e.target.checked;
            this.rows[idx].cb=checked;
            var count=0
            for(var item of this.rows){
                if(item.cb){
                    count++
                }
            }
            if(count==this.rows.length){
                this.allcb=true
            }else{
                this.allcb=false
            }
        },
        delItem(e){
            var id=e.target.dataset.id
            var idx=e.target.dataset.idx
            var url="http://127.0.0.1:3000/delCartItem?id="+id;
            this.axios.get(url).then(result=>{
                if(result.data.code==1){
                    Toast("删除成功")
                    this.rows.splice(idx,1)
                }
            })
        },
        removeItem(e){
            var html=""
            for(var item of this.rows){
                if(item.cb){
                    html+=item.id+","
                }
            }
            html=html.substring(0,html.length-1)
            console.log(html)
            var idx=e.target.dataset.idx
            var url="http://127.0.0.1:3000/removeItem?ids="+html
            this.axios.get(url).then(result=>{
                if(result.data.code==1){
                    Toast("删除成功")
                    this.rows.splice(idx,1)
                }
            })
        }

    },
    created() {
        this.cartlist();
    },
}
</script>
<style>

.app-shopCart{
    background-color:#fff;
}
.app-shopCart .container{
    position:relative;
    height:50px;
}

.container .head{
    background-color:#fff;
    padding:20px;
    display:flex;
    justify-content:space-between;
}
.container .head img{
    width:20px;
    height:20px;
}
.cartlist{
    background-color:#fff;
    color:#666;
    font-size:15px;
    padding:10px;
    margin-top:5px;
}
.cart-content{
    display:flex;
    justify-content:space-between;
    padding-top:20px;
}
.cartlist .cart-img img{
    width:80px;
    height:80px;
    margin:10px;
}
.cartlist .shopname{
    border-bottom:1px solid #eee;
    padding-bottom:10px;
}
.cartlist .shopname img{
    width:12px;
    height:12px;
    margin-left:10px;
}
.cart-details .title{
    color:#333;
    font-size:14px;
}
.cart-details .normal{
    font-size:12px;
}
.cart-details .num-flex .price{
    color:#d7000f;
    padding-top:8px;
}
.num-flex{
    display:flex;
    justify-content:space-between;
}
.num-flex .numbox{
    width:80px;
    height:25px;
    display:flex;
    justify-content:space-between;
    margin-right:20px;
    margin-top:10px;
    background-color:#eee;
    border-radius:15px;
}
.numbox input{
    padding:0;
    font-size:10px;
    width:100%;
    height:100%;
    border:none;
    background-color:#eee;
    text-align:center;
}
.numbox button{
    text-align:center;
    vertical-align:middle;
    border:none;
    background-color:#eee;
    border-radius:15px;
    line-height:15px;
}
</style>