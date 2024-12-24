let btn=document.querySelector("button");

const insectsarr=[
    "https://th.bing.com/th/id/R.7d73945916d3a652d420490eb88b29c5?rik=PzDTDeUsjWAtog&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-insects-dragonfly-png-image-1500.png&ehk=ume20oYTBDmqsapjFExUGVt8VpSrEEI%2fVsECyIGplAo%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.34f028d47c748ce050884a2b4df59833?rik=LBYbVWC9Ltalxg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fbug-hd-png-resolution-1656-x-1284-format-png-keywords-insect-beetle-1656.png&ehk=PNB19VNKyXqiJ2CvUk0KN8EHEEgxFlbexgmM7lNeVAQ%3d&risl=&pid=ImgRaw&r=0",
    "https://www.pngplay.com/wp-content/uploads/7/Insect-Free-PNG.png"
]
btn.addEventListener("click",()=>{
    let Img=document.createElement("img");
    let valueX=Math.random()*100;
    let valueY=Math.random()*100;
    let rot=Math.random()*360;
    let  idx=Math.floor(Math.random()*3);
    Img.style.position='absolute';
    Img.setAttribute("src",insectsarr[idx]);
    Img.style.left=valueX+'%';
    Img.style.top=valueY+'%';
    Img.style.rotate=rot+'deg';
    Img.style.height="60px"
    document.querySelector("body").appendChild(Img);
})














