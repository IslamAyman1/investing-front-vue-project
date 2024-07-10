<template>
    <navBar/>
     
    <v-alert
      type="warning"
      variant="outlined"
      class="ma-2"
      style="position: relative;top:140px"
      v-model="alertBadgeForRemove"
    >
    The Project is Deleted Successfully
    </v-alert>
    <div style="position: relative;top:150px" class="ma-5" v-for="info in projectInfo">
      <div>
        <v-card 
        elevation="3"
        append-icon="mdi-check"
        class="mx-auto mt-5"
        prepend-icon="mdi-account"
        :title="info.jobTitle"
      >
        <div class="d-flex justify-space-evenly ma-2">
        <v-card-text>{{ info.description }}</v-card-text>
        <v-card-text>Balance: {{ info.skills }}</v-card-text>
        <v-card-text>Balance: {{ info.Salary }}</v-card-text>

           <v-card-action><v-btn color="secondary" @click="removeProject(info.id)">Remove</v-btn></v-card-action>
        </div>
      </v-card>    
      </div>
      
    </div>
 <!-- <footers class="MyFooter"/> -->

</template>
<script setup>
import {ref,onMounted} from "vue"
import axios from "axios";
 
var projectInfo = ref()
function getData(){
   if(process.client){
    const info = ref({
        'authToken' : localStorage.getItem('userToken'),
    })
    axios.post('http://127.0.0.1:8000/api/user/getAppliedProjectJob',info.value)
    .then(res=>{
      console.log(res.data); 
      projectInfo.value = res.data.result.jobs
    })
   }
}

 
var alertBadge = ref(false)


var alertBadgeForRemove = ref(false)
function removeProject(id){
  if(process.client){
    const Info = ref({
       'id' : id,
       'authToken' : localStorage.getItem('userToken'),
    })
    axios.post('http://127.0.0.1:8000/api/user/removeJobProject',Info.value)
    .then(res=>{
       alertBadgeForRemove.value = true
       setTimeout(() => {
        alertBadgeForRemove.value = false
       }, 2000);
    })
    setTimeout(() => {
       window.location.reload()
    }, 3000);
  }
}
onMounted(getData)
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