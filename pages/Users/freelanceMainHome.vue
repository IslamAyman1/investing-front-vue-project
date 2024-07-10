<template> 
      <navBar/>
    <v-container class="pt-15 firstsection">
      <!-- start first section -->
        <v-row>
          <v-col lg="6" class="leftOfSection1">
            <h1 class="text1">Are You Have Project Idea?</h1>
            
             <NuxtLink to="searchFreelanceProjects">
              <v-btn color="secondary" class="mt-5 ml-8">Search Freelance Projects<v-icon class="ml-5">
                mdi-magnify</v-icon>
            </v-btn>
             </NuxtLink>
            <br>
            <NuxtLink to="addFreelanceProject">
                <v-btn color="secondary" class="mt-5 ml-8">Add Freelance Project<v-icon class="ml-5">
                  mdi-post</v-icon>
            </v-btn>
            </NuxtLink>
          </v-col>
          <v-col lg="6">
          <img height="100%" width="110%" src="/freelancepage.jpg" alt="">
          </v-col>
        </v-row>
      <!-- end first section -->

        <!-- start second Sectino -->
        <v-row class="section2">
        <v-col lg="12" class="text-center">
        <v-subheader class="text-h4"> Choose Different Category</v-subheader>
        </v-col>
        <v-col lg="3">
          <v-card
            class="mx-auto"
            height="200"
            image="\freelancewriter.jpg"
            max-width="200"
            theme="dark"
            title="copyweiter" ></v-card>
        </v-col>
        <v-col lg="3">
          <v-card
            class="mx-auto"
            height="200"
            image="\transilator.png"
            max-width="200"
            theme="dark"
            title="translator"></v-card>
        </v-col>
        <v-col lg="3">
          <v-card
            class="mx-auto"
            height="200"
            image="\development.jpg"
            max-width="200"
            theme="dark"
            title="programmer"
          ></v-card>
        </v-col>
        <slot>
          <v-col lg="3">
            <v-card
              class="mx-auto"
              height="200"
              image="\editor.jpg"
              max-width="200"
              theme="dark"
              title="Designer"
            ></v-card>
          </v-col>
          <v-col lg="3">
            <v-card
              class="mx-auto"
              height="200"
              image="\digital-marketing.jpg"
              max-width="200"
              theme="dark"
              title="social media manager"
            ></v-card>
          </v-col>
          <v-col lg="3">
            <v-card
              class="mx-auto"
              height="200"
              image="\freelancer2.jpg"
              max-width="200"
              theme="dark"
              title="photographer"
            ></v-card>
          </v-col>
          <v-col lg="3">
            <v-card
              class="mx-auto"
              height="200"
              image="\sliderFreelance.jpg"
              max-width="200"
              theme="dark"
              title="SEO expert"
            ></v-card>
          </v-col>
          <v-col lg="3">
            <v-card
              class="mx-auto"
              height="200"
              image="\freelancer3.jpg"
              max-width="200"
              theme="dark"
              title="sales"
            ></v-card>
          </v-col>
        </slot>
        </v-row> 
        <!-- end second Sectino -->


        <!-- start third Section -->

        <v-row class="section3 mt-16">
            <v-col lg="12" class="text-center">
            <v-subheader class="text-h4"> Checkout The Best Portfolios Here </v-subheader>
            </v-col> 
            <v-col lg="4">
              <v-card
              class="mx-auto"
              max-width="200"
            >
              <v-img
                height="250px"
                src="\port1.jpg"
                cover
              ></v-img>
          
              <v-card-title>
             carlen rechal
              </v-card-title>
          
              <v-card-subtitle>
              Graphic Designer
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
            <v-col lg="4">
              <v-card
              class="mx-auto"
              max-width="200"
            >
              <v-img
                height="260px"
                src="\port3.jpg"
                cover
              ></v-img>
          
              <v-card-title>
             Jon maldonado
              </v-card-title>
          
              <v-card-subtitle>
              Graphic Designer
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
              <v-col lg="4">
                <v-card
              class="mx-auto"
              max-width="190"
            >
              <v-img
                height="260px"
                src="\port2.jpg"
                cover
              ></v-img>
          
              <v-card-title>
               David baker
              </v-card-title>
          
              <v-card-subtitle>
               ui/ux Design
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
          
            </v-row>
            </v-container>
        <!-- end third Section -->

</template>
<script setup>
 import {ref} from 'vue'

 const show = ref(false)
</script>
<style scoped>
.leftOfSection1{
   position: relative;
   top:100px
}
.text1{
  text-align: center;
  font-size: 50px;
  font-weight: bold;
  width:380px;
  color:rgb(151, 206, 186);
 }

 
.text-h4{

  text-align: center;
  font-weight: bold;
  color:  rgb(151, 206, 186);
 
}
.section2{
    margin-top: 130px;
}

    .firstsection{
      position: relative;
      top:100px
    }
   
</style>
