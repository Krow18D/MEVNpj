<template>
    <div>
        <Navbar></Navbar>
        <h1>Admin DashBoard</h1>
        <h2>{{token}}</h2>
        <h3>{{username}}</h3>
        <h4>{{password}}</h4>
        <h5>{{role}}</h5>
        <h6>{{x}}</h6>
    </div>
</template>

<script>
import  jwtDecode from 'jwt-decode'
import Navbar from './Navbar'
export default {
    data(){
        const token = localStorage.usertoken   
        const decode = jwtDecode(token)    
        const x = typeof(decode.dataLogin[2]) 
        return{
            username : decode.dataLogin[0],
            password : decode.dataLogin[1],
            role : decode.dataLogin[2],
            x
        }
    },
    components: {
    'Navbar': Navbar
  }
}
</script>