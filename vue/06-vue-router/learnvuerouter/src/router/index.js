import Vue from "vue";
import Router from "vue-router";

//懒加载
const Home = () => import("../components/Home");
const About = () => import("../components/About");
const User = () => import("../components/User");
const HomeNews = () => import("../components/HomeNews");
const HomeMassage = () => import("../components/HomeMassage");
const Profile = () => import("../components/Profile");

//1.通过Vue.use(插件)，安装插件
Vue.use(Router);
// 2.创建router对象并且传入到Vue实例
const router = new Router({
  routes: [
    {
      path: "/",
      //redirect 重定向 默认路径
      redirect: "/home"
    },
    {
      path: "/home",
      component: Home,
      //meta元数据 描述数据的数据
      meta: {
        title: "首页"
      },
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
      component: About,
      meta: {
        title: "关于"
      }
    },
    {
      path: "/profile",
      component: Profile,
      meta: {
        title: "档案"
      }
    },
    {
      //动态路由
      path: "/user/:userId",
      component: User,
      meta: {
        title: "用户"
      }
    }
  ],
  //改变路径，h5的history模式
  mode: "history"
});
//前置首位(guard)跳转之前调用的
router.beforeEach((to, from, next) => {
  //从from跳转到to
  document.title = to.matched[0].meta.title;
  // console.log(to);
  // console.log("+++++++++");
  next();
});
//后置钩子(hook)跳转之后调用的
router.afterEach((to, from) => {
  // console.log("---------");
});
//将router对象传入到Vue实例
export default router;
