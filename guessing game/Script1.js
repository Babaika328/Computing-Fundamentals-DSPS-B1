let randomNum = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guess = document.getElementById("guess");
const submit = document.getElementById("submit");
const hints = document.getElementById("hints");
const attemptsText = document.getElementById("attempts");

submit.addEventListener("click", checkGuess());
function CheckGuess() {
    const userValue = Number(guess.value);
    attempts;
    if (userValue === randomNum) {
        hint.textContent = "Congratulations, you guessed it!";
    }
    else if (userValue < randomNum) {
        hint.textContent = "Too low, try again";
    }
    else {
        hint.textContent = "Too high, try again";
    }
    attempts.textContent = "Attempts: " + attempts;
}