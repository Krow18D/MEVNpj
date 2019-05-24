<template>
    <div class="pt-5">
        <Navbar></Navbar>


        <div>
                <b-card-group class="pt-5" deck v-for = 'i in Math.ceil(y.length / 3)'>
      
            <b-card bg-variant="light" text-variant="dark" header="USER FARM" class="text-center mx-auto" v-for = 'x in y.slice((i - 1) * 3, i * 3)' style="max-width: 20rem;">
                <b-card-text > Username : {{x.usr_id}} <br>
                    Farmname : {{x.name}}<br>
                Farm ID : {{x.farm_id}} </b-card-text>
                <b-button @click="doThis($event,x.farm_id)" >Select</b-button>
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
        var user = JSON.parse(localStorage.getItem('farm'));
    
        return{
            message: '',
            username : decode.username,
            role : decode.role,
            y: user,
            z:''
        }
    },
    components: {
    'Navbar': Navbar
  },
  methods: {
       
        doThis(evt,id){
            
            evt.preventDefault()
            localStorage.setItem('farmid',id)
            axios.post('http://localhost:8000/cycle_configs',{
                option: 'list',
                farm_id: id

            }).then(res =>{
                localStorage.setItem('cycle',JSON.stringify(res.data.result))
                localStorage.setItem('path','user')
               // alert(localStorage.getItem('farm'))
                router.push({path: '/dataconfig'})     

            })
           


        }
    },
    
}
</script>

