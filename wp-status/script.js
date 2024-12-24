const alldata= [
    {
      "img": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      "name": "John Doe",
      "time": "2 hours ago"
    },
    {
      "img": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      "name": "Jane Smith",
      "time": "5 seconds ago"
    },
    {
      "img": "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      "name": "Alice Johnson",
      "time": "10 minutes later"
    },
    {
      "img": "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
      "name": "Mike Brown",
      "time": "1 day ago"
    },
    {
      "img": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      "name": "Sarah Wilson",
      "time": "30 seconds ago"
    },
    {
      "img": "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
      "name": "Emma Davis",
      "time": "3 weeks ago"
    },
    {
      "img": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      "name": "Liam Martinez",
      "time": "2 days later"
    },
    {
      "img": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      "name": "Olivia Garcia",
      "time": "15 minutes ago"
    },
    {
      "img": "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
      "name": "Noah Hernandez",
      "time": "5 hours ago"
    },
    {
      "img": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      "name": "Ava Johnson",
      "time": "just now"
    },
    {
        "img": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        "name": "John Doe",
        "time": "2 hours ago"
      },
      {
        "img": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        "name": "Jane Smith",
        "time": "5 seconds ago"
      },
      {
        "img": "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
        "name": "Alice Johnson",
        "time": "10 minutes later"
      },
      {
        "img": "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
        "name": "Mike Brown",
        "time": "1 day ago"
      },
      {
        "img": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        "name": "Sarah Wilson",
        "time": "30 seconds ago"
      },
      {
        "img": "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
        "name": "Emma Davis",
        "time": "3 weeks ago"
      },
      {
        "img": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
        "name": "Liam Martinez",
        "time": "2 days later"
      },
      {
        "img": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        "name": "Olivia Garcia",
        "time": "15 minutes ago"
      },
      {
        "img": "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
        "name": "Noah Hernandez",
        "time": "5 hours ago"
      },
      {
        "img": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        "name": "Ava Johnson",
        "time": "just now"
      }
  ];
  

let sum="";
let allStatus=document.querySelector(".allStatus");
alldata.forEach((data)=>{
sum=sum + `<div class="status">
                    <div class="overlay"></div>
                <div class="perstatus">
                    <div><img src=${data.img} alt=""></div>
                    <div>
                    <h4>${data.name}</h4>
                    <h4>${data.time}</h4>
                    </div>
                </div>
                </div>`
});

allStatus.innerHTML=sum;




  