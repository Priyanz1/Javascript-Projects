const data = [
  {
    img_src: "https://images.unsplash.com/photo-1607349658516-9fb46b47ce53?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5zdGElMjBwcm9maWxlcGhvdG98ZW58MHx8MHx8fDA%3D",
    name: "sachin dubey",
    second_img_src: "https://images.unsplash.com/photo-1719937206930-84afb0daf141?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
    short_bio: "trader h ye",
    profile_src: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    img_src: "https://images.unsplash.com/photo-1555685812-4b7432ac234f?w=1000&auto=format&fit=crop&q=60",
    name: "Amit Sharma",
    second_img_src: "https://images.unsplash.com/photo-1587614382346-4a10b6fe3f9c?w=1000&auto=format&fit=crop&q=60",
    short_bio: "Software Engineer",
    profile_src: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    img_src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&auto=format&fit=crop&q=60",
    name: "Riya Singh",
    second_img_src: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=1000&auto=format&fit=crop&q=60",
    short_bio: "Graphic Designer",
    profile_src: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    img_src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000&auto=format&fit=crop&q=60",
    name: "Karan Mehta",
    second_img_src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1000&auto=format&fit=crop&q=60",
    short_bio: "Marketing Manager",
    profile_src: "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    img_src: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=1000&auto=format&fit=crop&q=60",
    name: "Priya Verma",
    second_img_src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1000&auto=format&fit=crop&q=60",
    short_bio: "Content Writer",
    profile_src: "https://randomuser.me/api/portraits/women/5.jpg"
  },
  {
    img_src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&auto=format&fit=crop&q=60",
    name: "Vikas Yadav",
    second_img_src: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=1000&auto=format&fit=crop&q=60",
    short_bio: "Entrepreneur",
    profile_src: "https://randomuser.me/api/portraits/men/6.jpg"
  },
  {
    img_src: "https://images.unsplash.com/photo-1558980664-54f16b15a22b?w=1000&auto=format&fit=crop&q=60",
    name: "Sneha Kapoor",
    second_img_src: "https://images.unsplash.com/photo-1564061170517-d3907caa96ea?w=1000&auto=format&fit=crop&q=60",
    short_bio: "Travel Blogger",
    profile_src: "https://randomuser.me/api/portraits/women/7.jpg"
  },
  {
    img_src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1000&auto=format&fit=crop&q=60",
    name: "Rajesh Kumar",
    second_img_src: "https://images.unsplash.com/photo-1516728778615-2d590ea185ee?w=1000&auto=format&fit=crop&q=60",
    short_bio: "Fitness Trainer",
    profile_src: "https://randomuser.me/api/portraits/men/8.jpg"
  },
  {
    img_src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=1000&auto=format&fit=crop&q=60",
    name: "Simran Arora",
    second_img_src: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=1000&auto=format&fit=crop&q=60",
    short_bio: "Digital Marketer",
    profile_src: "https://randomuser.me/api/portraits/women/9.jpg"
  },
  {
    img_src: "https://images.unsplash.com/photo-1553467627-873fe7d0fc02?w=1000&auto=format&fit=crop&q=60",
    name: "Manish Pandey",
    second_img_src: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=1000&auto=format&fit=crop&q=60",
    short_bio: "Data Scientist",
    profile_src: "https://randomuser.me/api/portraits/men/10.jpg"
  },
  {
    img_src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=1000&auto=format&fit=crop&q=60",
    name: "Anjali Gupta",
    second_img_src: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=1000&auto=format&fit=crop&q=60",
    short_bio: "Photographer",
    profile_src: "https://randomuser.me/api/portraits/women/11.jpg"
  }
];



      
   let Storyian=document.querySelector(".storyian");
   let Folwrdata=document.querySelector(".folwrdata");
    let sum=`  <div class="status">
                <img src="https://plus.unsplash.com/premium_photo-1670161434750-d2798af413d4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" alt="">
             </div>`;
  let user="";

    data.forEach((data,idx)=>{
  sum=sum + `<div class="status">
                <img id=${idx} src=${data.img_src} alt="">
             </div>`;
    })
  
    Storyian.innerHTML=sum;

data.forEach((data)=>{
user=user + ` <div class="user"> <h3 class="folwrname">${data.name}</h3>
                <img class="folwrpic" src=${data. second_img_src} alt="">
                <p class="folwrbio">${data.short_bio} </p></div>
                <hr> `
})

Folwrdata.innerHTML=user;

const arr = [
  "https://randomuser.me/api/portraits/men/1.jpg",
  "https://randomuser.me/api/portraits/women/1.jpg",
  "https://randomuser.me/api/portraits/men/2.jpg",
  "https://randomuser.me/api/portraits/women/2.jpg",
  "https://randomuser.me/api/portraits/men/3.jpg",
  "https://randomuser.me/api/portraits/women/3.jpg",
  "https://randomuser.me/api/portraits/men/4.jpg",
  "https://randomuser.me/api/portraits/women/4.jpg",
  "https://randomuser.me/api/portraits/men/5.jpg",
  "https://randomuser.me/api/portraits/women/5.jpg",
  "https://randomuser.me/api/portraits/men/6.jpg",
  "https://randomuser.me/api/portraits/women/6.jpg",
  "https://randomuser.me/api/portraits/men/7.jpg",
  "https://randomuser.me/api/portraits/women/7.jpg",
  "https://randomuser.me/api/portraits/men/8.jpg",
  "https://randomuser.me/api/portraits/women/8.jpg",
  "https://randomuser.me/api/portraits/men/9.jpg",
  "https://randomuser.me/api/portraits/women/9.jpg",
  "https://randomuser.me/api/portraits/men/10.jpg",
  "https://randomuser.me/api/portraits/women/10.jpg",
  "https://randomuser.me/api/portraits/men/11.jpg",
  "https://randomuser.me/api/portraits/women/11.jpg",
  "https://randomuser.me/api/portraits/men/12.jpg",
  "https://randomuser.me/api/portraits/women/12.jpg",
  "https://randomuser.me/api/portraits/men/13.jpg",
  "https://randomuser.me/api/portraits/women/13.jpg",
  "https://randomuser.me/api/portraits/men/14.jpg",
  "https://randomuser.me/api/portraits/women/14.jpg",
  "https://randomuser.me/api/portraits/men/15.jpg",
  "https://randomuser.me/api/portraits/women/15.jpg",
  "https://randomuser.me/api/portraits/men/16.jpg",
  "https://randomuser.me/api/portraits/women/16.jpg",
  "https://randomuser.me/api/portraits/men/17.jpg",
  "https://randomuser.me/api/portraits/women/17.jpg",
  "https://randomuser.me/api/portraits/men/18.jpg",
  "https://randomuser.me/api/portraits/women/18.jpg",
  "https://randomuser.me/api/portraits/men/19.jpg",
  "https://randomuser.me/api/portraits/women/19.jpg",
  "https://randomuser.me/api/portraits/men/20.jpg",
  "https://randomuser.me/api/portraits/women/20.jpg",
  "https://randomuser.me/api/portraits/men/21.jpg",
  "https://randomuser.me/api/portraits/women/21.jpg",
];



let StoryPnl= document.querySelector(".StoryPnl");
Storyian.addEventListener("click",(dets)=>{
console.log(dets.target.id);

setTimeout(()=>{
  StoryPnl.style.display='none';
  Folwrdata.style.display='block';
  
},1000)
StoryPnl.style.display='block';
StoryPnl.style.backgroundImage = `url('${arr[dets.target.id]}')`;
StoryPnl.style.backgroundSize = 'cover';
Folwrdata.style.display='none';


}
)
