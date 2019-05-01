/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import AdminDash from '@/components/AdminDashBoard'
import UserDash from '@/components/UserDashBoard'
import VueRouter from 'vue-router';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      
    },
    {
      path: '/admin',
      name: 'AdminDash',
      component: AdminDash,
      
    },
    {
      path: '/user',
      name: 'UserDash',
      component: UserDash,
      
    }
    
  ]
})
const router = new VueRouter({})

router.beforeEach((to,from,next)=>{

})