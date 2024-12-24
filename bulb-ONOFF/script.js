let btn=document.querySelector(".btn");
let bulb=document.querySelector(".bulb");

let val="off";
btn.addEventListener("click",()=>{
    if(val==="off"){
        btn.innerHTML="OFF";
   bulb.style.backgroundColor='yellow';
        val="on";
    }else{
        btn.innerHTML="ON";
        bulb.style.backgroundColor='white';
        val="off";
    }
})