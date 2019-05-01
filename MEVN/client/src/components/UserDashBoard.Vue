<template>
    <div >
    <title>DashBoard</title>
        <Navbar></Navbar>
        <h1>User DashBoard</h1>
    </div>
</template>

<script>
import  jwtDecode from 'jwt-decode'
import Navbar from './Navbar'

export default {

    data(){
        
        // const token = localStorage.usertoken   
        //  const decode = jwtDecode(token) 
        const decode = JSON.parse(localStorage.getItem('usertoken'))
        return{
            username : decode.username,
            role : decode.role
        }
    },
    components: {
    'Navbar': Navbar
  },

}
</script>