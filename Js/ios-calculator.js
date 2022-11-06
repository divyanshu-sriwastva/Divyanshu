let input = document.getElementsByTagName("input")[0]

/*------------------ 
Entering values to field
------------------*/

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

let equalBtn = document.getElementById("equal");

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
    if ((input.value.includes("x") || input.value.includes("/") || input.value.includes("%")) == false) {
        input.value += plus.value
    }
})
minus.addEventListener("click", () => {
    if ((input.value.includes("x") || input.value.includes("/") || input.value.includes("%")) == false) {
        input.value += minus.value
    }
})
divide.addEventListener("click", () => {
    if ((input.value.includes("+") || input.value.includes("-") || input.value.includes("x") || input.value.includes("/") || input.value.includes("%")) == false) {
        input.value += divide.value
    }
})
multiply.addEventListener("click", () => {
    if ((input.value.includes("+") || input.value.includes("-") || input.value.includes("x") || input.value.includes("/")) == false) {
        input.value += multiply.value
    }
})
percent.addEventListener("click", () => {
    if ((input.value.includes("+") || input.value.includes("-") || input.value.includes("x") || input.value.includes("/") || input.value.includes("%")) == false) {
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
    input.placeholder("00")
})
backBtn.addEventListener("click", () => {
    input.value = input.value.slice(0, -1)
})

/* ------------------ 
Calculating the result
------------------ */

equalBtn.addEventListener("click", () => {
    let exp = Array.from(input.value)
    let fir_exp = exp.slice(0, exp.indexOf("+")) || exp.indexOf("+") || exp.indexOf("*") || exp.indexOf("/") || exp.indexOf("x") || exp.indexOf("X")
    let sec_exp = exp.slice(exp.indexOf("+") + 1 || exp.indexOf("-") + 1 || exp.indexOf("*") + 1 || exp.indexOf("/") + 1 || exp.indexOf("x") + 1 || exp.indexOf("X") + 1,);
    fir_exp = fir_exp.join("")
    sec_exp = sec_exp.join("")
    fir_exp = Number.parseFloat(fir_exp)
    sec_exp = Number.parseFloat(sec_exp)
    if (exp.includes("+")) {
        input.value = fir_exp + sec_exp
    }
    else if (exp.includes("-")) {
        input.value = fir_exp - sec_exp
    }
    else if ((exp.includes("*") || exp.includes("x")) && exp.includes("%") == false) {
        input.value = fir_exp * sec_exp
    }
    else if (exp.includes("/")) {
        input.value = fir_exp / sec_exp
    }
    else if ((exp.includes("*") || exp.includes("x")) && exp.includes("%")) {
        input.value = fir_exp*(sec_exp/100)
    }
    if (input.value == 'undefined' || input.value == 'NaN') {
        input.value = null;
        input.placeholder = 'Invalid'
    }
})