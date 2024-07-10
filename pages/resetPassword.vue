<template>
    <v-container>

        <v-card class="forgetPasswordCard">
            <img class="resetPasswordPhoto mt-3" src="/reset.jpeg" />
            <h1 class="mt-6 text-center ">Reset Password</h1>
            <p class="text-subtitle-2 text-center mt-4">Enter New Password!</p>
            <form>
                <v-text-field 
                label="New Password"
                type="password"
                class="mt-8 ml-5 mr-5"
                />
                <div class="d-flex justify-center">
                <v-btn color="secondary" to="/" class="mb-8 w-50">Submit</v-btn>

                </div>
            </form>
        </v-card>
    </v-container>
</template>
<script setup>
definePageMeta({
    layout:false
})
</script>
<style scoped>
.forgetPasswordCard{
    position: relative; 
    top:140px; 
    left:30%;
    width:500px
}
.resetPasswordPhoto{
    width: 120px;
    height: 120px;
    position: relative;
    left:170px
}
</style>