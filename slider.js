const left = document.querySelector(".left-arrow")
const right = document.querySelector(".right-arrow")
const slider = document.querySelector(".slider")
const image = document.querySelectorAll(".image")
const bottom = document.querySelector(".bottom")


let slideNumber = 1;
const length = image.length;

for (let i = 0; i < length; i++) {
    const div = document.createElement("div");
    div.className = "button";
    bottom.appendChild(div)
}

const buttons = document.querySelectorAll(".button")
buttons[0].style.backgroundColor = "black" 

const resetBg = () => {
    buttons.forEach((button) => {
        button.style.backgroundColor = "transparent"
    });
};

buttons.forEach((button,i) => {
    button.addEventListener("click", () => {
        resetBg()
        slider.style.transform = `translateX(-${i * 500}px)`;
        slideNumber = i + 1;
button.style.backgroundColor = "black" 
    }); 
}) 

const nextSlide = () => {
slider.style.transform = `translateX(-${slideNumber * 500}px)`;
    slideNumber++; 
}
const prevSlide = () => {
slider.style.transform = `translateX(-${(slideNumber-2) * 500}px)`;
    slideNumber--; 
}

const  getFirstSlide = () => {
 slider.style.transform = `translateX(0px)`;
    slideNumber = 1; 
} 

const getLastSlide = () => {
 slider.style.transform = `translateX(-${(length-1) * 500}px)`;
    slideNumber = length; 
}

const changeColor = () => {
 resetBg()
    buttons[slideNumber - 1].style.backgroundColor = "black";
}

right.addEventListener("click", () => {
    slideNumber < length ?
        nextSlide() : getFirstSlide();
    changeColor();
    
}); 

left.addEventListener("click", () => {
    slideNumber > 1 ? prevSlide() : getLastSlide();
    changeColor();
})

