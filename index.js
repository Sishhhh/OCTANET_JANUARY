const bar = doucment.querySelector("#quote");

let red = Math.floor(Math.random()*255);
console.log(red);
let green = Math.floor(Math.random()*255);
let blue = Math.floor(Math.random()*255);
console.log("random color generated");

function changeColor(){
    console.log("Inside function")
    bar.innerText.style.backgroundColor = "red";
    console.log("function end")
}

console.log("calling fun");

changeColor();