<template>
  <div id="app">
    <tar-bar>
     <div class="tab-bar-item">首页</div>
     <div class="tab-bar-item">分类</div>
     <div class="tab-bar-item">购物车</div>
     <div class="tab-bar-item">我的</div>
    </tar-bar>
  </div>
</template>


<script>
import TabBar from './components/tabbar/TabBar'
import TabBarItem from './components/tabbar/TabBarItem'


export default {
  name: 'App',
  components:{
    TabBar,
    TabBarItem
  
  }
}
</script>

<style>
@import './assets/css/base.css';
</style>

