let btn=document.querySelector("button")
let growth=document.querySelector("#growth")
let h1=document.querySelector("h1")
let card=document.querySelector("#card")
let grow=0
btn.addEventListener("click",()=>{
  let growInterval= setInterval(function(){
    let randomGrowth = Math.floor(Math.random() * 5) + 1;
    grow += randomGrowth;
    if (grow >= 100) {
        grow = 100;
        clearInterval(growInterval); 
        btn.innerHTML = 'Downloaded';
        btn.style.opacity = 0.4;
        btn.style.pointerEvents = 'none';
        btn.style.backgroundColor='green';
      }
     h1.innerHTML=grow+"%"
     growth.style.width = grow + "%";
   },300)

})