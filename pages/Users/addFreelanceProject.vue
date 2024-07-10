<template>
    <navBar/>
 <v-row class="addproject">
    <v-col>
        <form>
            <!-- <v-file-input
                accept="image/png, image/jpeg, image/jpg"
                label="Photo"
                class="ml-4 mr-3"
                variant="outlined"
                placeholder="Pick an Photo"
                prepend-icon="mdi-camera"
                v-model="photo"
            /> -->
     <v-text-field
        label="freelanceName"
        class="ml-4 mr-3"
        variant="outlined"
        type="text"
        v-model="freelanceName"
           />   
    <v-textarea
      label="Description"
      variant="outlined"
      class="ml-4 mr-3"
      auto-grow
      v-model="description"

    />
    <v-text-field
    label="freelanceBudget"
    class="ml-4 mr-3"
        type="number"
      variant="outlined"

        v-model="freelanceBudget"
    /> 
    <v-row class="mt-3 mr-1 ml-1">
        <v-text-field
    label="Finish At"
    class="ml-4 mr-3"
    variant="outlined"

        type="datetime-local"
        v-model="freelanceTime"
    /> 
    <v-text-field
    label="Skills"
    class="ml-4 mr-3"
        type="text"
      variant="outlined"
 
        v-model="skills"
    /> 
    </v-row>
   </form>
    </v-col>
    <v-col>
        Start completing your project<br>Whatever your completed project that you wish to obtain through an independent company, enter the details of the project, budget, and contractual period with you that you wish to do so and share it for free. After that, the freelancers in the projects will see a page with you and they must choose the 
        appropriate design for you for the independence and the project.<br><br><br>
        An independent website that guarantees your rights<br>He acts as an intermediary between you and the freelancer who hired him for your project. Only after the completion of the freelance project implementation is it completely transferred to his account.<br><br><br><br>
        Tips for a successful business<br>Clarify all the details that need to be accomplished<br>Fill in all the names and hide examples of what you want to implement<br>Partial project and large tasks in multiple small phases
    </v-col>
</v-row>
<div class="d-flex justify-center mt-8">
<v-btn color="secondary btnPost" @click="AddPost">Post</v-btn>
</div>
 <!-- <footers class="MyFooter"/> -->
</template>
<script setup>
import {ref} from "vue"
import axios from "axios";

var freelanceName = ref(freelanceName)
var description = ref(description)
var freelanceBudget = ref(freelanceBudget)
var freelanceTime = ref(freelanceTime)
var skills = ref(skills)
var freelanceTime = ref(freelanceTime)
var photo = ref(photo)
function AddPost(){
    //   const formData = new FormData();
    //   formData.append('photo', photo.value);
   if(process.client){
    const postInformation = ref({
       'freelanceName' : freelanceName.value,
       'description' : description.value,
       'freelanceBudget' : freelanceBudget.value,
       'freelanceTime' : freelanceTime.value,
       'skills' : skills.value,
       'authToken' : localStorage.getItem('userToken')
    })
    
    // console.log(postInformation.value);
    axios.post('http://127.0.0.1:8000/api/user/addFreelanceProject',postInformation.value,{
        headers : {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then(res=>{
        if(res.data == 'ok'){
            navigateTo('freelanceMainHome')
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
    top:180px
}
.btnPost{
    position: relative;
    top:200px
}
</style>