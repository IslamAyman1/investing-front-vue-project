<template>
    <h1 class="loginWord text-center mt-5">Register New Account!</h1>
   <form class="mt-10">
   <v-row>
    <v-text-field
            label="Name"
             class="ml-4 mr-1"
             type="text"
             variant="outlined"
            v-model="name"
          />   
   </v-row>
       <v-row>
        <v-text-field
            label="Email"
             class="ml-4"
             type="email"
             variant="outlined"
            v-model="email"
          />   
           <v-text-field
            label="address"
             class="ml-1 mr-1"
             type="text"
             variant="outlined"
            v-model="address"
          />
       </v-row>

       <v-row>
        <v-select
        v-model="role"
         label="Choose Your Role"
        :items="['User', 'Company']"
        density="compact"
        variant="outlined"
        class="ml-5 mr-2"
          />
          
       </v-row>
       <v-row>
        <v-text-field
            label="Phone"
            class="ml-4 mr-3"
             type="number"
             variant="outlined"
            v-model="phone"
          />
       </v-row>
       <v-row>
        <v-text-field
            label="password"
             class="ml-4"
             variant="outlined"
             type="password"
            v-model="password"
          />   
           <v-text-field
            label="ConfirmPassword"
             class="ml-1 mr-1"
             type="password"
             variant="outlined"
            v-model="confirmPassword"
          />
       </v-row>
        
    <a href="/" class="ml-2 goToLogin text-decoration-none ">Already Have An Account?</a>
          <div class="d-flex justify-center mb-5">

          <v-btn @click="GetRegisterData" color="secondary" class="w-50 mt-5">
            <v-progress-circular indeterminate class="mr-5" v-if="loader"></v-progress-circular>
            
            Sign up</v-btn>
          </div>
   </form>
   <div class="text-center">

    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
      <div v-for="errors in msg">
         <div v-for="error in errors" class="errorMessage">{{ error }}</div>
      </div>

      <template v-slot:actions>
        <v-btn
          color="blue"
          variant="text"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script setup>
import {ref} from "vue"
import axios from "axios";
definePageMeta({
    layout:"login-layout"
})
var name = ref(name)
var email = ref(email)
var address = ref(address)
var role = ref(role)
var phone = ref(phone)
var password = ref(password)
var confirmPassword = ref(confirmPassword)
const snackbar = ref(false)
const timeout=ref(2000)
const msg = ref();
function GetRegisterData(){
    if(process.client){
        localStorage.setItem('Role',role.value) 
    }
    const GetRegisterData = ref({
        'name' : name.value,
        'email' : email.value,
        'address' : address.value,
        'phoneNumber' : phone.value,
        'clientType' : role.value,
        'password' : password.value,
        'confirmPassword' : confirmPassword.value,
    })
     loader.value = true
    axios.post('http://127.0.0.1:8000/api/user/userRegister',GetRegisterData.value)
    .then(res=> {
       loader.value = false
       snackbar.value = true
       msg.value = res.data.msg
      if(res.data.status == 200){
        window.location.replace("http://localhost:3000/verifyEmailRegister");
      }
    })
}
var loader = ref(false)
</script>
<style scoped>
.errorMessage{
  font-size: large;
  text-align: center;
}
</style>