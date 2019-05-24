<template>
    <div class="pt-5">
        <Navbar></Navbar>


    <div>
    <div class="mt-3">
    <b-button-group class="btn float-left"  >
      <b-button @click="ex($event,'humidity')" variant="success">Humidity</b-button>
      <b-button @click="ex($event,'light')" variant= "info">Light</b-button>
      <b-button @click="ex($event,'nitrogen')" variant="warning">Nitrogen</b-button>
      <b-button @click="ex($event,'temp')" variant="light">Temperature</b-button>
      <b-button @click="ex($event,'all')" variant="dark">all</b-button>


     <b-dropdown id="dropdown-form" text="Add Sensor" ref="dropdown" class=" md-5 float-right">
      <b-dropdown-form>
        
        <b-form-group label="From Time" label-for="dropdown-form-email" @submit.stop.prevent>
          <b-form-input v-model="totime1" type="date"
            id="dropdown-form-email"
            size="sm"
          ></b-form-input>
        </b-form-group>

        <b-form-group  label-for="dropdown-form-email" @submit.stop.prevent>
          <b-form-input v-model="totime2" type="time"
            id="dropdown-form-email"
            size="sm"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="To time" label-for="dropdown-form-email" @submit.stop.prevent>
          <b-form-input v-model="fromtime1" type="date"
            id="dropdown-form-email"
            size="sm"
          ></b-form-input>
        </b-form-group>

        <b-form-group  label-for="dropdown-form-email" @submit.stop.prevent>
          <b-form-input v-model="fromtime2" type="time"
            id="dropdown-form-email"
            size="sm"
          ></b-form-input>
        </b-form-group>

    <div class="mt-2">Type: <strong>{{ selected }}</strong><br></div>
 <b-form-select label="Type" v-model="selected" :options="options"></b-form-select>

  <b-form-group label="Value" label-for="dropdown-form-email" @submit.stop.prevent>
          <b-form-input v-model="xx" type="number"
            id="dropdown-form-email"
            size="sm"
          ></b-form-input>
        </b-form-group>

        
        <b-button variant="primary" class= "btn float-xl-right" size="sm" @click="onClick($event,totime1,totime2,fromtime1,fromtime2,selected,xx)">ADD</b-button>
      </b-dropdown-form>
      
    </b-dropdown>

    </b-button-group>
    
<br><br><br>
     

    <br><br><br>
    </div>
               
    <b-table    striped hover  :items="y" >  </b-table>
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
        var user = JSON.parse(localStorage.getItem('cycle'));
    
        return{
            selected: null,
            message: '',
            totime1: '',
            totime2: '',
            fromtime1: '',
            fromtime2: '',
            xx: '',
            username : decode.username,
            role : decode.role,
            y: user,
            z: '',
            selected: '',
            text : '',
            options: [
          { value: 'humidity', text: 'Please select an option' },
          { value: 'humidity', text: 'Humidity' },
          { value: 'light', text: 'Light' },
          { value: 'nitrogen', text: 'Nitrogen' },
          { value: 'temp', text: 'Temperature' }
        ]
        }
    },
    components: {
    'Navbar': Navbar
  },
  methods: {
      onClick(evt,to1,to2,fo1,fo2,type,value) {
         evt.preventDefault()
        this.$refs.dropdown.hide(true)
          
          
          
          axios.post('http://localhost:8000/cycle_configs', {
            to_time: fo1+' '+fo2 +':00',
           from_time : to1+' '+to2 +':00',
            type: type,
            farm_id: localStorage.getItem('farmid'),
            option: 'create',
            value: value

          }).then(res => {
               //alert(res.data.message)
            
            axios.post('http://localhost:8000/cycle_configs', {
           
            farm_id: localStorage.getItem('farmid'),
            option: 'list',

          }).then(res => {
            
           
            localStorage.setItem('cycle',JSON.stringify(res.data.result))
            this.y = JSON.parse(localStorage.getItem('cycle'))
             //alert(localStorage.getItem('cycle'))
            this.$refs.table.refresh()

            
          })
           
            // localStorage.setItem('cycle',JSON.stringify(res.data.result))
            // this.y = JSON.parse(localStorage.getItem('cycle'))
            //  //alert(localStorage.getItem('cycle'))
            // this.$refs.table.refresh()

            
          })
          
        // Close the menu and (by passing true) return focus to the toggle button
        
      },
       
        doThis(evt,id){
            
    
            
            evt.preventDefault()
            localStorage.setItem('aaa',id)
            router.push({path: '/admin'})     

        },ex(evt,xer){

            evt.preventDefault()
            //alert(this.selected)
            if(xer !='all'){
            axios.post('http://localhost:8000/cycle_configs', {
           
            farm_id: localStorage.getItem('farmid'),
            option: 'list',
            type: xer

          }).then(res => {
            
           
            localStorage.setItem('cycle',JSON.stringify(res.data.result))
            this.y = JSON.parse(localStorage.getItem('cycle'))
             //alert(localStorage.getItem('cycle'))
            this.$refs.table.refresh()

            
          })
            }else{
                axios.post('http://localhost:8000/cycle_configs', {
           
            farm_id: localStorage.getItem('farmid'),
            option: 'list',

          }).then(res => {
            
           
            localStorage.setItem('cycle',JSON.stringify(res.data.result))
            this.y = JSON.parse(localStorage.getItem('cycle'))
             //alert(localStorage.getItem('cycle'))
            this.$refs.table.refresh()

            
          })
            }

        }
    }

    
}
</script>

