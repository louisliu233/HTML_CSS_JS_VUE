import Vue from 'vue'
import App from './App'
import router from './router'
//导入store
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,  //挂载到vue实例中
  render: h => h(App)
})
