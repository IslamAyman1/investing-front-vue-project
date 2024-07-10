<template>
   <v-card>
    <v-layout>
      <v-navigation-drawer
        location="left"
        permanent
      >
        <template v-slot:prepend>
          <v-list-item
            lines="two"
            :prepend-avatar="http+userPhoto"
            subtitle="Logged in"
            :title="nameProfile"
          ></v-list-item>
        </template>

        <v-divider></v-divider>

        <v-list density="compact" >
          
          <v-expansion-panels class="mb-1" >
                  
      <v-expansion-panel
      >
        <v-expansion-panel-title expand-icon="mdi-menu-down">
          <div >
        <v-icon color="primary" class="mr-4">mdi-trending-up</v-icon>  
        <span>Investing</span>

          </div>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <NuxtLink class="text-decoration-none text-black" to="investMainHome">
            <v-icon  class="text-black">mdi-home</v-icon>
            Home
          </NuxtLink>
            <br>
          <NuxtLink class="text-decoration-none text-black" to="addedProjects">
            <v-icon class="text-black">mdi-drag</v-icon>
            Project added
          </NuxtLink><br>
          <NuxtLink class="text-decoration-none text-black" to="appliedProjects">
            <v-icon  class="text-black">mdi-login</v-icon>

            applied projects</NuxtLink>
        </v-expansion-panel-text>
      </v-expansion-panel>      
      <v-expansion-panel
      >
        <v-expansion-panel-title expand-icon="mdi-menu-down" v-if="freelanceTitle" >
          <div >
        <v-icon  color="primary"  class="mr-4">mdi-handshake</v-icon>  
        <span >Freelance</span>

          </div>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <NuxtLink class="text-decoration-none text-black" to="freelanceMainHome">
            <v-icon  class="text-black">mdi-home</v-icon>
            Home
          </NuxtLink>
            <br>
          <NuxtLink class="text-decoration-none text-black" to="addedProjectsFreelance">
            <v-icon class="text-black">mdi-drag</v-icon>

            Project added
          
          </NuxtLink><br>
          <NuxtLink class="text-decoration-none text-black" to="appliedProjectsFreelance">
            <v-icon class="text-black">mdi-login</v-icon>

            applied projects</NuxtLink>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel
      >
        <v-expansion-panel-title expand-icon="mdi-menu-down">
          <div >
        <v-icon color="primary" class="mr-4">mdi-briefcase</v-icon>  
        <span>Job</span>
          </div>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <NuxtLink class="text-decoration-none text-black" to="jobMainHome">
            <v-icon class="text-black">mdi-home</v-icon>
            Home
          </NuxtLink>       
            <br>
          <NuxtLink v-if="ifClientIsUser" id="jobhide" class="text-decoration-none text-black" to="addedProjectsJob">
            <v-icon class="text-black">mdi-drag</v-icon>

            Project added
          
          </NuxtLink><br>
          <NuxtLink v-if="ifClientIsCompany" class="text-decoration-none text-black" to="appliedOnProjects">
            <v-icon class="text-black">mdi-login</v-icon>
            applied projects</NuxtLink>
        </v-expansion-panel-text>
      </v-expansion-panel>

    </v-expansion-panels>          
          <v-divider></v-divider>
          <NuxtLink to="userCv" class="text-decoration-none text-black" v-if="createCv">
          <v-list-item prepend-icon="mdi-drag" title="Create Cv" />
          </NuxtLink>          
          <v-divider></v-divider>
          <NuxtLink v-if="createCv" target="_blank" :to="userEmail" class="text-decoration-none text-black">
          <v-list-item prepend-icon="mdi-file" title="Download CV" />
          </NuxtLink>
        </v-list> 
      </v-navigation-drawer>
      <v-main style="height: 100dvh">
        <v-list
            lines="two"
            subheader
            class="overflow-hidden ma-5"
          > 
            <v-list-subheader>Profile</v-list-subheader>
            <v-col>
          <v-text-field
        density="compact"
        placeholder="Email address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
        v-model="emailProfile"
      />
          </v-col>
         <v-col>
          <v-text-field
        density="compact"
        placeholder="Name"
        prepend-inner-icon="mdi-account-outline"
        variant="outlined"
        v-model="nameProfile"
      />
         </v-col>
              <v-col>
                <v-text-field
                  density="compact"
                  placeholder="address"
                  prepend-inner-icon="mdi-map-marker-outline"
                  variant="outlined"
                  v-model="addressProfile"
                />
              </v-col>
              <v-col>
                <v-text-field
                  density="compact"
                  placeholder="phone Number"
                  prepend-inner-icon="mdi-phone-outline"
                  variant="outlined"
                  type="number"
                  v-model="phoneNumberProfile"
                />
              </v-col>      
           
              <v-col>  
                <v-text-field
                  density="compact"
                  placeholder="New Password"
                  prepend-inner-icon="mdi-lock-outline"
                  variant="outlined"
                  v-model="newPasswordProfile"
                  type="password"
                />
          </v-col>
             <v-col>
              <v-file-input
    v-model="myphoto"
    color="deep-purple-accent-4"
    label="File input"
    placeholder="Select your files"
    variant="outlined"
  />        
     </v-col>
             
              
             <!-- <h3 class="float-left ml-2">Upload CV</h3><br>
               <input type="file"  class="mt-4 fileUpload" /><br><br>
                <NuxtLink to="userCv" class="mt-4 ml-2">Create Your CV?</NuxtLink><br>
                <NuxtLink id="havecv" class="ml-2"  href="http://127.0.0.1:8000/userCv/test2.pdf" target="_blank" download>download Cv</NuxtLink>
                <br> -->
             <v-btn color="secondary" class="mt-5 mb-4 ml-4" @click="updateProfile">Save</v-btn>
             
          </v-list>
      </v-main>
    </v-layout>
  </v-card>
   
</template>
<script setup>
import {ref , onMounted} from "vue"
import axios from 'axios'

const dialog = ref(false)
var emailProfile = ref(emailProfile)
var phoneNumberProfile = ref(phoneNumberProfile)
var addressProfile = ref(addressProfile)
var nameProfile = ref(nameProfile)
var oldPasswordProfile = ref(oldPasswordProfile)
var newPasswordProfile = ref(newPasswordProfile)
var myphoto = ref()
var userPhoto = ref()
var ifClientIsUser = ref(true)
var ifClientIsCompany = ref(true)
var http = 'http://127.0.0.1:8000/'
var userEmail = ref()
var freelanceTitle = ref(true)
var createCv = ref(true)
 function getUserProfile(){
if(process.client){
    if(localStorage.getItem('clientType') === 'Company'){
      freelanceTitle.value = false
      createCv.value = false
    }
    if(localStorage.getItem('clientType') === 'User'){
       ifClientIsUser.value = false
    }else if (localStorage.getItem('clientType') == 'Company'){
      ifClientIsCompany.value = false
    }
   }
  
  const authToken =  ref(localStorage.getItem('userToken'))
const userToken = ref({
  "authToken" : authToken.value
})
if(authToken.value == null){
  navigateTo('/')
}else{
  axios.post('http://127.0.0.1:8000/api/user/getUserData',userToken.value)
  .then(res=>{
    emailProfile.value = res.data.email
    userEmail.value = 'http://127.0.0.1:8000/userCv/'+res.data.email+'.pdf'
    nameProfile.value = res.data.name
    addressProfile.value = res.data.address
    phoneNumberProfile.value = res.data.phoneNumber
    userPhoto.value = res.data.photo
   if(res.data.msg == 'token_invalid'){
    navigateTo('/')
   } 
  })
}
} 



function updateProfile(){
  if(process.client){
    console.log(emailProfile.value);
    var authToken =  ref(localStorage.getItem('userToken'))
  }
  const profileData = ref({
     'email' : emailProfile.value,
     'name' : nameProfile.value,
     'address' : addressProfile.value,
     'phoneNumber' : phoneNumberProfile.value,
     'password' : newPasswordProfile.value,
     'photo' : myphoto.value  ,
     'authToken' : authToken.value
  })
  console.log(profileData.value);

     axios.post('http://127.0.0.1:8000/api/user/updateProfile',profileData.value,{
      headers : {
            'Content-Type': 'multipart/form-data'
        }
     })
    .then(res=>{
        console.log(res.data);
    })
}

function logout(){
  if(process.client){
    const authToken = ref({
       'authToken' : localStorage.getItem('userToken')
    })
    axios.post('http://127.0.0.1:8000/api/user/logout',authToken.value)
    .then(res=>{
       console.log(res.data);
       if(res.data.msg == 'Successfully logged out'){
           navigateTo('/')
       }
    })
  }
}

  onMounted(
    getUserProfile
  )
</script>
<style>
.fileUpload{
  position: relative;
  right:90px;
}
.hideFreelance{
  display: none;
}
</style>