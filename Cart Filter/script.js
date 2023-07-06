const  products = [
    {name: "Hero Hoodies",
    img: "https://pngimg.com/d/hoodie_PNG23.png",
    category: "hoodie",
    price: "$10"
},
    {name: "BeCreative T-shirt",
    img: "https://www.freepnglogos.com/uploads/t-shirt-png/t-shirt-png-black-shirt-png-transparent-image-pngpix-2.png",
    category: "shirt",
    price: "$7"
},
    {name: "Black & Red Shoes",
    img: "https://freepngimg.com/save/28530-nike-shoes-transparent/1464x1533",
    category: "sneaker",
    price: "$150"
},
    {name: "Nike Exlucive Hoodies",
    img: "https://shop.navi.gg/files/resized/products/navi40884.650x622.png",
    category: "hoodie",
    price: "$11"
},
    {name: "Canvas Men Shoe",
    img: "https://www.freepnglogos.com/uploads/shoes-png/dance-shoes-png-transparent-dance-shoes-images-5.png",
    category: "sneaker",
    price: "$99"
},
    {name: "Men Exlucive Tshirt",
    img: "https://www.pngarts.com/files/5/Plain-Red-T-Shirt-Free-PNG-Image.png",
    category: "shirt",
    price: "$5"
},
    {name: "Black Hoodies",
    img: "https://static.vecteezy.com/system/resources/previews/008/847/323/original/isolated-back-view-of-black-hoodie-free-png.png",
    category: "hoodie",
    price: "$13"
},
    {name: "Designer T-shirt",
    img: "https://www.seekpng.com/png/detail/61-611401_read-more-png-t-shirt-design.png",
    category: "shirt",
    price: "$6"
},
    {name: "White and Red Sneaker",
    img: "https://www.pngall.com/wp-content/uploads/2/White-Sneakers-PNG-Clipart.png",
    category: "sneaker",
    price: "$120"
},

]



const addCart = document.querySelectorAll(".addToCart");
const cartIcon = document.querySelector(".cart-icon")
const price = document.querySelector(".price")
const productContainer = document.querySelector(".products")
const filterButtons = document.querySelectorAll(".btn")

let cart = 0;


 function addToCart() {
       cart = cart + 1;
     cartIcon.innerHTML += `<p>${cart}</p>`
     console.log("clicked");
 }


// Looping through the products using map function
const myProducts = products.map((product) => {
 const productName = product.name;
 const productImage = product.img;
 const productPrice = product.price;
   return productContainer.innerHTML += 
    `<div class="product">
<img src="${productImage}"/>
<h3>${productName}</h3>
<div class="cart-bottom">
<h4>${productPrice}</h4>
<button class="addToCart" onclick="addToCart()">Add To Cart</button>
</div>
</div>
`
})

filterButtons.forEach(button => {
    button.addEventListener("click", function(e){
        const filteredCategory = e.currentTarget.dataset.id;
        const displayProduct = products.filter((product) => {
            // console.log(product.filteredCategory);
            if(product.filteredCategory === filteredCategory){
              return product;
            }
           
        })
     
    })
});
// categories using filter

