<template>
    <navBar/>
    
    <v-alert
      type="success"
      variant="outlined"
      class="ma-2"
      style="position: relative;top:140px"
      v-model="alertBadge"
    >
    The Project is Updated Successfully
    </v-alert>
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
        :title="info.projectTitle"
      >
        <div class="d-flex justify-space-evenly ma-2">
        <v-card-text>{{ info.description }}</v-card-text>
        <v-card-text>Balance: {{ info.projectBalance }}</v-card-text>
        
    <v-dialog
      v-model="dialog"
      max-width="600"
    >
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          class="text-none font-weight-regular mr-2"
          prepend-icon="mdi-account"
          text="Edit"
          @click="insertData(info)"
          color="secondary"
          v-bind="activatorProps"
        ></v-btn>
      </template>

      <v-card
        prepend-icon="mdi-account"
        title="Project"
      >
        <v-card-text>
          <v-row dense>
            <v-col
              cols="12"
              md="4"
              sm="6"
            >
              <v-text-field
                type="text"
                variant="outlined"
                density="compact"
                label="project title"
                v-model="projectTitle"
              />
            </v-col>

            <v-col
              cols="12"
              md="4"
              sm="6"
            >
              <v-text-field
                variant="outlined"
                density="compact"
                label="description"
                v-model="description"
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="4"
              sm="6"
            >
              <v-text-field
                label="Project Balance"
                v-model="projectBalance"
                variant="outlined"
                density="compact"
                required
              />
            </v-col>

            <v-col
              cols="12"
              md="4"
              sm="6"
            >
              <v-text-field
                label="Investor Number"
                required
                v-model="investorNumber"
                variant="outlined"
                density="compact"
              ></v-text-field>
            </v-col>

            <v-col
             
            >
              <v-file-input
                label="photo"
                type="file"
                required
                variant="outlined"
                density="compact"
              />
            </v-col>


          

           
          </v-row>

          <small class="text-caption text-medium-emphasis">*indicates required field</small>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text="Close"
            variant="plain"
            @click="dialog = false"
          ></v-btn>

          <v-btn
            color="primary"
            text="Save"
            variant="tonal"
            @click="updateData"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

           <v-card-action><v-btn color="secondary" @click="removeProject(info.id)">Remove</v-btn></v-card-action>
        </div>
      </v-card>    
      </div>
      
    </div>
 <!-- <footers class="MyFooter"/> -->

</template>
<script setup>
import {ref,onBeforeMount} from "vue"
import axios from "axios";
const dialog = ref(false)
var projectId = ref()
var projectBalance = ref()
var description = ref()
var projectTitle = ref()
var investorNumber = ref()
var projectInfo = ref() 

function getData(){
   if(process.client){
    const info = ref({
        'authToken' : localStorage.getItem('userToken'),
        'keyPro' : 'invest'
    })
    axios.post('http://127.0.0.1:8000/api/user/getUserProjects',info.value)
    .then(res=>{
      console.log(res.data); 
      projectInfo.value = res.data.result
    })
   }
}
function insertData(info){
  projectId.value = info.id
  projectTitle.value = info.projectTitle
  projectBalance.value = info.projectBalance
  description.value = info.description
  investorNumber.value = info.investorNumber
}

var alertBadge = ref(false)
function updateData(){
if(process.client){
  const updatedData = ref({
  'id' : projectId.value,
  'projectTitle' : projectTitle.value,
  'projectBalance' : projectBalance.value,
  'description' : description.value,
  'investorNumber' : investorNumber.value,
  'authToken' : localStorage.getItem('userToken'),
  'keyProj' : 'invest'
})
  axios.post('http://127.0.0.1:8000/api/user/updateAddedProject',updatedData.value)
  .then(res=>{
    dialog.value = false
     alertBadge.value = true
     setTimeout(() => {
     alertBadge.value = false
     }, 2000);
    
     console.log(res.data);
  })
  setTimeout(() => {
    window.location.reload();
  }, 3000);      
}
}
var alertBadgeForRemove = ref(false)

function removeProject(id){
  if(process.client){
    const Info = ref({
       'id' : id,
       'authToken' : localStorage.getItem('userToken'),
       'keyProj' : 'invest'
    })
    axios.post('http://127.0.0.1:8000/api/user/removeInvestProject',Info.value)
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
onBeforeMount(getData)
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