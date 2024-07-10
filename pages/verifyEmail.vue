<template>
  <v-text-field label="Enter Code Here" class="ml-2 mr-2" type="number"/>
  <div class="d-flex justify-center">
    <v-btn color="secondary" to="resetPassword" class="mb-8 w-50">Submit</v-btn>
  </div>
</template>
<script setup>
definePageMeta({
    layout:"forget-password-layout"
})
</script>