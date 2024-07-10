<template>
<div v-if="mainPage">
  <navBar />  
  <!-- start carousel -->
  <v-carousel hide-delimiters show-arrows="hover" height="717">
    <v-carousel-item
      src="/sliderInvest.jpg"
      cover
    />
    <v-carousel-item
      src="/sliderJob.jpg"
      cover
    />
  
    <v-carousel-item
      src="/sliderFreelance.jpg"
      cover
    />
  </v-carousel>
  <!-- end carousel -->
  
  <!-- start about us -->
  <h1 class="mt-10 heading">About Us</h1>
   <v-container>
    <v-row class="mt-12">
    <v-col class="paragraphTeamWork ml-6 mt-15 mr-5">Teamwork is the symphony of a group working in harmony. It's where individual strengths complement each other, 
      like puzzle pieces clicking into place to form a complete picture.
       Through open communication and mutual respect, a team can overcome challenges and achieve goals far greater than what any one person could manage alone. 
       The journey is enriched by the diverse perspectives and shared experiences, making success not just a destination,
        but a rewarding adventure.
        Effective teamwork isn't always sunshine and roses.
         There will be disagreements and moments of frustration.
       
       </v-col>
        <v-img  src="/about.jpeg"/>
   </v-row>
   </v-container>
  <!-- end about us -->
  
  
  <!-- start investing -->
   <h1 class="mt-10 mb-4 heading">Investing</h1>
      <v-container>
      <v-row>
     <v-col md="4" >
      <v-card
        class=" my-12"
        max-width="374"
      >
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="/investingsimple-homepage.jpg"
      cover
    ></v-img>

    <v-card-item>
      <v-card-title>Caffe</v-card-title>

      <v-card-subtitle>
        <span>Investor Rquirement : 2</span><br>
        <span>project Balance : 6000</span>

     
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :model-value="4.5"
          color="amber"
          density="compact"
          size="small"
          half-increments
          readonly
        ></v-rating>
      </v-row>

      <div class="my-4 text-subtitle-1">Caffe Description</div>
    </v-card-text>
    <v-divider class="mx-4 mb-1"></v-divider>
    <v-card-actions>
      <v-btn
        color="deep-purple-lighten-2"
        text="Reserve"
        block
        border
        @click="reserve"
      ></v-btn>
    </v-card-actions>
  </v-card>
     </v-col>
     <v-col md="4" >
      <v-card
        class=" my-12"
        max-width="374"
      >
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="/busniss.jpg"
      cover
    ></v-img>

    <v-card-item>
      <v-card-title>Villa</v-card-title>

      <v-card-subtitle>
        <span>Investor Rquirement : 6</span><br>
        <span>project Balance : 140000</span>

     
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :model-value="4.5"
          color="amber"
          density="compact"
          size="small"
          half-increments
          readonly
        ></v-rating>

       
      </v-row>

      <div class="my-4 text-subtitle-1">Villa Description</div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>
    <v-card-actions>
      <v-btn
        color="deep-purple-lighten-2"
        text="Reserve"
        block
        border
        @click="reserve"
      ></v-btn>
    </v-card-actions>
  </v-card>
     </v-col>
     <v-col md="4" >
      <v-card
        class=" my-12"
        max-width="374"
      >
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="/digital-marketing.jpg"
      cover
    ></v-img>

    <v-card-item>
      <v-card-title>Restaurant</v-card-title>

      <v-card-subtitle>
        <span>Investor Rquirement : 3</span><br>
        <span>project Balance : 120000</span>
      </v-card-subtitle>
    </v-card-item>
    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :model-value="4.5"
          color="amber"
          density="compact"
          size="small"
          half-increments
          readonly
        ></v-rating>   
      </v-row>
      <div class="my-4 text-subtitle-1">Restaurant Description</div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>
    <v-card-actions>
      <v-btn
        color="deep-purple-lighten-2"
        text="Reserve"
        block
        border
        @click="reserve"
      ></v-btn>
    </v-card-actions>
  </v-card>
     </v-col>
    </v-row>  
    </v-container>
  
  <!-- end Investing -->
  
  <!-- start Freelance -->
  <h1 v-if="freelanceTitle" class="mt-6 heading">Freelance</h1>
  <!-- <div id="freelanceSection">
    <v-container>
      <v-row>
     <v-col md="4" v-for="cards in 6">
      <v-card
      class="mt-9 mx-auto"
      max-width="600"
    >
      <v-img
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        cover
      ></v-img>
  
      <v-card-title>
        Top western road trips
      </v-card-title>
  
      <v-card-subtitle>
        1,000 miles of wonder
      </v-card-subtitle>
  
      <v-card-actions>
        <v-btn
          color="orange-lighten-2"
          text="Explore"
        ></v-btn>
  
        <v-spacer></v-spacer>
  
        <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
        ></v-btn>
      </v-card-actions>
  
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
  
          <v-card-text>
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
     </v-col>
    </v-row>  
    </v-container>
  </div> -->
  <v-container class="cardsSection" v-if="freelanceTitle">
    
    <v-row justify="space-around"  >
      <div class="card " v-for="i in icons">
  <div class="content ">
    <div class="back">
      <div class="back-content">
        <v-icon :icon="i.icon" style="font-size: 50px;">
        <g stroke-width="0" id="SVGRepo_bgCarrier"></g>

        <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>

        <g id="SVGRepo_iconCarrier">

        <path d="M20.84375 0.03125C20.191406 0.0703125 19.652344 0.425781 19.21875 1.53125C18.988281 2.117188 18.5 3.558594 18.03125 4.9375C17.792969 5.636719 17.570313 6.273438 17.40625 6.75C17.390625 6.796875 17.414063 6.855469 17.40625 6.90625C17.398438 6.925781 17.351563 6.949219 17.34375 6.96875L17.25 7.25C18.566406 7.65625 19.539063 8.058594 19.625 8.09375C22.597656 9.21875 28.351563 11.847656 33.28125 16.78125C38.5 22 41.183594 28.265625 42.09375 30.71875C42.113281 30.761719 42.375 31.535156 42.75 32.84375C42.757813 32.839844 42.777344 32.847656 42.78125 32.84375C43.34375 32.664063 44.953125 32.09375 46.3125 31.625C47.109375 31.351563 47.808594 31.117188 48.15625 31C49.003906 30.714844 49.542969 30.292969 49.8125 29.6875C50.074219 29.109375 50.066406 28.429688 49.75 27.6875C49.605469 27.347656 49.441406 26.917969 49.25 26.4375C47.878906 23.007813 45.007813 15.882813 39.59375 10.46875C33.613281 4.484375 25.792969 1.210938 22.125 0.21875C21.648438 0.0898438 21.234375 0.0078125 20.84375 0.03125 Z M 16.46875 9.09375L0.0625 48.625C-0.09375 48.996094 -0.00390625 49.433594 0.28125 49.71875C0.472656 49.910156 0.738281 50 1 50C1.128906 50 1.253906 49.988281 1.375 49.9375L40.90625 33.59375C40.523438 32.242188 40.222656 31.449219 40.21875 31.4375C39.351563 29.089844 36.816406 23.128906 31.875 18.1875C27.035156 13.34375 21.167969 10.804688 18.875 9.9375C18.84375 9.925781 17.8125 9.5 16.46875 9.09375 Z M 17 16C19.761719 16 22 18.238281 22 21C22 23.761719 19.761719 26 17 26C15.140625 26 13.550781 24.972656 12.6875 23.46875L15.6875 16.1875C16.101563 16.074219 16.550781 16 17 16 Z M 31 22C32.65625 22 34 23.34375 34 25C34 25.917969 33.585938 26.730469 32.9375 27.28125L32.90625 27.28125C33.570313 27.996094 34 28.949219 34 30C34 32.210938 32.210938 34 30 34C27.789063 34 26 32.210938 26 30C26 28.359375 26.996094 26.960938 28.40625 26.34375L28.3125 26.3125C28.117188 25.917969 28 25.472656 28 25C28 23.34375 29.34375 22 31 22 Z M 21 32C23.210938 32 25 33.789063 25 36C25 36.855469 24.710938 37.660156 24.25 38.3125L20.3125 39.9375C18.429688 39.609375 17 37.976563 17 36C17 33.789063 18.789063 32 21 32 Z M 9 34C10.65625 34 12 35.34375 12 37C12 38.65625 10.65625 40 9 40C7.902344 40 6.960938 39.414063 6.4375 38.53125L8.25 34.09375C8.488281 34.03125 8.742188 34 9 34Z"></path>

        </g>
      </v-icon>

        <strong>Hover Me</strong>
      </div>
    </div>
    <div class="front">
      
      <div class="img">
        <div class="circle">
        </div>
        <div class="circle" id="right">
        </div>
        <div class="circle" id="bottom">
        </div>
      </div>

      <div class="front-content">
        <small class="badge">{{ i.title }}</small>
        <div class="description">
          <div class="title">
            <p class="title">
              <strong>{{ i.des }}</strong>
            </p>
            <svg fill-rule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
              <g style="mix-blend-mode: normal" text-anchor="none" font-size="none" font-weight="none" font-family="none" stroke-dashoffset="0" stroke-dasharray="" 
              stroke-miterlimit="10" stroke-linejoin="miter" stroke-linecap="butt" stroke-width="1" stroke="none" fill-rule="nonzero" fill="#20c997">
                <g transform="scale(8,8)"><path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path></g></g></svg>
          </div>
          <p class="card-footer">
            30 Mins &nbsp; | &nbsp; 1 Serving
          </p>
        </div>
      </div>
    </div>
  </div>
</div>  
    </v-row>
  </v-container>
  <!-- end Freelance -->
  
  <!-- start Job -->

  <v-container class="mt-12 jobsection">
     <h1 class="mt-6 heading">Jobs</h1>
     <v-card elevation="0">
       <v-row>
        <v-col>
           <h1 class="ma-8" style="font-size: 40px;">This is how<br>
            <span style="color:green">good companies<br>
             find good company.</span>
           </h1>
           <h4 class="ma-8">Access the top 1% of talent on Upwork, and a full suite <br> of hybrid workforce management tools.This is how innovation <br> works now.</h4>
           <p class="ml-8"><v-icon class="mr-2" color="green">mdi-wrench</v-icon>Access expert talent to fill your skill gaps</p>
           <p class="ml-8 mt-4"><v-icon class="mr-2" color="green">mdi-check</v-icon>Control your workflow: hire, classify and pay your talent</p>
           <p class="ml-8 mt-4"><v-icon class="mr-2" color="green">mdi-tag</v-icon>Partner with Upwork for end-to-end support</p>
          </v-col>
       <v-img
        height="500px"
        src="/fun-3d-cartoon-illustration-indian-businessman.jpg"
        
      ></v-img>
       </v-row>
     </v-card>
   </v-container>
    <v-container><br><br><br>
     <h1 class="ml-8">Jobs categories</h1>
     <v-row align="center" justify="center" dense class="mt-8 ml-8">
    <v-col cols="12" md="6">
      <v-card
        append-icon="mdi-check"
        class="mx-auto"
        prepend-icon="mdi-web"
        color="success"
        title="Web Development"
      >
        <v-card-text>Web Development Includes Many Technology like php laravel and .Net </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" md="6">
      <v-card
        class="mx-auto"
        title="Mobile Application"
        color="primary"
      >
        <template v-slot:prepend>
          <v-icon  color="white" icon="mdi-application"></v-icon>
        </template>
        <template v-slot:append>
          <v-icon  icon="mdi-check"></v-icon>
        </template>
        <v-card-text>Flutter Technology , React Native and IOS Technology </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" md="6">
      <v-card
        class="mx-auto"
        prepend-icon="mdi-engine"
        title="AI"
        color="primary"
      >
      <template v-slot:append>
          <v-icon  icon="mdi-check"></v-icon>
        </template>
        <v-card-text>AI with Variety branches such as Deep Learning and Machine Learning</v-card-text>
      </v-card>
      
    </v-col>

    <v-col cols="12" md="6">
      <v-card
        class="mx-auto"
        title="DevOps"
        color="success"
      >
        <template v-slot:prepend>
            <v-icon icon="mdi-laptop"></v-icon>
        </template>
        <template v-slot:append>
          <v-icon  icon="mdi-check"></v-icon>
        </template>
        <v-card-text>Important DevOps Jobs Requirement In Few Days</v-card-text>
      </v-card>
    </v-col>
  </v-row>
    </v-container>
<!-- end Job -->

    <!-- start contact -->
    <h1 class="mt-15 heading">Contact</h1>
 <v-container>
  <v-row class="mt-10 ">
<v-col class="ml-8 mt-15 mr-4">
  <form class="">
  <v-row>
    <v-text-field
      density="compact"
      placeholder="First Name"
      prepend-inner-icon="mdi-account-outline"
      variant="outlined"
      color="blue"
    />
    <v-text-field
      density="compact"
      color="blue"
      placeholder="Last Name"
      class="ml-3"
      prepend-inner-icon="mdi-account-outline"
      variant="outlined"
    />
  </v-row>
<v-row>
<v-text-field
      density="compact"
      placeholder="Email address"
      prepend-inner-icon="mdi-email-outline"
      color="blue"
      variant="outlined"
    />
</v-row>
<v-row>
<v-textarea
    variant="outlined"
    placeholder="What Can We Help You With?"
      color="blue"
    density="compact"
  />   
</v-row>
  <v-btn class="me-4 mt-9" type="submit" > submit </v-btn>
</form>
</v-col>
<img height="450" width="550" src="/contact.jpeg"/>
</v-row>
 </v-container>
</div>
    <!-- end contact -->
    <div class="loader" v-if="loading"></div>

  <!-- <footers/> -->

 </template>

<script setup>
import {ref , onMounted,onBeforeMount} from "vue"
import axios from "axios";
var icons = ref([{
  'icon' : 'mdi-laptop',
  'title' : 'front End',
  'des' : 'html css js'
},
{
  'icon' : 'mdi-star',
  'title' : 'Back End',
  'des' : 'php laravel'
},
{
  'icon' : 'mdi-handshake',
  'title' : 'Mobile',
  'des' : 'Java Android'

}])
var http = ref('http://127.0.0.1:8000/')
const model = ref(false)
const data = ref([
  {
    Img : 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
    name : 'investing',
    Description : "Investing Card"
  },
  {
    Img : 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
    name : 'investing',
    Description : "Investing Card"
  },{
    Img : 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
    name : 'investing',
    Description : "Investing Card"
  },{
    Img : 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
    name : 'investing',
    Description : "Investing Card"
  },  
])
definePageMeta({
    middleware:'auth'
})
const slides = ref(['/9289149.jpg' , 'second' , 'third'])
const show= ref(false)
var showData = ref([])
var freelanceTitle = ref(true)
var loading = ref(true)
var mainPage = ref(true)
function getImage(){
  axios.get('http://127.0.0.1:8000/api/user/getImage')
  .then(res=>{
    console.log(res.data);
      showData.value = res.data
  })
  if(process.client){
     if(localStorage.getItem('clientType') == 'Company'){
      freelanceTitle.value = false
     }
  }
}
function loadings(){
  loading.value = true
  mainPage.value = false

setTimeout(() => {
  loading.value = false
   
}, 3000);
setTimeout(() => {
  mainPage.value = true
}, 3500);
}
// const slides = ref([
//           'First',
//           'Second',
//           'Third',
//           'Fourth',
//           'Fifth',
//         ])
onBeforeMount(loadings)
onMounted(getImage)
</script>
<style scoped>
.cardsSection{
  position: relative;
  bottom:155px;
}
.paragraphTeamWork{
  line-height: 40px;
  margin-top: 10px;
}
.jobsection{
  position: relative;
  top:100px
}
.sectionAbout{
  background-color: rgb(220, 244, 253);
}
.heading{
  background-color: rgb(16, 155, 174);
  text-align: center;
  width:280px;
  position: relative;
  left:41%;
  padding:6px;
  color:white;
  clip-path: polygon(100% 0,93% 50%,100% 99%,0% 100%,7% 50%,0% 0%);
}
.loader {
  position: relative;
  width: 120px;
  top:250px;
  height: 90px;
  margin: 0 auto;
}

.loader:before {
  content: "";
  position: absolute;
  bottom: 30px;
  left: 50px;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: #2a9d8f;
  animation: loading-bounce 0.5s ease-in-out infinite alternate;
}

.loader:after {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  height: 7px;
  width: 45px;
  border-radius: 4px;
  box-shadow: 0 5px 0 #f2f2f2, -35px 50px 0 #f2f2f2, -70px 95px 0 #f2f2f2;
  animation: loading-step 1s ease-in-out infinite;
}

@keyframes loading-bounce {
  0% {
    transform: scale(1, 0.7);
  }

  40% {
    transform: scale(0.8, 1.2);
  }

  60% {
    transform: scale(1, 1);
  }

  100% {
    bottom: 140px;
  }
}

@keyframes loading-step {
  0% {
    box-shadow: 0 10px 0 rgba(0, 0, 0, 0),
            0 10px 0 #f2f2f2,
            -35px 50px 0 #0b0b0b,
            -70px 90px 0 #f2f2f2;
  }

  100% {
    box-shadow: 0 10px 0 #090909,
            -35px 50px 0 #f2f2f2,
            -70px 90px 0 #f2f2f2,
            -70px 90px 0 rgba(0, 0, 0, 0);
  }
}

/* start card in freelance section */
.card {
  overflow: visible;
  width: 190px;
  height: 254px;
  position: relative;
  top:250px
}

.content {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 300ms;
  box-shadow: 0px 0px 10px 1px #000000ee;
  border-radius: 5px;
}

.front, .back {
  background-color: #151515;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 5px;
  overflow: hidden;
}

.back {
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.back::before {
  position: absolute;
  content: '';
  display: block;
  width: 160px;
  height: 160%;
  background: linear-gradient(90deg, transparent, white, white, white, white, transparent);
  animation: rotation_481 5000ms infinite linear;
}

.back-content {
  position: absolute;
  width: 99%;
  height: 99%;
  background-color: transparent;
  border-radius: 5px;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

.card:hover .content {
  transform: rotateY(180deg);
}

@keyframes rotation_481 {
  0% {
    transform: rotateZ(0deg);
  }

  0% {
    transform: rotateZ(360deg);
  }
}

.front {
  transform: rotateY(180deg);
  color: white;
}

.front .front-content {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.front-content .badge {
  background-color: #00000055;
  padding: 2px 10px;
  border-radius: 10px;
  backdrop-filter: blur(2px);
  width: fit-content;
}

.description {
  box-shadow: 0px 0px 10px 5px #00000088;
  width: 100%;
  padding: 10px;
  background-color: #00000099;
  backdrop-filter: blur(5px);
  border-radius: 5px;
}

.title {
  font-size: 11px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
}

.title p {
  width: 50%;
}

.card-footer {
  color: #ffffff88;
  margin-top: 5px;
  font-size: 8px;
}

.front .img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.circle {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #ffbb66;
  position: relative;
  filter: blur(15px);
  animation: floating 2600ms infinite linear;
}

#bottom {
  background-color: #ff8866;
  left: 50px;
  top: 0px;
  width: 150px;
  height: 150px;
  animation-delay: -800ms;
}

#right {
  background-color: #ff2233;
  left: 160px;
  top: -80px;
  width: 30px;
  height: 30px;
  animation-delay: -1800ms;
}

@keyframes floating {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(0px);
  }
}
</style>
