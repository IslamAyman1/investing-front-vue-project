<template>
    <navBar/>
    <v-alert
  type="warning"
  variant="outlined"
  class="ma-2"
  style="position: relative;top:150px"
  v-model="alertBadge"
>
The Project You Applied is Removed
</v-alert> 
    <div style="position: relative;top:140px ;margin: 15px;" v-for="projects in appliedProjects">

      <v-card
        elevation="3"
        append-icon="mdi-check mr-2"
        class="mx-auto mt-5"
        prepend-icon="mdi-account"
        :title="projects.projectTitle"
      >
        <div class="d-flex justify-space-evenly  ma-2">
        <v-card-text>{{ projects.description }}</v-card-text>
        <v-card-text>Balance: {{ projects.projectBalance }}</v-card-text>
        <v-card-text>Investor Number: {{ projects.investorNumber }}</v-card-text>
        <v-btn color="secondary" class="mr-4" flat  width="200" @click="removeApplied(projects.id)">Remove</v-btn>
        </div>
      </v-card>  
    </div>
</template>
<script setup>
import {ref,onMounted} from "vue"
import axios from "axios"
var appliedProjects = ref()
function getAppliedProjectForInvesting(){
    if(process.client){
         const Info = ref({
            'authToken' : localStorage.getItem('userToken')
         })
        axios.post('http://127.0.0.1:8000/api/user/getAppliedProjectInvesting',Info.value)
        .then(res=>{
             console.log(res.data); 
             appliedProjects.value = res.data.result.investings
        })
    }
}
var alertBadge = ref(false)
function removeApplied(id){
  var Info = ref({
     'authToken' : localStorage.getItem('userToken'),
     'id' : id
  })
  if(process.client){
    axios.post('http://127.0.0.1:8000/api/user/removeAppliedInvesting',Info.value)
    .then(res=>{
       if(res.data.status == 200){
        alertBadge.value = true
       }
       setTimeout(() => {
          alertBadge.value = false
       }, 3000);
       setTimeout(() => {
          window.location.reload()
       }, 3500);
    })
  }
}
onMounted(getAppliedProjectForInvesting)
</script>