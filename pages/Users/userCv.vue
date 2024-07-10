<template>
    <navBar/>
   <div style="position: relative;top:180px">
    <v-alert
  type="success"
  variant="outlined"
  class="ma-2"
  style="position: relative;top:-10px"
  v-model="alertBadge"
>
Cv is Created Successfully
</v-alert>
    <form class="ma-5" id="cv">
<v-row >
<v-text-field
    label="Name"
    class="ml-4 mr-1"
    type="text"
    variant="solo"
    v-model="name"
    />   
    <v-text-field
    label="skills"
    class="ml-4"
    type="text"
    variant="solo"
    v-model="skills"
    /> 
    <v-text-field
    label="education"
    class="ml-4 mr-4"
    variant="solo"
    type="text"
    v-model="education"
    />
</v-row>


<v-row>
<v-text-field
    variant="solo"
v-model="phone"
    label="phone"
    class="ml-4"
type="text"
    />
    <v-text-field
    label="address"
    class="ml-4 mr-1"
    variant="solo"
        type="text"
    v-model="address"
    />  
    <v-text-field
    label="Email"
        class="ml-4 mr-3"
    variant="solo"
        type="Email"
    v-model="email"
    /> 
</v-row>
<v-row>
    <v-text-field
    label="linkedIn"
        class="ml-4"
    variant="solo"
        type="url"
    v-model="linkedIn"
    />
   
    
    <v-text-field
    label="Nationality"
        class="ml-4 mr-3"
    variant="solo"
        type="text"
    v-model="Nationality"
    /> 
    <v-text-field
    label="marital_Status"
        class="ml-2 mr-3"
    variant="solo"
        type="text"
    v-model="marital_Status"
    />  
</v-row> 
<v-row>

    <v-text-field
    label="military_Service"
        class="ml-4 mr-3"
    variant="solo"
        type="text"
    v-model="military_Service"
    />
    <v-text-field
    label="career_objective"
        class="ml-3 mr-3"
    variant="solo"
        type="text"
    v-model="career_objective"
    /> 
    <v-text-field
    label="projects"
        class="ml-3 mr-3"
    variant="solo"
        type="text"
    v-model="projects"
    />  
</v-row>
<v-row>

  
    <v-text-field
    label="Birthday"
    variant="solo"
    class="ml-4 mr-4"
    type="date"
    v-model="Birthday"
    /> 
    <v-text-field
    label="Job Title"
    variant="solo"
    class="ml-4 mr-4"
    type="text"
    v-model="jobTitle"
    /> 
 
</v-row>
    <div class="d-flex justify-center mt-9">
    <v-btn @click="createCv" color="secondary">Create Cv</v-btn> 
    </div> 
</form>
   </div>
</template>
<script setup>
import axios from 'axios';
import {ref} from 'vue'

var name = ref()
var skills = ref()
var education = ref()
var phone = ref()
var address = ref()
var email = ref()
var linkedIn = ref()
var Birthday = ref()
var Nationality = ref()
var marital_Status = ref()
var military_Service = ref()
var career_objective = ref()
var jobTitle = ref()
var projects = ref()
var alertBadge = ref(false)
function createCv(){
   if(process.client){
    const cvDetails = ref({
        'name' : name.value,
        'skills' : skills.value,
        'education' : education.value,
        'phone' : phone.value,
        'address' : address.value,
        'email' : email.value,
        'linkedIn' : linkedIn.value,
        'Birthday' : Birthday.value,
        'Nationality' : Nationality.value,
        'marital_Status' : marital_Status.value,
        'military_Service' : military_Service.value,
        'career_objective' : career_objective.value,
        'projects' : projects.value,
        'jobTitle' : jobTitle.value,
        'authToken' : localStorage.getItem('userToken')
    })
    axios.post('http://127.0.0.1:8000/api/user/addCv',cvDetails.value)
    .then(res=>{
        console.log(res.data.msg)
        if(res.data.status == 200){
            alertBadge.value = true
            setTimeout(() => {
            navigateTo('userProfile')
        }, 3000);
        }})}
}
</script>

<style scoped>

</style>