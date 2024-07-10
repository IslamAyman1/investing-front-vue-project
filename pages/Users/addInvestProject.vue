<template>
    <navBar/>
 <v-row class="mt-15 addproject">
    <v-col>
        <form >
            <!-- <v-file-input
                accept="image/png, image/jpeg, image/jpg"
                label="Photo"
                class="ml-4 mr-3"
                placeholder="Pick an Photo"
                prepend-icon="mdi-camera"
      variant="outlined"
                v-model="photo"
            /> -->
     <v-text-field
        label="Project Idea"
        class="ml-4 mr-3"
      variant="outlined"
        type="text"
        v-model="projectTitle"
           />   
    <v-textarea
      label="Description"
      variant="outlined"
      class="ml-4 mr-3"
      auto-grow
      v-model="description"
    />
    <v-text-field
    label="Budget Range"
      variant="outlined"
    class="ml-4 mr-3"
        type="number"
        v-model="projectBalance"
    /> 
    <v-text-field
    label="Number Of Investors"
      variant="outlined"
    class="ml-4 mr-3"
        type="number"
        v-model="investorNumber"
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
<v-btn color="secondary" @click="AddPost" class="btnPost">Post</v-btn>
</div>
 <!-- <footers class="MyFooter"/> -->
</template>
<script setup>
import {ref} from "vue"
import axios from "axios";
// definePageMeta({
//     middleware:'auth'
// })
var projectTitle = ref(projectTitle)
var description = ref(description)
var projectBalance = ref(projectBalance)
var investorNumber = ref(investorNumber)
var photo = ref(photo)
function AddPost(){
    //   const formData = new FormData();
    //   formData.append('photo', photo.value);
   if(process.client){
    const postInformation = ref({
       'projectTitle' : projectTitle.value,
       'description' : description.value,
       'projectBalance' : projectBalance.value,
       'investorNumber' : investorNumber.value,
       'authToken' : localStorage.getItem('userToken')
    })
    
    // console.log(postInformation.value);
    axios.post('http://127.0.0.1:8000/api/user/addInvestingProject',postInformation.value,{
        headers : {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then(res=>{
        if(res.data == 'succefully'){
            navigateTo('investMainHome')
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
.addproject{
    position: relative;
    top:100px
}
.btnPost{
    position: relative;
    top:90px
}
</style>