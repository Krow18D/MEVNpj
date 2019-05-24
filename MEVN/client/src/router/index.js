/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import AdminDash from '@/components/AdminDashBoard'
import UserDash from '@/components/UserDashBoard'
import DataConfig from '@/components/DataConfig'
import Records from '@/components/Records'
import Records1 from '@/components/Records1'
import Records2 from '@/components/Records2'
import Records3 from '@/components/Records3'

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
      
    },
    {
      path: '/dataconfig',
      name: 'DataConfig',
      component: DataConfig
    },
    {
      path: '/records/1',
      component: Records
    
    },
    {
      path: '/records/2',
      component: Records1
    },
    {
      path: '/records/3',
      component: Records2
    },
    {
      path: '/records/4',
      component: Records3
    }
    
  ]
})
