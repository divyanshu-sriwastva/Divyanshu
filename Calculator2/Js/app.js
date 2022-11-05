let input = document.getElementsByTagName("input")[0]

/* ------------------ 
    Entering values to field
   ------------------ */

// Getting the values from buttons.

let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");

let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let equal = document.getElementById("equal");
let dot = document.getElementById("dot");
let percent = document.getElementById("percent");

let clearBtn = document.getElementById("clear");
let backBtn = document.getElementById("back");

// Entering values through buttons.

one.addEventListener("click", () => {
    input.value += one.value
})
two.addEventListener("click", () => {
    input.value += two.value
})
three.addEventListener("click", () => {
    input.value += three.value
})
four.addEventListener("click", () => {
    input.value += four.value
})
five.addEventListener("click", () => {
    input.value += five.value
})
six.addEventListener("click", () => {
    input.value += six.value
})
seven.addEventListener("click", () => {
    input.value += seven.value
})
eight.addEventListener("click", () => {
    input.value += eight.value
})
nine.addEventListener("click", () => {
    input.value += nine.value
})
zero.addEventListener("click", () => {
    input.value += zero.value
})

// Adding signs to field.

plus.addEventListener("click", () => {
    if ((input.value.includes("+") || input.value.includes("-") || input.value.includes("*") || input.value.includes("/") || input.value.includes("%")) == false) {
        input.value += plus.value
    }
})
minus.addEventListener("click", () => {
    if ((input.value.includes("+") || input.value.includes("-") || input.value.includes("*") || input.value.includes("/") || input.value.includes("%")) == false) {
        input.value += minus.value
    }
})
divide.addEventListener("click", () => {
    if ((input.value.includes("+") || input.value.includes("-") || input.value.includes("*") || input.value.includes("/") || input.value.includes("%")) == false) {
        input.value += divide.value
    }
})
multiply.addEventListener("click", () => {
    if ((input.value.includes("+") || input.value.includes("-") || input.value.includes("*") || input.value.includes("/") || input.value.includes("%")) == false) {
        input.value += multiply.value
    }
})
percent.addEventListener("click", () => {
    if ((input.value.includes("+") || input.value.includes("-") || input.value.includes("*") || input.value.includes("/") || input.value.includes("%")) == false) {
        input.value += percent.value
    }
})
dot.addEventListener("click", () => {
    input.value += dot.value
})

/* ------------------ 
    Clearing values of field
   ------------------ */

clearBtn.addEventListener("click", () => {
    input.value = null;
})
backBtn.addEventListener("click", () => {
    input.value = input.value.slice(0, -1)
})