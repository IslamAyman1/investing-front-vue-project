<template>
   <navBar/>
   <!-- start first section -->
  <v-container class="pt-15 firstsection">
<v-row>
<v-col lg="6" class="leftOfSection1">
   <h1 class="text1">Are You Have Project Idea?</h1>
   <v-btn to="searchInvestProject" @click="search" color="secondary" class="mt-5 ml-8">Search Projects<v-icon class="ml-5">mdi-magnify</v-icon>
   </v-btn>
   <br>
      <v-btn to="addInvestProject" @click="search" color="secondary" class="mt-5 ml-8">Add Project<v-icon class="ml-5">mdi-post</v-icon>
   </v-btn>
   
</v-col>
<v-col lg="6">
<img height="80%" width="110%" src="/investingsimple-homepage.jpg" alt="">
</v-col>
</v-row>
   <!-- end first section -->
<v-row>
<v-col lg="12" class="text-center">
<v-subheader class="text-h4"> Projects </v-subheader>
</v-col>
<v-col lg="3">
 <v-card
   class="mx-auto"
   height="200"
   image="/logodesigner.jpg"
   max-width="200"
   theme="dark"
   title="logo design"
 ></v-card>
</v-col>
<v-col lg="3">
 <v-card
   class="mx-auto"
   height="200"
   image="https://www.ninjatropic.com/wp-content/uploads/2022/08/Rectangle-275-1.png"
   max-width="200"
   theme="dark"
   title="Cartoon Animation"
 ></v-card>
</v-col>
<v-col lg="3">
 <v-card
   class="mx-auto"
   height="200"
   image="/editor.jpg"
   max-width="200"
   theme="dark"
   title="Editor"
 ></v-card>
</v-col>
 
 <v-col lg="3">
   <v-card
     class="mx-auto"
     height="200"
     image="/freelancewriter.jpg"
     max-width="200"
     theme="dark"
     title="Freelance Write"
   ></v-card>
 </v-col>
 <v-col lg="3">
   <v-card
     class="mx-auto"
     height="200"
     image="/development.jpg"
     max-width="200"
     theme="dark"
     title="Software Developer"
   ></v-card>
 </v-col>
 <v-col lg="3">
   <v-card
     class="mx-auto"
     height="200"
     image="/digital-marketing.jpg"
     max-width="200"
     theme="dark"
     title="Digital marketing"
   ></v-card>
 </v-col>
 <v-col lg="3">
   <v-card
     class="mx-auto"
     height="200"
     image="/ecommerce.jpg"
     max-width="200"
     theme="dark"
     title="E-commerce"
   ></v-card>
 </v-col>
 <v-col lg="3">
   <v-card
     class="mx-auto"
     height="200"
     image="/socialgraphics.jpg"
     max-width="200"
     theme="dark"
     title="Social graphics"
   ></v-card>
 </v-col>
</v-row>
<!-- end second section -->

<!-- start third section -->
<v-row class="mt-12">
 <v-col lg="12" class="text-center">
 <v-subheader class="text-h4"> Checkout The Best Investor Here </v-subheader>
 </v-col>
 <v-col >
   <v-card
   class="mx-auto"
   max-width="400"
 >
   <v-img
     height="200px"
     src="\freelancer1.jpg"
     cover
   ></v-img>
   <v-card-title>
  loben andrea
   </v-card-title>
   <v-card-subtitle>
   Graphic Designer
   </v-card-subtitle> 
   <v-card-actions>
     <v-btn
       color="black-lighten-2"
       variant="text">
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
  <v-col >
   <v-card
   class="mx-auto"
   max-width="400"
 >
   <v-img
     height="200px"
     src="\freelancer3.jpg"
     cover
   ></v-img>

   <v-card-title>
   Tommy fardy
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
     <v-btn
       :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
       @click="show = !show"
     ></v-btn>
   </v-card-actions>
 </v-card>
  </v-col>
   <v-col >
     <v-card
   class="mx-auto"
   max-width="400"
 >
   <v-img
     height="200px"
     src="/freelancer2.jpg"
     cover
   ></v-img>
   <v-card-title>
    Bunny smith
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
<!-- end third section -->

 
   </v-container>
</template>

<script setup>
definePageMeta({
    middleware:'auth'
})
</script>
<style scoped>
.leftOfSection1{
   position: relative;
   top:50px
}
h1.text1{
 text-align: center;
 font-size: 50px;
 font-weight: bold;
margin-right: 200px;
color:  rgb(151, 206, 186);
margin-top: 25px;
}
 
 
.text-h4{

 text-align: center;
 font-weight: bold;
 color:  rgb(151, 206, 186);

}

.firstsection{
  position: relative;
  top:100px
}
</style>

