<template>
    <div >
    <title>DashBoard</title>
        <Navbar></Navbar>
        <h1>User DashBoard</h1>
        <h2>{{username}}</h2>
        <h3>{{farmz}}</h3>
    </div>
</template>

<script>
import  jwtDecode from 'jwt-decode'
import Navbar from './Navbar'

export default {
    created()  {
    if(this.username == null)router.push({path: '/'})
  },
    data(){
        
        const decode = JSON.parse(localStorage.getItem('usertoken'))
        var farmz = JSON.parse(localStorage.getItem('userFarm'))
        var farmx = []
        return{
            username : decode.username,
            role : decode.role,
            farmz,
            farmx
        }
    },
    methods: {
        
    },
    mounted() {
        axios.post('http://localhost:8000/farms',{
                  option: 'list',
                  username: username
                }).then(res =>{
                  console.log(res.data)
                  
                })
    },
    components: {
    'Navbar': Navbar
  },

}
</script>