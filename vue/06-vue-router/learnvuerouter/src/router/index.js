import Vue from "vue";
import Router from "vue-router";

const Home = () => import("../components/Home");
const About = () => import("../components/About");
const User = () => import("../components/User");
const HomeNews = () => import("../components/HomeNews");
const HomeMassage = () => import("../components/HomeMassage");
const Profile = () => import("../components/Profile");

//1.通过Vue.use(插件)，安装插件
Vue.use(Router);
// 2.创建Router对象，并且传入到Vue实例
export default new Router({
  routes: [
    {
      path: "/",
      //redirect 重定向 默认路径
      redirect: "/home"
    },
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: "",
          redirect: "news"
        },
        {
          path: "news",
          component: HomeNews
        },
        {
          path: "massage",
          component: HomeMassage
        }
      ]
    },
    {
      path: "/about",
      component: About
    },
    {
      path: "/profile",
      component: Profile
    },
    {
      //动态路由
      path: "/user/:userId",
      component: User
    }
  ],
  //改变路径，h5的history模式
  mode: "history"
});
