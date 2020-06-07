var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#p3");
var numInput = document.querySelector("input");
var p = document.querySelector("#result");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;


p1Button.addEventListener("click", function() {
    if(!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            scorePlayer1.classList.add("winner");
            gameOver = true;
        }
        scorePlayer1.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function() {
    if(!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            scorePlayer2.classList.add("winner");
            gameOver = true;
        }
        scorePlayer2.textContent = p2Score;
    }
});

resetButton.addEventListener("click", function() {
    reset();
});

function reset() {
    
    p1Score = 0;
    p2Score = 0;
scorePlayer1.textContent = 0;
scorePlayer2.textContent = 0;
scorePlayer1.classList.remove("winner");
scorePlayer2.classList.remove("winner");
gameOver = false;
}


numInput.addEventListener("change", function(){
result.textContent = this.value;
winningScore = Number(this.value);
reset();
});

