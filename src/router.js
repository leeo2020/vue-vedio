import {createRouter, createWebHashHistory} from "vue-router"

const Find=()=>import('@/pages/find/Find')
const Home=()=>import('@/pages/home/Home')
const Cart=()=>import('@/pages/cart/Cart')
const User=()=>import('@/pages/user/User')
const Register=()=>import('@/pages/user/Register')
const Login=()=>import('@/pages/user/Login')

const routes=[
  {
    path:'/',
    component:Home,
    text:'主页'
  },
  {
    path:'/find',
    component:Find,
    text:'发现'
  },
  {
    path:'/cart',
    component:Cart,
    text:'购物车'
  },
  {
    path:'/user',
    component:User,
    text:'用户中心'
  },
  {
    path:'/register',
    component:Register,
    text:'用户注册'
  },
  {
    path:'/login',
    component:Login,
    text:'用户登录'
  }
]

const router=createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
