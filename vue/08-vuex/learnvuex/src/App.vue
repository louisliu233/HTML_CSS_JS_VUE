<template>
  <div id="app">
    <h2>{{$store.state.info}}</h2>
    <button @click="updateinfo">修改名字</button>
    <h2>-------------------</h2>
    <h2>{{message}}</h2>
    <h2>{{$store.state.count}}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <h2>-----------getters的用法-----------</h2>
    <h2>{{$store.getters.more23stu}}</h2>
    <h2>{{$store.getters.more23stuLength}}</h2>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'
export default {
  name: 'App',
  components:{
    HelloVuex
  },
  methods:{
    add(){
      this.$store.commit('increment')
    },
    sub(){
      this.$store.commit('decrement')
    },
    updateinfo(){
      this.$store
      .dispatch('aupdateinfo','额外传入的信息')
      .then(res=>{
        console.log('接收到了');
        console.log(res);
      })
    }
  },
  data(){
    return {
      message:'我是组件',
    
    }
  }
}
</script>

<style>

</style>
