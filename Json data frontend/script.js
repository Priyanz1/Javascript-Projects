let arr=[
    {
        name:"Mudit",
        age:20,
        city:"Kiloda"
    },
    {
        name:"Shivam",
        age:19,
        city:"Akodia"
    },
    {
        name:"Ayush",
        age:21,
        city:"Salsalai"
    },
    {
        name:"Aditya",
        age:21,
        city:"Kiloda"
    }
];
let sum=" ";
arr.forEach(function(elem){
    sum +=  `<div class="card">
    <h1>${elem.name}</h1>
    <h4>age- ${elem.age}    Place- ${elem.city}</h4>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores voluptatibus qui et, omnis magnam hic possimus ex tenetur, veritatis voluptatum fugiat tempora cum fuga molestiae.</p>
    </div>`;
    
})

let body=document.querySelector('body')
body.innerHTML=sum
