const buttons = document.querySelectorAll(".btn");
const angularTotal = document.querySelector(".angular-input")
const reactTotal = document.querySelector(".react-input")
const vueTotal = document.querySelector(".vue-input")


let votes = {
    react: 0,
    angular: 0,
    vue: 0,
}

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

// Allow user to vote only once

let clicked = false;


function voteAngular({votes}) {
    if(!clicked) {
        const newVote = votes.angular += 1;
        angularTotal.value = newVote;
        clicked = true;
    }
}


function voteReact ({votes}) {
    if(!clicked) {
     reactTotal.value = votes.react += 1;
     localStorage.setItem("angular", JSON.stringify(angularTotal.value = newVote))
        clicked = true; 

    }
}
function voteVue({votes}) {
    if (!clicked) {
        vueTotal.value = votes.vue += 1;
        clicked = true;     
    }
}