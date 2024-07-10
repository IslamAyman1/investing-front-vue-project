<template>
    <navBar/>
    <div style="position: relative;top:140px ;margin: 15px;" v-for="projects in appliedProjects">
      <v-alert
  type="warning"
  variant="outlined"
  class="ma-2"
  v-model="alertBadge"
>
The Project You Applied is Removed
</v-alert> 
      <v-card
        elevation="3"
        append-icon="mdi-check"
        class="mx-auto mt-5"
        prepend-icon="mdi-account"
        :title="projects.freelanceName" 
      >
        <div class="d-flex justify-space-evenly ma-2">
        <v-card-text>{{ projects.description }}</v-card-text>
        <v-card-text>Balance : {{ projects.freelanceBudget }}</v-card-text>
        <v-card-text>Skills : {{ projects.skills }}</v-card-text>
        <v-card-text>Finish In : {{ projects.freelanceTime }}</v-card-text>
        <v-card-action ><v-btn color="secondary" @click="removeApplied(projects.id)">Remove</v-btn></v-card-action>
        </div>
      </v-card>  
    </div>
</template>
<script setup>
import {ref,onMounted} from "vue"
import axios from "axios"
var appliedProjects = ref()
var alertBadge = ref(false)
function getAppliedProjectFreelance(){
    if(process.client){
         const Info = ref({
            'authToken' : localStorage.getItem('userToken')
         })
        axios.post('http://127.0.0.1:8000/api/user/getAppliedProjectFreelance',Info.value)
        .then(res=>{
             console.log(res.data); 
             appliedProjects.value = res.data.result.freelances
        })
    }
}
function removeApplied(id){
  if(process.client){
  var Info = ref({
     'authToken' : localStorage.getItem('userToken'),
     'id' : id
  })
    axios.post('http://127.0.0.1:8000/api/user/removeAppliedFreelance',Info.value)
    .then(res=>{
       console.log(res.data.msg)
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
onMounted(getAppliedProjectFreelance)
</script>