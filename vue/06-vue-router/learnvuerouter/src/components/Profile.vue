<template>
  <div>
    <h2>我是档案</h2>
    <h2>{{$route.query.name}}</h2>
    <h2>{{$route.query.age}}</h2>
    <h2>{{$route.query.height}}</h2>
  </div>
</template>

<script>
export default {
  name: "Profile",
  created() {
      console.log("Profile created");
    },
    destroyed() {
      console.log("Profile destroyed");
    },
};
</script>

<style>
</style>