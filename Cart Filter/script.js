const products = [
  {
    name: "Hero Hoodies",
    img: "https://pngimg.com/d/hoodie_PNG23.png",
    category: "hoodies",
    price: "$10",
  },
  {
    name: "BeCreative T-shirt",
    img: "https://www.freepnglogos.com/uploads/t-shirt-png/t-shirt-png-black-shirt-png-transparent-image-pngpix-2.png",
    category: "shirts",
    price: "$7",
  },
  {
    name: "Black & Red Shoes",
    img: "https://freepngimg.com/save/28530-nike-shoes-transparent/1464x1533",
    category: "sneakers",
    price: "$150",
  },
  {
    name: "Nike Exlucive Hoodies",
    img: "https://shop.navi.gg/files/resized/products/navi40884.650x622.png",
    category: "hoodies",
    price: "$11",
  },
  {
    name: "Canvas Men Shoe",
    img: "https://www.freepnglogos.com/uploads/shoes-png/dance-shoes-png-transparent-dance-shoes-images-5.png",
    category: "sneakers",
    price: "$99",
  },
  {
    name: "Men Exlucive Tshirt",
    img: "https://www.pngarts.com/files/5/Plain-Red-T-Shirt-Free-PNG-Image.png",
    category: "shirts",
    price: "$5",
  },
  {
    name: "Black Hoodies",
    img: "https://static.vecteezy.com/system/resources/previews/008/847/323/original/isolated-back-view-of-black-hoodie-free-png.png",
    category: "hoodies",
    price: "$13",
  },
  {
    name: "Designer T-shirt",
    img: "https://www.seekpng.com/png/detail/61-611401_read-more-png-t-shirt-design.png",
    category: "shirts",
    price: "$6",
  },
  {
    name: "White and Red Sneaker",
    img: "https://www.pngall.com/wp-content/uploads/2/White-Sneakers-PNG-Clipart.png",
    category: "sneakers",
    price: "$120",
  },
];

const addCart = document.querySelectorAll(".addToCart");
const cartIcon = document.querySelector(".cart-icon");
const price = document.querySelector(".price");
const productContainer = document.querySelector(".products");
const filterButtons = document.querySelectorAll(".btn");
let showCart = document.querySelector(".showCart");

let cart = 0;

function addToCart() {
  cart = cart + 1;
  cartIcon.innerHTML += `<p>${cart}</p>`;
  console.log("clicked");
  //  showCart.textContent += productName + productPrice;
}

function renderProducts(products) {
  let template = "";
  products.forEach((product) => {
    template += `
        <div class="product">
            <img src="${product.img}"/>
            <h3>${product.name}</h3>
            <div class="cart-bottom">
                <h4>${product.price}</h4>
                <button class="addToCart" onclick="addToCart()">Add To Cart</button>
            </div>
        </div>`;
  });
  productContainer.innerHTML = template;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    // get the current active filter
    const activeFilter = document.querySelector(".btn.active");
    // if active filter exists remove the active class
    if (activeFilter) {
      activeFilter.classList.remove("active");
    }
    // add active class to the clicked filter
    event.target.classList.add("active");
    // get the clicked filter category
    const filterValue = event.target.dataset.filter;
    const filteredProducts = products.filter(
      (product) => product.category === filterValue
    );
    if (filterValue === "all") {
      renderProducts(products);
    } else {
      renderProducts(filteredProducts);
    }
  });
});

cartIcon.addEventListener("click", function () {
  if ((showCart.style.display = "none")) {
    showCart.style.display = "block";
  } else {
    showCart.style.display = "none";
  }
});

window.addEventListener("DOMContentLoaded", function () {
  renderProducts(products);
});
