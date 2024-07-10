<template>
    <v-layout>
      <v-app-bar
        color="primary"
        prominent
      >
     <span class="ma-2">Investing Freelance</span>
      <v-text-field
        density="compact"
        variant="solo"
        placeholder="What Are You Looking For"
        append-inner-icon="mdi-magnify"
        single-line
        hide-details 
        />  
        <v-col md="1" class="ml-6">
        <v-icon class="ml-3">mdi-bell</v-icon>    
        <p class="text-subtitle-2">Updates</p>
        </v-col>
      <v-menu
        min-width="200px"
      >
        <template v-slot:activator="{ props }">
         
            <v-avatar
              color="white"
              size="large"
              v-bind="props"
              class="ma-8"
            >
              <span style="color:black">{{ nameProfile }}</span>
            </v-avatar>
        </template>
        <v-card>
          <v-card-text>
            <div class="text-center">
              <v-avatar
              size="large"
                color="brown"
              >
                <span >{{ nameProfile }}</span>
              </v-avatar>
              <p class="text-caption mt-1">
                {{ emailProfile }}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn
                variant="text"
                 to="userProfile"
              >
                Edit Account
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn
                variant="text"
                rounded
                @click="logout"
              >
                logout
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-menu>
   
       
      </v-app-bar>
      <v-app-bar elevation="1">
 <div class="d-flex justify-space-evenly" style="list-style: none;width:100%">
           <NuxtLink to="userMainHome" class="text-decoration-none">Home</NuxtLink>
           <NuxtLink v-if="Freelance" to="freelanceMainHome" class="text-decoration-none">Freelance</NuxtLink>
           <NuxtLink to="investMainHome" class="text-decoration-none">Investing</NuxtLink>
           <NuxtLink to="jobMainHome" class="text-decoration-none">Job</NuxtLink>
  </div>
       </v-app-bar>
     

     
    </v-layout>
   <slot/>
  </template>
  <script setup>
  import {ref , onMounted } from "vue"
  import axios from 'axios'


 
var userData = ref([])
const dialog = ref(false)
var emailProfile = ref(emailProfile)
var phoneNumberProfile = ref(phoneNumberProfile)
var addressProfile = ref(addressProfile)
var nameProfile = ref(nameProfile)
var oldPasswordProfile = ref(oldPasswordProfile)
var newPasswordProfile = ref(newPasswordProfile)
var Freelance = ref(true)
 function getUserProfile(){

if(process.client){
  
  // const sendToken = ref({
    //   "auth-token" : userToken.value
    // })
    if(localStorage.getItem('clientType') == 'Company'){
         Freelance.value = false
    }
 
   }
  
  const authToken =  ref(localStorage.getItem('userToken'))
const userToken = ref({
  "authToken" : authToken.value
})
if(authToken.value == null){
  navigateTo('/')
}else{
  axios.post('http://127.0.0.1:8000/api/user/getUserData',userToken.value)
  .then(res=>{
    emailProfile.value = res.data.email
    nameProfile.value = res.data.name
    addressProfile.value = res.data.address
    phoneNumberProfile.value = res.data.phoneNumber
   if(res.data.msg == 'token_invalid'){
    navigateTo('/')
   }
  })
}
} 



function updateProfile(){
  if(process.client){
    console.log(emailProfile.value);
    var authToken =  ref(localStorage.getItem('userToken'))
  }
  const profileData = ref({
     'email' : emailProfile.value,
     'name' : nameProfile.value,
     'address' : addressProfile.value,
     'phoneNumber' : phoneNumberProfile.value,
     'password' : newPasswordProfile.value == '' ? null : newPasswordProfile.value,
     'authToken' : authToken.value
  })
  console.log(profileData.value);
     axios.post('http://127.0.0.1:8000/api/user/updateProfile',profileData.value)
    .then(res=>{
        console.log(res.data);
    })
}
function logout(){
  if(process.client){
    const authToken = ref({
       'authToken' : localStorage.getItem('userToken')
    })
    axios.post('http://127.0.0.1:8000/api/user/logout',authToken.value)
    .then(res=>{
       console.log(res.data);
       if(res.data.msg == 'Successfully logged out'){
           navigateTo('/')
       }
    })
  }
}
const drawer = ref(false)



  onMounted(
    getUserProfile
  )
  </script>
  
  <style scoped>
  .test{
    padding:10px;
    border : solid 2px lightblue;
    border-radius: 5px;
    width: 100%;
  }
  .test::placeholder{
    color:black
  }
  .navBar a{
    text-decoration: none;
    color:white
  }

  </style>