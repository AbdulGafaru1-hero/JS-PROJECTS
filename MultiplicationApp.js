const btn = document.querySelector(".btn");
const scoreEl = document.getElementById("score")
const input = document.getElementById("input")
const question = document.getElementById("question")
const form = document.getElementById("form")

const num1 = Math.ceil(Math.random() * 10)
const num2 = Math.ceil(Math.random() * 10)

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
    score = 0;
}
scoreEl.innerText = `score: ${score}`

question.innerText = `What is ${num1} multiply by ${num2}?`

const correctAns = num1 * num2;

form.addEventListener("submit", () => {
    const userAns = +input.value;
    if (userAns === correctAns) {
        score++;
        updateLocalStorage();
    } else {
        score--;
        updateLocalStorage();
    }

});

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score))
}