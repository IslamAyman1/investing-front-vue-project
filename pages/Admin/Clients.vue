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


       
       <v-col cols="6" md="4" sm="12">
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


    <v-row>
      <v-col>
        <v-card
    class="mx-auto" style="float: right;"
    max-width="400"
  ><v-toolbar color="blue">
      <v-btn icon="mdi-account" variant="text"></v-btn>
      <v-toolbar-title>Active project</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon="mdi-clock" variant="text"></v-btn>
    </v-toolbar>

    <v-list
      :items="items"
      lines="three"
      item-props
    > <template v-slot:subtitle="{ subtitle }">
        <div v-html="subtitle"></div>
      </template>
    </v-list>
  </v-card>
  <v-container class="pt-15">
        <v-row>
        <v-col lg="6">
            <v-card class="mx-auto" max-width="300" border flat>
                <v-list-item class="px-3" height="150">
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

        <v-col lg="6">
            <v-card class="mx-auto" max-width="300" border flat>
                <v-list-item class="px-3" height="150">
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
        </v-row>
    </v-container>
       </v-col>
    </v-row>
   


  

   





</v-container>

















</template>



















<script >
definePageMeta({
    layout : 'navigationdrawer'
})

export default {
    data: () => ({
      items: [
        { type: 'subheader', title: 'Today' },
        {
          prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { type: 'divider', inset: true },
        {
          prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ',
          subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        { type: 'divider', inset: true },
        {
          prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        { type: 'divider', inset: true },
        {
          prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        },
      
      ],
    }),
  }
</script>