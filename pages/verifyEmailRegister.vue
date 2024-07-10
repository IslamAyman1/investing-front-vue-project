<template>
 <v-container class="card">
   <v-card>
    <h2 class="text-center mt-2">Enter Code Here</h2>
    <v-text-field variant="outlined" v-model="verifyEmail" type="number" class="ml-2 mr-2 mt-5" placeholder="enter code here" />
    <v-btn @click="verifyEmailCode" color="secondary" class="submitBtn">Submit</v-btn>
   </v-card>
 </v-container>
</template>
<script setup>
import {ref} from "vue"
import axios from "axios"
definePageMeta({
    layout:false
})
var verifyEmail = ref(verifyEmail)

function verifyEmailCode(){
    const code = ref({
    "verifyEmail" : verifyEmail.value
   })
    axios.post('http://127.0.0.1:8000/api/user/checkCode',code.value)
    .then(res=>{
        if(res.data.msg == 'login'){
            alert('Your Email is verified');
            window.location.replace("http://localhost:3000");
        }
    })
    console.log(verifyEmail.value);
} 

</script>
<style>
.card{
    position: relative;
    top:220px;
    width:500px
}
.submitBtn{
    position: relative;
    left:180px;
    margin:8px;

}
</style>