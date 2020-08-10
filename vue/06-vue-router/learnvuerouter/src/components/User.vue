.<template>
  <div>
    <h2>我是用户</h2>
    <p>我是内容</p>
    <h2>{{userId}}</h2>
  </div>
</template>

<script>
export default {
  name: "User",
  //   data() {
  //   return {
  //     userId: "louis",
  //   };
  // },
  computed: {
    userId() {
      //谁处于活跃状态获取用户id
      return this.$route.params.userId;
    },
    
  },
  created() {
      console.log("User created");
    },
    destroyed() {
      console.log("User destroyed");
    },
};
</script>

<style>
</style>