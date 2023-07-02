const buttons = document.querySelectorAll(".btn");
const angularTotal = document.querySelector(".angular-input")
const reactTotal = document.querySelector(".react-input")
const vueTotal = document.querySelector(".vue-input")

let Avotes = 0;
let Rvotes = 0;
let Vvotes = 0;

// buttons.forEach(function(vote) {
//     vote.addEventListener("click", function (e) {
//         const voteBtn = e.currentTarget.classList;
//         if(voteBtn.contains("angular")) {
//            totalVotes = Avotes++;
//         } else if (voteBtn.contains("react")){
//             console.log(Rvotes++ + 'react');
//         } else {
//             console.log(Vvotes++ + 'vue');
//         }
//     })
// })

function angular(event) {
    let newVote = Avotes += 1;
    angularTotal.value = newVote;
    event.target.disabled = true; 
}

const react = (event) =>  {
 reactTotal.value = Rvotes++;
 event.target.disabled = true; 
}
function vue() {
   vueTotal.value = Vvotes++;
}