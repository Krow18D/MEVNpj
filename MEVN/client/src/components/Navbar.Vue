<template>
    <div>
        
  <b-navbar toggleable="lg" type="dark" variant="success">
    <b-navbar-brand  href="#" >GrowX </b-navbar-brand>
    
    

    <b-collapse id="nav-collapse" is-nav>
      

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

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
        // const token = localStorage.usertoken   
        // const decode = jwtDecode(token) 
        const decode = JSON.parse(localStorage.getItem('usertoken'))
        return{
          username : decode.username,
            role : decode.role
        }
    },
    methods: {
        logout(){
            localStorage.removeItem('usertoken')
        }
    },
}
</script>