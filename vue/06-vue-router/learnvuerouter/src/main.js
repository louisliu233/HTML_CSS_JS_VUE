import Vue from "vue";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  //引入组件并替换掉el中指定的标签
  render: h => h(App)
});
