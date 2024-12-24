let btn=document.querySelector(".btn");
let main=document.querySelector(".main");
btn.addEventListener("click",()=>{
let red=Math.floor(Math.random()*255);
let green=Math.floor(Math.random()*255);
let blue=Math.floor(Math.random()*255);
main.style.backgroundColor= `rgb(${red}, ${green}, ${blue})`

})