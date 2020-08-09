<template>
  <div id="app">
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/'+userId">用户</router-link>
    <!-- <router-link :to="{path:'/profile',query: {name: "louis",age: "18",
    height: "1.80",}}">档案</router-link>-->
    <button @click="profileClick">档案</button>
    <router-view></router-view>
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
