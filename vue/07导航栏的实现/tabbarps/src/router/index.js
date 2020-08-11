import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import ('../views/Home')
const Cart = () => import ('../views/Cart')
const Category = () => import ('../views/Category')
const Profile = () => import ('../views/Profile')


Vue.use(Router)

const router = new Router({
  routes:[{
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/profile',
    component:Profile
  },
]
})

export default router