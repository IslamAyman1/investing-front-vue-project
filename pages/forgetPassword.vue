<template>
  <v-text-field label="Enter Your Email" type="email" v-model="forgetPassword"/>
  <div class="d-flex justify-center">
    <v-btn color="secondary" to="" class="mb-8 w-50" @click="sendEmail">Submit</v-btn>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';
definePageMeta({
    layout:"forget-password-layout"
})   
var forgetPassword = ref(forgetPassword)
function sendEmail(){
  const userEmail = ref({
     "email" : forgetPassword.value
  })
  if(forgetPassword.value == null){
     alert('enter your email');
  }
  axios.post('http://127.0.0.1:8000/api/user/forgetPassword',userEmail.value)
  .then(res=>{
     if(res.data.status == 200){
      window.location.replace("http://localhost:3000/verifyEmail");
     }else{
       alert(res.data.msg);
     }
  })
}

</script>
<style scoped>
.forgetPasswordCard{
    position: relative;
    top:120px; 
    left:30%;
    width:500px
}
.warningPhoto{
    width: 200px;
    height: 180px;
    position: relative;
    left:132px
}
</style>