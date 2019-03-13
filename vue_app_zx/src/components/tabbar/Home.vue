<template>
    <div class="app-home">
        <div class="search">
            <input type="text" placeholder="搜索商品,了解更多">
                <img src="../../img/search.png" class="sicon1">
                <img src="../../img/xiaoxi@2x.png" class="sicon2">
            </input>  
        </div>
        <mt-swipe :auto="2500">
            <mt-swipe-item v-for="item in list" :key="item.id">
                <img :src="item.img_url">
            </mt-swipe-item>
        </mt-swipe>
        <!--九宫格-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                    <router-link to="/NewsList">
                    <img src="../../img/swiper1.png">
                    <div class="mui-media-body">领劵</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/GoodList">
                    <img src="../../img/swiper2.png">
                    <div class="mui-media-body">3C数码</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/shopCart">
                    <img src="../../img/swiper3.png">
                    <div class="mui-media-body">易家自营</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
                    <img src="../../img/swiper4.png">
                    <div class="mui-media-body">茅台酒</div></a></li>
	    </ul>    
         <!--楼层 -->
        <div class="floorlist">
         <!--title -->
            <div class="middle-title">
                <div>
                    <img src="../../img/title-left.png">
                    <span>每周精选</span>
                    <img src="../../img/title-right.png" >
                </div>
            </div>
            <div class="pro-img">
                <img src="../../img/middle1.jpg">
            </div>
            <div class="pro-box">
                <div class="pro-name">日本Diem植物精粹漱口水500ml</div>
                <div class="pro-title">【源自天然】植物美容精华</div>
                <div class="pro-price">￥128</div>
            </div>
        </div>
         <div class="pro-img">
                <img src="../../img/middle2..jpg">
            </div>
            <div class="pro-box">
                <div class="pro-name">美旅软箱万向轮拉杆箱 BG6</div>
                <div class="pro-title">【出行助手】大容量 防刮耐磨</div>
                <div class="pro-price">￥499</div>
            </div>
             <!--第一层-->
            <div class="floor-container">
                <div class="container-box"><img src="../../img/middle3.png" ></div>
                <div class="floor-content" >
                    <ul class="floor-list" >
                        <li class="floor-item" v-for="item in rows" :key="item.id">
                            <img :src="item.img_url">
                            <div class="pro-title">{{item.title}}</div>
                            <div class="pro-price">￥{{item.price}}</div>
                        </li>
                        <li class="more">
                            <p>more</p>
                            <p>查看更多</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="middle-title">
                <div>
                    <img src="../../img/title-left.png">
                    <span>爱发现</span>
                    <img src="../../img/title-right.png" >
                </div>
            </div>
            <div class="found-list" v-for="item in prolist" :key="item.id">
                <div class="found-item" >
                    <img :src="item.img_url" @click="jumpinfo" :data-id="item.id">
                    <div class="found-detail">
                        <span class="found-title">{{item.title}}</span>
                        <p class="found-subtitle">{{item.subtitle}}</p>
                        <div class="keywords">
                            <span>{{item.keywords}}</span>
                            <span>{{item.details}}</span>
                        </div>
                        <p class="found-price">￥{{item.price}}</p>
                    </div>
                </div>
            </div>
            <div style="height:40px;font-size:12px;color:#999;line-height:40px;text-align:center;">没有更多了~</div>
            <div class="copyright" style="height:100px;background:#F6F6F6;padding-top:10px;">
                <p>Copyright©2016-2017中信易家版权所有</p>
                <p>食品经营许可证编号  JY11105050876919</p>
                <p>京ICP备17008530号-3</p>
            </div>
            <div style="height:50px;"></div>  
        </div>  
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[],
            rows:[],
            prolist:[]
        }
    },
    methods:{
        handleImage(){
            var url="http://127.0.0.1:3000/imagelist";
            this.axios.get(url).then(result=>{
                console.log(result)
                this.list=result.data
            })
        },
        handlepro1(){
            var url="http://127.0.0.1:3000/pro"
            this.axios.get(url).then(result=>{
                this.rows=result.data.data
            })
        },
        handleprolist(){
            var url="http://127.0.0.1:3000/productlist"
            this.axios.get(url).then(result=>{
                this.prolist=result.data.data
            })
        },
        jumpinfo(e){
            var id=e.target.dataset.id
            this.$router.push("goodsinfo?id="+id)
        }
       
    },
    created() {
        this.handleImage();
        this.handlepro1();
        this.handleprolist();
    },
}
</script>
<style>
/* 搜索框*/
.app-home .search{
    position:fixed;
    width:100%;
    height:50px;
    top:0;
    background:#fff;
    z-index:999;
}
.app-home .search input{
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

/*轮播图*/
.app-home .mint-swipe{
    height:275px;
    margin-top:50px;
}
.app-home .mint-swipe img{
    width:100%;
}
/*九宫格*/
.app-home .mui-table-view .mui-table-view-cell{
    background:#fff;
    border:none;
}
.app-home .mui-grid-view.mui-grid-9:after{
    display:none;
}
.app-home .mui-table-view .mui-table-view-cell img{
    width:66%;
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
    font-size:8px;
    font-weight:bold;
}
/*楼层titile*/
.middle-title{
    display:flex;
    justify-content:center;
    align-items:center;
}
.middle-title img{
    width:70px;
}
.middle-title span{
    color:#333;
}
.middle-title div{
    padding-top:12px;
    padding-bottom:12px;
}
.pro-img{
    height:200px;
}
.pro-img img{
    width:100%;
}
/*中部第一层*/
.pro-box{
    width: 100%;
    height:100px;
    background: #fff;
    padding:15px 15px 0;
}
.pro-box div{
    text-align:center;
    font-size:10px;
}
.pro-box .pro-name{
    color:#333;
    font-weight:bold;
}
.pro-title{
    color:#333;
}
.pro-price{
    color:#920000; 
}
/*1层楼*/
.floor-container .container-box{
    height:202px;
}
.floor-container .container-box img{
    width:100%;
}

.floor-list{
    display:flex;
    list-style:none;
    padding:6px;
    margin:0px;
    overflow:hidden;
}
.floor-list .floor-item{
    width:120px;
    margin-right:10px;
}
.floor-list .floor-item img{
    width:120px;
    height:120px;
}
.floor-list .floor-item .pro-title{
    font-size:8px;
    margin-top:5px;
    text-align:center;
}
.floor-list .floor-item .pro-price{
    font-size:8px;
    color:red;
    margin:8px;
    text-align:center;
}
.more{
    width:120px;  
}
.more p{
    margin: 0 auto;
    padding: 3px 0 2px;
    width: 40%;
    text-align: center;
    font-size: 8px;
    color: #666;
}
.more>p:first-child{
    margin-top:50px;
}
/*二层楼 */

.found-list .found-item{
    display:flex;
    margin-bottom:10px;
}
.found-list .found-item>img{
    width:140px;
    height:140px;
    display:inline-block;
    padding:10px;
}
.found-list .found-item .found-title{
    font-size:14px;
    overflow:hidden;
}
.found-detail{
    text-align:left;
}
.found-title{
    color:#333;
}
.found-subtitle{
    font-size:10px;
    color:#666;
    padding-left:10px;
    margin-top:5px;
}
.keywords{
    font-size:10px;
    margin-top:20px;
}
.keywords span{
    background-color:#FAF2E6;
    color:#87644B;
    border-radius:10px;
    padding:0 8px;
    margin:0 8px;
}
.found-price{
    font-size:12px;
    color:red;
    margin:10px 10px;
}
/*底部 */
.copyright p{
    text-align:center;
    font-size:4px;
    font-family: PingFangSC-Regular;
    color:#666;
    margin:0 auto;
}
body{
    background:#fff;
}
</style>
