<template>
<div class="app-type">
     <div class="search">
            <input type="text" placeholder="搜索商品,了解更多">
                <img src="../../img/search.png" class="sicon1">
                <img src="../../img/xiaoxi@2x.png" class="sicon2">
            </input>  
        </div>
    <el-tabs  tab-position="left">
        <el-tab-pane label="3C家电" name="first">
            <div class="middle-title">
                <div>
                    <img src="../../img/title-left.png">
                    <span>手机数码</span>
                    <img src="../../img/title-right.png" >
                </div>
            </div>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                    <router-link to="/NewsList">
                    <img src="../../img/sj1.jpg">
                    <div class="mui-media-body">手机</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/GoodList">
                    <img src="../../img/sj2.jpg">
                    <div class="mui-media-body">数码配件</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/shopCart">
                    <img src="../../img/sj3.jpg">
                    <div class="mui-media-body">智能设备</div></router-link></li>
	    </ul> 
        </el-tab-pane>
        <el-tab-pane label="个护美妆" name="second">
                 <div class="middle-title">
                <div>
                    <img src="../../img/title-left.png">
                    <span>家用电器</span>
                    <img src="../../img/title-right.png" >
                </div>
            </div>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                    <router-link to="/NewsList">
                    <img src="../../img/sj1.jpg">
                    <div class="mui-media-body">生活电器</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/GoodList">
                    <img src="../../img/sj2.jpg">
                    <div class="mui-media-body">个护健康</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/shopCart">
                    <img src="../../img/sj3.jpg">
                    <div class="mui-media-body">大家电</div></router-link></li>
             <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/shopCart">
                    <img src="../../img/sj3.jpg">
                    <div class="mui-media-body">厨卫电器</div></router-link></li>
	    </ul> 
        </el-tab-pane>
        <el-tab-pane label="生活家居" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="珍宝/服饰" name="fourth">定时任务补偿</el-tab-pane>
        <el-tab-pane label="母婴玩具" name="five">用户管理</el-tab-pane>
        <el-tab-pane label="食品饮料" name="six">配置管理</el-tab-pane>
        <el-tab-pane label="箱包/钟表" name="seven">角色管理</el-tab-pane>
        <el-tab-pane label="运动户外" name="eight">定时任务补偿</el-tab-pane>
        <el-tab-pane label="节日食品" name="nine">定时任务补偿</el-tab-pane>
        <el-tab-pane label="生活服务" name="ten">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
      
      };
    },
  
  };
</script>
<style lang="">
/* 搜索框*/
.app-type .search{
    position:fixed;
    width:100%;
    height:50px;
    top:0;
    background:#fff;
    z-index:999;
}
.app-type .search input{
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
/*tabs */
.app-type .el-tabs{
    margin-top:50px;
}
.app-type .el-tabs__item.is-active {
    background: #fff;
    color: #d7000f;
    border-bottom: 4px solid #d7000f;
}
.app-type .el-tabs__item{
    height:58px;
    line-height:58px;
}
.middle-title{
    display:flex;
    justify-content:center;
    align-items:center;
}
.middle-title img{
    width:70px;
}
/*title*/
.middle-title span{
    color:#333;
    font-size:8px;
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
/*九宫格 */
.mui-table-view li{
    width:88px;
}
.mui-grid-view.mui-grid-9:before, .mui-grid-view.mui-grid-9:after{
    display:none;
}
.mui-grid-view.mui-grid-9{
    border:none;
}
.app-type .mui-table-view.mui-grid-view .mui-table-view-cell{
    border:none;
}
.app-type .mui-table-view.mui-grid-view{
    background:#fff;
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
    font-size: 8px;
}
.mui-table-view .mui-table-view-cell img{
    width:88%;
}
body{
    background:#fff;
}
</style>