<template>
  <navBar/>
  <v-alert
  type="success"
  variant="outlined"
  class="ma-2"
  style="position: relative;top:140px"
  v-model="alertBadge"
>
You Applied In Project Successfully
</v-alert>
    <div class="content">
      
    <input
      v-model="searchInPagination"
      @input="getProject"
      placeholder='search Template'
      class="searchField"
    />
   
    <v-card class="paginationCard">
          <v-container>
            <v-data-iterator
            :items="projects"
            :items-per-page="1"
            :search="search"
            > 
      <template v-slot:default="{ items }">
        <v-container class="pa-2 "  >
             <v-col
              v-for="project in projects"
              md="12"
            >
              <v-card class="pb-3" border flat
              elevation="3"
        append-icon="mdi-check"
        prepend-icon="mdi-account"
        :title="project.projectTitle"
              >

              <div class="d-flex justify-space-evenly ma-2">
        <v-card-text>{{ project.description }}</v-card-text>
        <v-card-text>Balance : {{ project.projectBalance }}</v-card-text>
        <v-card-text>Investor : {{ project.investorNumber }}</v-card-text>
        <v-btn
                    class="text-none ma-4 "
                    text="Apply"
                    color="secondary"
                    @click="applyUsers(project.id)"
                  >
                  </v-btn>
        </div>
             
              </v-card>
            </v-col>
         </v-container>
      </template>

      <template v-slot:footer="{ page, pageCount, prevPage }">
        <div class="d-flex align-center justify-center pa-4">
          <v-btn
            :disabled="currentPage === 1"
            density="comfortable"
            icon="mdi-arrow-left"
            variant="tonal"
            rounded
            @click="getProject('previous',currentPage)"
          ></v-btn>

          <div class="mx-2 text-caption">
            Page {{ currentPage }} of {{ lastPage }}
          </div>

          <v-btn
            :disabled="currentPage >= lastPage"
            density="comfortable"
            icon="mdi-arrow-right"
            variant="tonal"
            rounded
            @click="getProject('next',currentPage)"
          ></v-btn>
        </div>
      </template>
    </v-data-iterator>
  </v-container>
  </v-card>
    </div>
    <!-- <footers/> -->
</template>
<script setup> 
import {ref,onMounted} from 'vue';
import axios from 'axios';
var projects = ref([])
const currentPage = ref(1) 
var lastPage = ref()
var searchInPagination = ref()

 definePageMeta({
    middleware:'auth'
})
function getProject(d ,n){
   if(!searchInPagination.value){
    if(d == 'next'){
        var page = ++n
          axios.get(`http://127.0.0.1:8000/api/user/investingPagination?page=${n}`)
    .then(res=>{
        projects.value = res.data.data
        currentPage.value = res.data.current_page
        lastPage.value = res.data.last_page
        console.log(res.data);
    })
    }else if (d == 'previous'){
        var page = --n
          axios.get(`http://127.0.0.1:8000/api/user/investingPagination?page=${n}`)
    .then(res=>{
        projects.value = res.data.data
        currentPage.value = res.data.current_page
        lastPage.value = res.data.last_page
        console.log(res.data);
    })
    }else{
        axios.get(`http://127.0.0.1:8000/api/user/investingPagination?page=1`)
    .then(res=>{
        projects.value = res.data.data
        currentPage.value = res.data.current_page
        lastPage.value = res.data.last_page
        console.log(res.data);
    })
    }
   }else{
    searchInPagination = ref({
        "searchInPagination" : searchInPagination.value
    })
    axios.post('http://127.0.0.1:8000/api/user/search',searchInPagination.value)
    .then(res=>{
        projects.value = res.data.result
    })
   }
 }
 var alertBadge = ref(false)
function applyUsers(id){
  const Info = ref({
    'authToken' : localStorage.getItem('userToken'),
    'id' : id
  })
  console.log(Info.value);
  if(process.client){
    axios.post('http://127.0.0.1:8000/api/user/userApplyInvesting',Info.value)
    .then(res=>{
      console.log(res.data.status);
         alertBadge.value = true
    }) 
    setTimeout(() => {
      alertBadge.value = false
    }, 2500);
}
}

onMounted(getProject)
</script>
<style>
.paginationCard{
   position: relative;
   top:60px
}
.searchField{
     position:relative;
     left:40%;
     top:20px;
     border: solid rgb(88, 168, 195) 2px;
     padding:10px;
     border-radius: 14px;
}
.descriptionText{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  }
  .content{
    position: relative;
    top:140px
  }
</style>