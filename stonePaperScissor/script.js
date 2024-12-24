let btns=document.querySelectorAll(".box");
let body=document.querySelector("body");
let display=document.querySelector(".display");
let display2=document.querySelector(".display2");

btns.forEach((btn)=>{
btn.addEventListener("click",()=>{

gamefun(btn);
})
})


function gamefun(btn){
    let choseNum=Math.floor(Math.random()*btns.length);
    let compChose=btns[choseNum].innerHTML;
    let MyChoice=btn.innerHTML;
    
    if(MyChoice=='Stone'){
        if(compChose=='Paper'){
           message(compChose);
            display.value="computer win";
        }else if(compChose=='Scissor'){
            message(compChose);
            display.value="i win";
        }else{
            message(compChose);
            display.value="no one win"; 
        }
    }else if(MyChoice=='Paper'){
        if(compChose=='Stone'){
            message(compChose);
            display.value="i win";
        }else if(compChose=='Scissor'){
            message(compChose);
            display.value="computer win";
        }else{
            message(compChose);
            display.value="no one win";  
        }
    }else{
        if(compChose=='Stone'){
            message(compChose);
            display.value="computer win";
        }else if(compChose=='Paper'){
            message(compChose);
            display.value="i win";
        }else{
            message(compChose);
            display.value="no one win"; 
        }
    }
}


function message(compChose){
display2.value=`Computer Chose ${compChose}`
}





