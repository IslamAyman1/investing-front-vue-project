<template >
    <div id="mainPage" >
      <h1 class="loginWord text-center mt-5">Login To Your Account</h1>
    <p class="loginWithSocialWord text-center mt-5">Login Using Social Network</p>
    <v-col class="d-flex justify-center mt-3">
        <v-btn class="facebookIcon">f</v-btn>
        <v-btn class="ml-4 GoogleIcon" @click="loginUsingGoogle">G+</v-btn>
    </v-col>
   <form class="mt-5">
    <v-text-field
            label="Email or Phone "
            persistent-hint
            class="ml-2"
            variant="outlined"
            type="email"
            v-model="emailOrphone"
          />   
           <v-text-field
            label="Password"
             class="ml-2"
            variant="outlined"
            type="password"
            v-model="password"
          /> 
          <div class="ml-3 RegisterAndForgetlink">
            <a href="register">Dont Have An Account?</a><br>
          </div>
          <v-radio-group inline class="d-flex justify-center mb-8" v-model="RadioButtonValue">
                <v-radio label="Company" value="Company"/>
                <v-radio label="User" value="User"/>
          </v-radio-group> 
          <div class="d-flex justify-center mb-5">
          <v-btn @click="GetLoginData()" color="secondary" class="w-50">
            <v-progress-circular indeterminate class="mr-5" v-if="loader"></v-progress-circular>
          
           Sign In</v-btn>
          </div>
   </form>
    </div>
   
</template>
<script setup>
import {ref , onBeforeMount} from "vue"


import axios from "axios";

definePageMeta({
    layout:"login-layout"
})
function checkAuth(){
    if(process.client){
  // const sendToken = ref({
    //   "auth-token" : userToken.value
    // })
  const authToken =  ref(localStorage.getItem('userToken'))
const userToken = ref({
  "authToken" : authToken.value
})
if(authToken.value == null){
  navigateTo('/')
}}
onMounted(checkAuth)
}
var emailOrphone = ref(emailOrphone)
var password = ref(password)
var RadioButtonValue = ref(RadioButtonValue)
var loader = ref(false)
function GetLoginData(){
    const loginData = ref({
        "email" : emailOrphone.value,
        "password" : password.value,
        "clientType" : RadioButtonValue.value
    })
    if(!RadioButtonValue.value){
      alert('Enter Your Role')
    }else{
    loader.value = true
    axios.post('http://127.0.0.1:8000/api/user/userLogin',loginData.value)
   .then(res=>{
          loader.value = false
        if(res.data.status == 200){
          localStorage.clear()
          localStorage.setItem('userToken',res.data.userToken)
          localStorage.setItem('clientType',RadioButtonValue.value)
         window.location.replace("http://localhost:3000/Users/userMainHome");
       }else{
        loader.value = false
         alert(res.data.msg)
       }
   })
  }
}   
function loginUsingGoogle(){
    // axios.get('http://127.0.0.1:8000/api/user/redirectToGoogle')
    // .then(res=>console.log(res.data))
    axios.get('http://127.0.0.1:8000/api/user/handleGoogleCallBack')
    .then(res=>console.log(res.data))
}

</script>
<style scoped>
.RegisterAndForgetlink a{
    text-decoration: none;
}
.loginWithSocialWord{
    color:gray
}
.facebookIcon{
    background-color: rgb(53, 53, 221);
     color:white;    
}
.GoogleIcon{
    background-color: red;
    color:white
}


</style>