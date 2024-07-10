<template>
  <v-layout>
    <v-footer class="bg-blue-lighten-1 mt-10">
   <v-col>
    <v-row justify="space-evenly" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        class="mx-2"
        color="white"
        rounded="xl"
        variant="text"
      >
        {{ link }}
      </v-btn>
      <v-col class="text-center mt-4 mx-2" justify="center" cols="12">
       
      </v-col>
    </v-row>
    <v-row justify="space-evenly" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        class="mx-2"
        color="white"
        rounded="xl"
        variant="text"
      >
        {{ link }}
      </v-btn>
      <v-col class="text-center mt-4 mx-2" justify="center" cols="12">
       
      </v-col>
    </v-row>
   </v-col>
  </v-footer>
  </v-layout>
  </template>

<script setup>
   import {ref} from 'vue';

    var links = ref([
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ])
     
  
</script>