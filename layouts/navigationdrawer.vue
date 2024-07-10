<template>
    <template>
    <v-card>
      <v-layout>
        <v-navigation-drawer
          theme="dark"
          permanent
        >
          <v-list nav>
            <NuxtLink to="dashboard" class="text-decoration-none">
            <v-list-item prepend-icon="mdi-home" title="Home" value="inbox"></v-list-item>
            </NuxtLink>
            <NuxtLink to="Projects" class="text-decoration-none">
            <v-list-item prepend-icon="mdi-briefcase" title="Projects" value="inbox"></v-list-item>
            </NuxtLink>            
            <NuxtLink to="Clients" class="text-decoration-none">
            <v-list-item prepend-icon="mdi-account" title="Clients" value="clockin"></v-list-item>
        </NuxtLink>   
        <NuxtLink to="Settings" class="text-decoration-none">
            <v-list-item prepend-icon="mdi-cog" title="Settings" value="clockin"></v-list-item>
        </NuxtLink>   
          </v-list>
            <v-btn
          :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          text="Toggle Theme"
          slim
          @click="onClick"
        ></v-btn>
        </v-navigation-drawer>
        <v-main min-height="100dvh" >


            <slot/>
        </v-main>
      </v-layout>
    </v-card>
  </template>
</template>

<script setup>
 import { ref } from 'vue'

const theme = ref('light')

function onClick () {
  
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>