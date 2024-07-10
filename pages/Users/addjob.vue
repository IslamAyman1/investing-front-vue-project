<template>
    <navBar/>
 <v-row class="mt-15 firstsection">
    <v-col>
        <form>
     <v-text-field
        label="Job Title"
        class="ml-4 mr-3"
      variant="outlined"
        type="text"
        v-model="jobTitle"
           />   
    <v-textarea
      label="Description"
      variant="outlined"
      class="ml-4 mr-3"
      auto-grow
      v-model="description"
    />
    <v-text-field
    label="Salary"
      variant="outlined"
    class="ml-4 mr-3"
        type="number"
        v-model="Salary"
    />   
    <v-text-field
        label="Requirement Skills"
      variant="outlined"
        class="ml-4 mr-3"
        type="text"
        v-model="skills"
    /> 
   </form>
    </v-col>
    <v-col>
        Start completing your project<br>Whatever your completed project that you wish to obtain through an independent company, enter the details of the project, budget, and contractual period with you that you wish to do so and share it for free. After that, the freelancers in the projects will see a page with you and they must choose the 
        appropriate design for you for the independence and the project.<br><br><br><br>
        An independent website that guarantees your rights<br>He acts as an intermediary between you and the freelancer who hired him for your project. Only after the completion of the freelance project implementation is it completely transferred to his account.<br><br><br><br>
        Tips for a successful business<br>Clarify all the details that need to be accomplished<br>Fill in all the names and hide examples of what you want to implement<br>Partial project and large tasks in multiple small phases
    </v-col>
</v-row>
<div class="d-flex justify-center mt-8">
<v-btn color="secondary" @click="AddPost" class="btnpost">Post</v-btn>
</div>
 <!-- <footers class="MyFooter"/> -->
</template>
<script setup>
import {ref} from "vue"
import axios from "axios";
definePageMeta({
    middleware:'auth'
})
var jobTitle = ref(jobTitle)
var description = ref(description)
var skills = ref(skills)
var Salary = ref(Salary)
function AddPost(){
    //   const formData = new FormData();
    //   formData.append('photo', photo.value);
   if(process.client){
    const postInformation = ref({
       'jobTitle' : jobTitle.value,
       'description' : description.value,
       'skills' : skills.value,
       'Salary' : Salary.value,
       'authToken' : localStorage.getItem('userToken')
    })
    
    // console.log(postInformation.value);
    axios.post('http://127.0.0.1:8000/api/user/addJob',postInformation.value)
    .then(res=>{
        if(res.data.msg == 'succefully'){
            navigateTo('jobMainHome')
        }
    })
   }
}
</script>

<style scoped>
.MyFooter{
    position:absolute;
    bottom: 0;
    width: 100%;
}
.firstsection{
    position: relative;
    top: 100px;
}
.btnpost{
    position: relative;
    top: 140px;
}
</style>