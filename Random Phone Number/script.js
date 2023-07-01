const generate = document.querySelector(".generate");
const saveNumber = document.querySelector(".save");
const result = document.querySelector(".result");
const inputValue = document.querySelector(".input");
const networks = document.querySelector(".networks");


window.onload = function() {
    if (localStorage) {
const Number = result.innerHTML += inputValue.value;
generate.addEventListener("click", function() {
    const randomNumber = (parseInt(Math.random().toFixed(7).replace("0.","")));
    update(randomNumber);
})

function update(randomNumber){
    let option = networks.options[networks.selectedIndex];
    if(option.value === "1") {
        inputValue.value +=  ` 024${randomNumber}`;
    } else if (option.value === "2") {
        inputValue.value +=  ` 050${randomNumber}`;
    } else {
        inputValue.value +=  ` 027${randomNumber}`;
    }
}

saveNumber.addEventListener("click", function(){
    result.innerHTML += inputValue.value;
    inputValue.value = "";
})

window.localStorage.setItem("newNumber",  JSON.stringify("Number"));

JSON.parseInt(window.localStorage.getItem('newNumber'));
    }
}
