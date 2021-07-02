const circle = document.querySelector(".circle");
const slider = document.querySelector(".slider");
const container = document.querySelector(".container")
const valueOfCircle = document.querySelector(".value");
const cir = circle.getBoundingClientRect();
const sliderRef = slider.getBoundingClientRect();
let start = sliderRef.left;
let end = 0;
let distance = 0;
let value = 0;
const mouseMove = (e) => {
    distance = e.clientX - start;
    value = Math.ceil(distance / 4);
    let remainder = 100 - value;
    circle.style.left = distance < 0 ? "0px" : distance > 398 ? 398 + "px" : distance + "px"
    start = cir.left;
    if(value <101) valueOfCircle.innerHTML = "Value: " + Math.ceil(distance / 4)
    slider.style.backgroundImage = `linear-gradient(to right, red 0 ${value}%, white ${value}% ${remainder}%  `
}

circle.addEventListener("mousedown", (e) => {
    container.addEventListener("mousemove", mouseMove)
    start = e.clientX;
})

slider.addEventListener("click", (e) =>{ 
    distance = e.clientX - start;
    value = Math.ceil(distance / 4);
    let remainder = 100 - value;
    circle.style.left = distance < 0 ? "0px" : distance > 398 ? 398 + "px" : distance + "px"
    if(value <101) valueOfCircle.innerHTML = "Value: " + Math.ceil(distance / 4)
    slider.style.backgroundImage = `linear-gradient(to right, red 0 ${value}%, white ${value}% ${remainder}%  `
  })

container.addEventListener("mouseup", (e) => {

    container.removeEventListener("mousemove", mouseMove)
   
})

