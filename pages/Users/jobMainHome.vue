<template>
    <navBar/>
    <v-container class="pt-15 firstsection">
      <!-- start first section -->
        <v-row>
<v-col lg="6" class="leftOfSection1">
   <h1 class="text1">Are You Looking For Specific Job?</h1>
   <v-btn to="addjob" color="secondary" id="jobButton" class="mt-5 ml-8">Add Job <v-icon>mdi-drag</v-icon>
   </v-btn><br>
   <v-btn id="searchJob" to="jobsearch" color="secondary" class="mt-5 ml-8">Search Jobs<v-icon class="ml-5">mdi-magnify</v-icon>
   </v-btn>
</v-col>
<v-col lg="6">
<img height="110%" width="110%" src="/findjobmainhome.jpg" alt="">
</v-col>
</v-row>
<!-- end first section -->

<!-- start second section -->

        <v-row class="section2">
        <v-col lg="12" class="text-center">
        <v-subheader class="text-h4"> checkout The Best jobs Here </v-subheader>
        </v-col>
        <v-col lg="3">
          <v-card
            class="mx-auto"
            height="200"
            image="/denist.jpg"
            max-width="200"
            theme="dark"
            title="Dentist"
          ></v-card>
        </v-col>
        <v-col lg="3">
          <v-card
            class="mx-auto"
            height="200"
            image="/journalist.jpg"
            max-width="200"
            theme="dark"
            title="Journalist"
          ></v-card>
        </v-col>
        <v-col lg="3">
          <v-card
            class="mx-auto"
            height="200"
            image="/engineer.png"
            max-width="200"
            theme="dark"
            title="Engineer"
          ></v-card>
        </v-col>
        <slot>
          <v-col lg="3">
            <v-card
              class="mx-auto"
              height="200"
              image="/realstate.jpeg"
              max-width="200"
              theme="dark"
              title="Real Estate"
            ></v-card>
          </v-col>
          <v-col lg="3">
            <v-card
              class="mx-auto"
              height="200"
              image="/softdevelopefind.jpg"
              max-width="200"
              theme="dark"
              title="Software Developer"
            ></v-card>
          </v-col>
          <v-col lg="3">
            <v-card
              class="mx-auto"
              height="200"
              image="/lawyer.jpg"
              max-width="200"
              theme="dark"
              title="Lawyer"
            ></v-card>
          </v-col>
          <v-col lg="3">
            <v-card
              class="mx-auto"
              height="200"
              image="/busniss.jpg"
              max-width="200"
              theme="dark"
              title="Business"
            ></v-card>
          </v-col>
          <v-col lg="3">
            <v-card
              class="mx-auto"
              height="200"
              image="/Education.jpg"
              max-width="200"
              theme="dark"
              title="Education"
            ></v-card>
          </v-col>
        </slot>
        </v-row> 
        <!-- end second section -->

        <!-- start third section -->
        <v-row class="section3">
            <v-col lg="12" class="text-center">
            <v-subheader class="text-h4"> Companies </v-subheader>
            </v-col>
            <v-col lg="8" class="company">
              <v-card
              class="mx-auto"
              max-width="300"
            >
              <v-img
                height="230px"
                src="\bankahly.jpg"
                cover
              ></v-img>
          
              <v-card-title>
             National Bank of Egypt
              </v-card-title>
          
              <v-card-subtitle>
              becomes most valuable Egyption brand
              </v-card-subtitle> 
              <v-card-actions>
                <v-btn
                  color="black-lighten-2"
                  variant="text"
                >
                  More
                </v-btn>
          
                <v-spacer></v-spacer>
          
                <v-btn
                  :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                  @click="show = !show"
                ></v-btn>
              </v-card-actions>
            </v-card>
            </v-col>
             
              <v-col lg="3">
                <v-card
              class="mx-auto"
              max-width="300"
            >
              <v-img
                height="230px"
                src="\ezzsteal.jpg"
                cover
              ></v-img>
              <v-card-title>
               Ezz steel
              </v-card-title>
              <v-card-subtitle>
               is the second fastest growing brand in the ranking
              </v-card-subtitle>
              <v-card-actions>
                <v-btn
                  color="black-lighten-2"
                  variant="text"                >
                  More
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                  :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                  @click="show = !show"
                ></v-btn>
              </v-card-actions>
            </v-card>
              </v-col>
            </v-row>
              <!-- end third section -->
            </v-container>
</template>
<script setup>
import {ref,onMounted} from 'vue'
 function ensureIfCompany(){
  if(process.client){
    if(localStorage.getItem('clientType') == 'Company'){

      document.getElementById('searchJob').style.display = 'none'
    }else if(localStorage.getItem('clientType') == "User"){
      document.getElementById('jobButton').style.display = 'none'
    }
  }
}
 onMounted(ensureIfCompany)
</script>
<style scoped>
.leftOfSection1{
   position: relative;
   top:40px
}
h1.text1{
  text-align: center;
  font-size: 45px;
  font-weight: bold;
  width:350px;
  color:  rgb(151, 206, 186);
 }
.v-btn.vsearch{
  margin-top: 15px;
 font-weight: bold;
 background-color: rgb(151, 206, 186) ;
}
.searchtop{
 margin-top: 40px;
}
.text-h4{

  text-align: center;
  font-weight: bold;
  color:  rgb(151, 206, 186);
 
}
.section2{
    margin-top: 130px;
margin-bottom: 70px;
}
.section1{

    margin-right: 60px;

    } 
  .firstsection{
    position:relative;
    top:150px 
  }
</style>