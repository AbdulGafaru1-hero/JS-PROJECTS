// const increase = document.querySelector(".increase")
// const decrease = document.querySelector(".decrease")
// const reset = document.querySelector(".reset")
const countDisplay = document.querySelector(".count-el")
let count = 0;


function increament(){
    count ++;
    countDisplay.innerHTML = count;
}
increament()

function reset(){
    count = 0;
    countDisplay.innerHTML = count;
}
 function decrement(){
count --;
countDisplay.innerHTML = count;
 }