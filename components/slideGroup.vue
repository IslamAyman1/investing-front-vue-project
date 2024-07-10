<template>
    <v-sheet
    class="mx-auto"
    elevation="8"
   >
    <v-slide-group
      v-model="model"
      class="pa-3"
      selected-class="bg-primary"
      show-arrows
    >
      <v-slide-group-item
        v-for="item , index in slideItem"
        :key="index">
         
         <v-card class="mx-auto my-12 ml-15"   elevation="0">
             <NuxtLink>
              <v-img
             contain     
             height="250"
             width="280"
             :src="item.Img"
           />
          </NuxtLink>
          <h4 class="text-center">{{ item.name }}</h4>
         </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
  
</template>
<script setup>
import {ref} from "vue"
defineProps({
  slideItem : {
    type : Array
  }
})
</script>