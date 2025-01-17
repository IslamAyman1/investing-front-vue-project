// https://nuxt.com/docs/api/configuration/nuxt-config
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
    css: ['vuetify/lib/styles/main.css','@mdi/font/css/materialdesignicons.css'
  ],
 
    build: {
      transpile: ["vuetify"],
    },
   
})

