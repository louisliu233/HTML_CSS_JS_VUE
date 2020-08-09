<template>
  <div>
    <h2>我是标题</h2>
    <p>我是内容</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/massage">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
</style>