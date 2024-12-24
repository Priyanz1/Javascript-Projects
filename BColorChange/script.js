let btns=document.querySelectorAll("button");
let body=document.querySelector("body");
btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        body.style.backgroundColor=btn.innerHTML;
    })
})