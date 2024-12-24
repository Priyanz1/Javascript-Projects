



const Products=[
    {
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s",
      "name": "Classic White T-Shirt",
      "price": 19.99
    },
    {
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtL2qp3cLNvOse2ld2I5KfxV98L-izENEfB0aDDrinK6voHjHCG47kE56CpqgYDzoeKLo&usqp=CAU",
      "name": "Stylish Denim Jacket",
      "price": 49.99
    },
    {
      "img": "https://imageupscaler.com/wp-content/uploads/2024/07/deblured-cutty-fox.jpg",
      "name": "Casual Sneakers",
      "price": 39.99
    },
    {
      "img": "https://images.unsplash.com/photo-1531058020387-3be344556be6",
      "name": "Elegant Watch",
      "price": 129.99
    },
    {
      "img": "https://imageupscaler.com/wp-content/uploads/2024/07/deblured-cutty-fox.jpg",
      "name": "Leather Backpack",
      "price": 89.99
    },
    {
        "img": "https://imageupscaler.com/wp-content/uploads/2024/07/deblured-cutty-fox.jpg",
        "name": "Leather Backpack",
        "price": 89.99
      },
      {
        "img": "https://imageupscaler.com/wp-content/uploads/2024/07/deblured-cutty-fox.jpg",
        "name": "Leather Backpack",
        "price": 89.99
      },
      {
          "img": "https://imageupscaler.com/wp-content/uploads/2024/07/deblured-cutty-fox.jpg",
          "name": "Leather Backpack",
          "price": 89.99
        },
        {
          "img": "https://imageupscaler.com/wp-content/uploads/2024/07/deblured-cutty-fox.jpg",
          "name": "Leather Backpack",
          "price": 89.99
        },
        {
            "img": "https://imageupscaler.com/wp-content/uploads/2024/07/deblured-cutty-fox.jpg",
            "name": "Leather Backpack",
            "price": 89.99
          },
  ]
  ;
  

  let Cards=document.querySelector(".Cards");
  let sum=""; 
  
  Products.forEach((Product)=>{
   sum=sum + ` <div class="Card">
                <img src=${Product.img} alt="">
                <p>${Product.name}</p>
                <div> 
                    <h2>${Product.price}</h2>
                    <button>Buy</button>
                </div>
            </div>  `
  });

  Cards.innerHTML=sum;