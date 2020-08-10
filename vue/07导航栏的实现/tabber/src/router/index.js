import Vue from 'vue'
import Router from 'vue-router'

const Home=()=> import('../views/home/Home')
const Category=()=> import('../views/category/Category')
const Cart=()=> import('../views/cart/Cart')
const Porfile=()=> import('../views/profile/Profile')

Vue.use(Router)

const router= new Router({
  routes: [
    {
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
      component:Porfile
    },
  ],
  mode:'history'
})

export default router
