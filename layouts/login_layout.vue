<template >
     <v-container id="loading" >
         <v-card elevation="10" class="loginCard">
        <v-row>
            <v-col md="6">
             <slot/>
        </v-col>

             <img class="photoLogin" src="/loginpage.jpg" alt="photo"/>
        </v-row>
 </v-card>
     </v-container>
</template>

<style scoped>

.rightSide{
    background-color: rgb(44, 177, 173);
}
.loginCard{
    position: relative;
    top:100px
}
.newhereWord{
    color:white;
}
.signUpBtn{
    border-radius: 5px;
}
.photoLogin{
    width:590px
}
</style>