<template>
    <div>
<b-navbar toggleable="lg" type="dark" variant="success" fixed = "top" >
    <b-navbar-brand  @click="test">GrowX</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
       <b-navbar-nav>
        <!-- <b-nav-item v-if="path !== 'admin'" href="#">DataControl </b-nav-item>
        <b-nav-item v-if="path !== 'admin'" href="#" >DataDate</b-nav-item> -->
        <b-nav-item v-if="path !== 'admin'" href="#/records/1" >Graph</b-nav-item>
        <b-nav-item v-if="check === 'admin'" href="#/admin" >Admin Dashboard</b-nav-item>
        <b-nav-item v-if="check !== 'admin'" href="#/user" >User Farm-Select</b-nav-item>
      </b-navbar-nav>
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          
          <template slot="button-content"><em>{{username}}</em></template>
            <b-dropdown-item disabled>{{role}}</b-dropdown-item>

           <b-dropdown-item v-if="role === 'admin'" href='/#/register'>Register</b-dropdown-item>
           <b-dropdown-item href="/" @click="logout">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>




</div>
</template>

<script>
import  jwtDecode from 'jwt-decode'
export default {
    data(){
        
      const decode = JSON.parse(localStorage.getItem('usertoken'))
        return{
               username : decode.username,
              role : decode.role,
              path: localStorage.path,
              check : localStorage.user
        }
    },
    methods: {
        logout(){
          
            alert('Logout Success')
            localStorage.removeItem('usertoken')
            localStorage.removeItem('test')

        },
        test(evt){
          evt.preventDefault()
          // if(check==='admin'){
          //     router.push({path: '/admin'}) 
          // }else{  
          //     router.push({path: '/user'}) 
          // }
        }
    },
}
</script>