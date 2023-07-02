const buttons = document.querySelectorAll(".btn");
const angularTotal = document.querySelector(".angular-input")
const reactTotal = document.querySelector(".react-input")
const vueTotal = document.querySelector(".vue-input")

let Avotes = 0;
let Rvotes = 0;
let Vvotes = 0;

// For Each Method did not work

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

let clicked = false;

function alreadyVoted() {
    let voted = false;
    if(!voted) {
        voted = true;
    }
}

function angular() {
    if(!clicked) {
        let newVote = Avotes += 1;
        angularTotal.value = newVote;
        clicked = true;
        alreadyVoted(voted) 
    }
}

function react () {
    if(!clicked) {
     reactTotal.value = Rvotes += 1;
        clicked = true; 
    }
}
function vue() {
    if (!clicked) {
        vueTotal.value = Vvotes += 1;
        clicked = true;     
    }
}