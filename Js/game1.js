// Coding a game - Rock, Paper, Scissors

let paperBtn = document.getElementById("paper")
let scissorsBtn = document.getElementById("scissors")
let rockBtn = document.getElementById("rock")

let resultBox = document.querySelector(".win-loose")

let userScoreDisplay = document.querySelector("#user_score")
let jsScoreDisplay = document.querySelector("#comp_score")
let userGuessDisplay = document.querySelector("#user_guess")
let JsGuessDisplay = document.querySelector("#comp_guess")

let userScore = 0;
let JsScore = 0;

let array = ["rock", "paper", "scissors"]

paperBtn.addEventListener("click", () => {
    let jsGuess = array[Math.floor(Math.random() * array.length)];
    if (jsGuess == "rock") {
        resultBox.innerHTML = "YOU WIN!!"
        resultBox.style.color = "green";
        userScore += 1;
    }
    else if (jsGuess == "scissors") {
        resultBox.innerHTML = "YOU LOOSE!!"
        resultBox.style.color = "red";
        JsScore += 1;
    }
    else {
        resultBox.innerHTML = "TIE"
        resultBox.style.color = "green";
    }
    JsGuessDisplay.innerHTML = jsGuess;
    userGuessDisplay.innerHTML = paperBtn.value
    userScoreDisplay.innerHTML = userScore;
    jsScoreDisplay.innerHTML = JsScore;
})

rockBtn.addEventListener("click", () => {
    jsGuess = array[Math.floor(Math.random() * array.length)];
    if (jsGuess == "scissors") {
        resultBox.innerHTML = "YOU WIN!!"
        resultBox.style.color = "green";
        userScore += 1;
    }
    else if (jsGuess == "paper") {
        resultBox.innerHTML = "YOU LOOSE!!"
        resultBox.style.color = "red";
        JsScore += 1;
    }
    else {
        resultBox.innerHTML = "TIE"
        resultBox.style.color = "green";
    }
    JsGuessDisplay.innerHTML = jsGuess;
    userGuessDisplay.innerHTML = rockBtn.value
    userScoreDisplay.innerHTML = userScore;
    jsScoreDisplay.innerHTML = JsScore;
})

scissorsBtn.addEventListener("click", () => {
    jsGuess = array[Math.floor(Math.random() * array.length)];
    if (jsGuess == "paper") {
        resultBox.innerHTML = "YOU WIN!!"
        resultBox.style.color = "green";
        userScore += 1;
    }
    else if (jsGuess == "rock") {
        resultBox.innerHTML = "YOU LOOSE!!"
        resultBox.style.color = "red";
        JsScore += 1;
    }
    else {
        resultBox.innerHTML = "TIE"
        resultBox.style.color = "green";
    }
    JsGuessDisplay.innerHTML = jsGuess;
    userGuessDisplay.innerHTML = scissorsBtn.value
    userScoreDisplay.innerHTML = userScore;
    jsScoreDisplay.innerHTML = JsScore;
})