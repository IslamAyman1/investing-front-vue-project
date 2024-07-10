<template>
    <div v-for="info in cvInfo" id="cv">
        <h1 style="background-color: blue;"  >
            {{ info.name }}
        </h1>
        <h1>
            {{ info.skills }}
        </h1><h1>
            {{ info.military_Service }}
        </h1>
    </div>
    <button @click="generateCV">Generate CV</button>
</template>
 <script setup>
import {ref,onMounted} from 'vue'
import axios from 'axios';

var cvInfo = ref([])
function getCvInfo(){
   if(process.client){
     const authToken = ref({
        authToken : localStorage.getItem('userToken')
     })
    axios.post('http://127.0.0.1:8000/api/user/getCvInfo',authToken.value)
    .then(res=>{
         cvInfo.value.push(res.data.msg)
    })
   }
}
function generateCV(){
    // window.html2canvas = html2canvas
    // const doc = new jsPDF('p','pt','a4');
    // doc.html(document.getElementById('cv'),function(){
    //   doc.save('cv.pdf')
    // })
    // doc.save("CV.pdf");
    html2pdf(document.getElementById('cv'),{
        margin : 1,
        filename: 'pdf.pdf'
    })

}
onMounted(getCvInfo)
</script>
<style scoped>

</style>