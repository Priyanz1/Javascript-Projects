let btn=document.querySelector("button");
let istatus=document.querySelector("h5");
let img=document.querySelector("img");

let flag=0;

btn.addEventListener("click",()=>{

    if(flag==0){
        istatus.innerHTML="Friends";
        istatus.style.color='green';
        btn.innerHTML="Remove Friend";
        img.style.border='4px solid green'
        flag=1;
    }else{
        istatus.innerHTML="Stranger";
        istatus.style.color='red';
        btn.innerHTML="Add Friend";
        img.style.border='4px solid red'
        flag=0;
    }
})