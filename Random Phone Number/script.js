const generate = document.querySelector(".generate");
const saveNumber = document.querySelector(".save");
const result = document.querySelector(".result");
const input = document.querySelector(".input");
const networks = document.querySelector(".networks");


window.onload = function() {
    if (localStorage) {
const phoneNumber = result.innerHTML += input.value;

generate.addEventListener("click", function(event) {
    const randomNumber = (parseInt(Math.random().toFixed(7).replace("0.","")));
    update(randomNumber);
    event.target.disabled = true; 
})


function update(randomNumber){
    let option = networks.options[networks.selectedIndex];
    if(option.text === "MTN") {
        input.value +=  ` 024${randomNumber}`;
    } else if (option.text === "Vodafone") {
        input.value +=  ` 050${randomNumber}`;
    } else {
        input.value +=  ` 027${randomNumber}`;
    }
}

saveNumber.addEventListener("click", function(){
    result.innerHTML += input.value;
    input.value = "";
})

window.localStorage.setItem("newNumber",  JSON.stringify("phoneNumber"));

JSON.parseInt(window.localStorage.getItem('newNumber'));
    }
}
