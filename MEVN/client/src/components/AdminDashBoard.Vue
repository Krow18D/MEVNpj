/* eslint-disable */

<template >
    <div class="pt-5">
        
        <title>DashBoard</title>

        <Navbar> </Navbar>
        <br>


    <div>
    <b-card-group class="pt-5" deck v-for = 'i in Math.ceil(y.length / 3)'>
      
            <b-card bg-variant="light" text-variant="dark" header="USER" class="text-center mx-auto" v-for = 'x in y.slice((i - 1) * 3, i * 3)' style="max-width: 20rem;">
                <b-card-text >Username : {{x.username}}  </b-card-text>
                <b-button @click="doThis($event,x.username)" >Select</b-button>
            </b-card> 

    </b-card-group>
    </div>


    </div>
</template>

<script>
import axios from 'axios'
  import router from '../router'
import  jwtDecode from 'jwt-decode'
import Navbar from './Navbar'
export default {
    data(){
        const token = localStorage.usertoken
    
        const decode = JSON.parse(localStorage.getItem('usertoken'))
        const x = localStorage.test
        var user = JSON.parse(localStorage.getItem('test'));
    
        return{
            message: '',
            username : decode.username,
            role : decode.role,
            y: user,
            z:''
        }
    },
    methods: {
       
        doThis(evt,user){
            
    
            
            evt.preventDefault()
            axios.post('http://localhost:8000/farms/',{
                option: 'list',
                username: user

            }).then(res =>{
                localStorage.setItem('farm',JSON.stringify(res.data.result))
                localStorage.setItem('path','admin')
                //alert(localStorage.getItem('farm'))
                router.push({path: '/user'})         

            })


        }
    },
    
    components: {
    'Navbar': Navbar
  },
  computed:{
     
  }

}
</script>