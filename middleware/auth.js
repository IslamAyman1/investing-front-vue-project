import axios from "axios"
import {ref} from 'vue'
export default defineNuxtRouteMiddleware((to,from)=>{
  if(process.client){
    const authToken = ref({
     "authToken" : localStorage.getItem('userToken')
    })
     
    axios.post('http://127.0.0.1:8000/api/user/checkTokenStatus',authToken.value)
    .then(res=>{
      console.log(res.data);
      if(res.data.msg === 'unAuthorized' || res.data.msg === 'token_invalid'){
          navigateTo('/')
      } 
    })
  }
})