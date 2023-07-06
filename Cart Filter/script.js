const addToCart = document.querySelectorAll(".addToCart");
const cartIcon = document.querySelector(".cart-icon")

let cart = 0;

addToCart.forEach(button => {
    button.addEventListener("click", function(){
       cart = cart += 1;
     cartIcon.innerHTML += `<p>${cart}</p>`
    })
});


function cartTotal() {
    
}