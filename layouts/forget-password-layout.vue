<template>
    <v-container>

        <v-card class="forgetPasswordCard">
            <img class="warningPhoto" src="/forget.jpeg" />
            <h1 class=" text-center ">Forget Password!</h1>
            <p class="text-subtitle-2 text-center mt-4">Enter Your Email Or Phone Number and We will<br> send email to reset password</p>
            <form>
                 <slot/>
               
            </form>
        </v-card>
    </v-container>
</template>
<script setup>

</script>
<style scoped>
.forgetPasswordCard{
    position: relative;
    top:120px; 
    left:30%;
    width:500px
}
.warningPhoto{
    width: 200px;
    height: 180px;
    position: relative;
    left:132px
}
</style>