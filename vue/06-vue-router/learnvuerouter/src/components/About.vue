.<template>
  <div>
    <h2>我是关于标题</h2>
    <p>我是关于内容</p>
  </div>
</template>

<script>
export default {
  name:'About',
  created() {
      console.log("About created");
    },
    destroyed() {
      console.log("About created");
    },
    activated(){
      console.log('activated')
    }
    
};
</script>

<style>
</style>