<template>
  <div class="app-container">
    <router-view></router-view>
    <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon"><img src="./img/tabar1-1.png"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon"><img src="./img/tabar2-1.png"></span>
				<span class="mui-tab-label">分类</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon"><img src="./img/tabar3-1.png"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon"><img src="./img/tabar4-1.png"></span>
				<span class="mui-tab-label">我的</span>
			</a>
		</nav>
  </div>
</template>

<script>
export default {
  name: 'App',
   methods:{
      
   }
}
</script>

<style>
  .mui-icon img{
     width:100%;
     height:100%;
  }
</style>
