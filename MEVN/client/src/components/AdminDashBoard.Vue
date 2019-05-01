<template>
    <div >
    <title>DashBoard</title>
        <Navbar></Navbar>
        <h1>Admin DashBoard</h1>
    </div>
</template>

<script>
import  jwtDecode from 'jwt-decode'
import Navbar from './Navbar'
import router from '../router'
export default {
created()  {
    if(this.username == null)router.push({path: '/'})
  },
    data(){
        
        // const token = localStorage.usertoken   
        //  const decode = jwtDecode(token) 
        console.log("อิอิ");
        
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