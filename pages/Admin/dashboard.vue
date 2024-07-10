
<template>




  <v-container>

    <v-row>
      <v-col cols="12" md="4" sm="12">
        <v-card class="rounded-x1" height="100" color="blue" elevation="5">
          <v-row>
            <v-col cols="12" md="2" sm="12" offset="1" class="mt-5">
       <v-avatar size="60">
         <img style="height: 8vh;" src="/bankahly.jpg" >
       </v-avatar>
      </v-col>
            <v-col cols="12" sm="12" md="6" offset="1" class="mt-5"> 
              <h2  style="color: white;" class="font-weight-bold" >Total investors 5,000</h2>
             </v-col>
           </v-row>
         </v-card>
       </v-col>



       <v-col cols="12" md="4" sm="12" class="icon2">
        <v-card class="rounded-x1" height="100" color="green" elevation="5">
          <v-row>
            <v-col cols="12" md="2" sm="12" offset="1" class="mt-5">
       <v-avatar size="60">
         <img style="height: 10vh;" src="/bankahly.jpg" >
       </v-avatar>
      </v-col>
            <v-col cols="12" sm="12" md="7" offset="1" class="mt-5"> 
              <h2  style="color: white;" class="font-weight-bold" >Total freelancers 2,000</h2>
             </v-col>
           </v-row>
         </v-card>
       </v-col>


       
       <v-col cols="12" md="4" sm="12">
        <v-card class="rounded-x1" height="100" color="orange" elevation="5">
          <v-row>
            <v-col cols="12" md="2" sm="12" offset="1" class="mt-5">
       <v-avatar size="60">
         <img style="height: 7vh;" src="/bankahly.jpg" >
       </v-avatar>
      </v-col>
            <v-col cols="12" sm="12" md="7" offset="1" class="mt-5"> 
              <h2  style="color: white;" class="font-weight-bold" >Total projects 7,000</h2>
             </v-col>
           </v-row>
         </v-card>
       </v-col>
     </v-row>
  </v-container>
    <v-container class="pt-15">
        <v-row>
        <v-col lg="3">
            <v-card class="mx-auto" max-width="500" border flat>
                <v-list-item class="px-6" height="88">
                  <template v-slot:prepend>
                    <v-avatar color="surface-light" size="32">🎯</v-avatar>
                  </template>
            
                  <template v-slot:title> Investing ratio </template>
            
                  <template v-slot:append>
                    <v-btn
                      class="text-none"
                      color="primary"
                     
                      variant="text"
                      slim
                    ></v-btn>
                  </template>
                </v-list-item>
            
                <v-divider></v-divider>
            
                <v-card-text class="text-medium-emphasis pa-6">
                  <div class="text-h6 mb-6">Our goal is to reach 100%</div>
            
                  <div class="text-h4 font-weight-black mb-4">25%</div>
            
                  <v-progress-linear
                    bg-color="surface-variant"
                    class="mb-6"
                    color="primary"
                    height="10"
                    model-value="25"
                    rounded="pill"
                  ></v-progress-linear>
            
                  <div style="font-weight: bold;"> 25 to 100  invest — last 7 days</div>
                </v-card-text>
              </v-card>
        </v-col>

        <v-col lg="3">
            <v-card class="mx-auto" max-width="500" border flat>
                <v-list-item class="px-6" height="88">
                  <template v-slot:prepend>
                    <v-avatar color="surface-light" size="32">🎯</v-avatar>
                  </template>
            
                  <template v-slot:title style="color: green"> Investing ratio </template>
            
                  <template v-slot:append>
                    <v-btn
                      class="text-none"
                      color="green"
                      variant="text"
                      slim
                    ></v-btn>
                  </template>
                </v-list-item>
            
                <v-divider></v-divider>
            
                <v-card-text class="text-medium-emphasis pa-6">
                  <div class="text-h6 mb-6" style="color: green;">Our goal is to reach 100%</div>
            
                  <div class="text-h4 font-weight-green mb-4">50%</div>
            
                  <v-progress-linear
                    bg-color="surface-variant"
                    class="mb-6"
                    color="green"
                    height="10"
                    model-value="50"
                    rounded="pill"
                  ></v-progress-linear>
            
                  <div style="font-weight: bold;"> 50 to 100  freelance — last 7 days</div>
                </v-card-text>
              </v-card>
        </v-col>







        
        <v-col lg="6">
            <template>
                <v-container>
                  <v-card>
                    <v-card-title class="text-overline">
                      Progress
                      <div class="text-blue-darken-3 text-h3 font-weight-bold">90%</div>
                      <div class="text-h6 text-medium-emphasis font-weight-regular">
                        $2,938.00 remaining
                      </div>
                    </v-card-title>
                    <br>
                    <v-card-text>
                      <div
                        :style="`right: calc(${review} - 32px)`"
                        class="position-absolute mt-n8 text-caption text-blue-darken-3"
                      >
                        Eligibility review
                      </div>
                      <v-progress-linear
                        color="blue-darken-3"
                        height="22"
                        model-value="90"
                        rounded="lg"
                      >
                        <v-badge
                          :style="'right: ${review}'"
                          class="position-absolute"
                          color="white"
                          dot
                          inline
                        ></v-badge>
                      </v-progress-linear>
              
                      <div class="d-flex justify-space-between py-3">
                        <span class="text-blue-darken-3 font-weight-medium">
                          $26,442.00 remitted
                        </span>
              
                        <span class="text-medium-emphasis"> $29,380.00 total </span>
                      </div>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-list-item
                      append-icon="mdi-chevron-right"
                      lines="two"
                      subtitle="Details and agreement"
                      link
                    ></v-list-item>
                  </v-card>
                </v-container>
              </template>
        </v-col>
        </v-row>
            </v-container>

<v-container>
    <v-row>

      <v-col cols="12" md="6" sm="12">
<div>
   <Bar
   class="chart"
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</div>
          </v-col>

     <v-col cols="12" md="6" sm="12">
<div>
   <Bar
   class="chart"
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</div>
          </v-col>
 
     </v-row>
  </v-container>

</template>


<script>
definePageMeta({
  layout:'navigationdrawer'
})
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { setBlockTracking } from 'vue'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

  name: 'BarChart'
      chartData: {
        labels: [ 'January', 'February', 'March' ]
        datasets: [ { data: [40, 20, 12] } ]
      }
      chartOptions: {
        responsive: true
      }




</script>



<style scoped>

.chart{
  background-color: rgba(55, 85, 221, 0.116);
  
}

</style>