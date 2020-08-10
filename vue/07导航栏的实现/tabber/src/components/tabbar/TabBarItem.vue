<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if='!isActive'><slot name="item-icon" ></slot></div>
      <div v-else><slot name="item-icon-active" > </slot></div>
     <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
    name:'TabBarItem',
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
    data(){
      return{
        // isActive:true
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path).catch(()=>{})
      }
    }
}
</script>

<style>
.tab-bar-item {
      /* 弹性盒子 */
      flex:1;
      /* 文本居中 */
      text-align:center;
      height:49px;
      font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  /* 去除图片下面多余的像素 */
  vertical-align: middle;
  margin-bottom: 2px;
}
/* .active {
  color: red;
} */
</style>