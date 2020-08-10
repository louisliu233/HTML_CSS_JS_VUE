<template>
  <div id="app">
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/'+userId">用户</router-link>
    <!-- <router-link :to="{path:'/profile',query: {name: "louis",age: "18",
    height: "1.80",}}">档案</router-link>-->
    <button @click="profileClick">档案</button>

    <keep-alive exclude='Profile,User'>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: "louis",
    };
  },
  //创建组件时发生的生命周期函数
  created() {
    console.log(" homecreat");
  },

  //整个template挂载到dom上的回调的生命周期函数
  // mounted() {
  //   console.log("mounted");
  // },

  // 界面发生刷新时发生回调的生命周期函数
  // updated() {
  //   console.log("updated");
  // },
  methods: {
    profileClick() {
      this.$router.push({
        path: "/profile",
        query: {
          name: "louis",
          age: "18",
          height: "1.80",
        },
      });
    },
  },
};
</script>

<style>
.router-link-active {
  color: red;
}
</style>
