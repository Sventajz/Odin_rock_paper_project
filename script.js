let userSelection;
let computerChoice;
let playerPoints = 0;
let computerPoints = 0;
const rockbtn = document.getElementsByClassName("card1");
const paperbtn = document.getElementsByClassName("card2");
const scissorbtn = document.getElementsByClassName("card3");
const elemcont = document.querySelector(".choice1");
const elemcont2 = document.querySelector(".choice2");
var image1 = document.createElement("img");
var image2 = document.createElement("img");
var image3 = document.createElement("img");
image1.src = "images/rock.svg";
image2.src = "images/papers.svg";
image3.src = "images/scissors.svg";
const buttonPlayAgain = document.querySelector(".play-again");

const images = [image1, image2, image3];
images.forEach(function imgstyle(image) {
  image.style = "max-width: 100%; max-height:100%;";
});
var compImg;
//random int for computer choice
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function resetGame() {
  buttonPlayAgain.addEventListener("click", () => {
    window.location.reload();
  });
}

var rounds = 0;
function countRounds() {
  rounds += 1;
  return rounds;
}

//function that assings the computer his choice for rock paper scissor
function computerPlay() {
  if (randomIntFromInterval(1, 3) == 1) {
    computerChoice = "rock";
    compImg = image1;
  } else if (randomIntFromInterval(1, 3) == 2) {
    computerChoice = "paper";
    compImg = image2;
  } else {
    computerChoice = "scissor";
    compImg = image3;
  }
  return computerChoice;
}

//function that compares user and computer selections
function playRound(user, computer) {
  user = userSelection;
  computer = computerChoice;
  let roundWinner;

  if (user == computer) roundWinner = "its a tie";
  else if (
    (user == "paper" && computer == "rock") ||
    (user == "scissor" && computer == "paper") ||
    (user == "rock" && computer == "scissor")
  ) {
    roundWinner = "player wins";
    playerPoints = playerPoints + 1;
  } else if (
    (computer == "rock" && user == "scissor") ||
    (computer == "paper" && user == "rock") ||
    (computer == "scissor" && user == "paper")
  ) {
    roundWinner = "computer wins";
    computerPoints = computerPoints + 1;
  }
  return roundWinner, playerPoints, computerPoints;
}

function updateScoreBoard(playerPoints, computerPoints) {
  document.querySelector("#computerScore").textContent = computerPoints;
  document.querySelector("#playerScore").textContent = playerPoints;
}
computerPlay();
console.log("computer choice was:  ", computerChoice);
updateScoreBoard(playerPoints, computerPoints);

function playGame() {
  rockbtn[0].addEventListener("click", function onClick() {
    userSelection = "rock";
    playRound(userSelection, computerChoice);

    while (elemcont2.hasChildNodes()) {
      elemcont2.removeChild(elemcont2.firstChild);
    }
    elemcont2.appendChild(compImg);
    elemcont.textContent = "Your choice was: " + userSelection;
    console.log("computer choice was:  ", computerChoice);
    computerPlay();
    console.log("computer choice is going to be:  ", computerChoice);
    updateScoreBoard(playerPoints, computerPoints);
    countRounds();
    if (rounds == 5) {
      buttonPlayAgain.style.visibility = "visible";
      resetGame();
    }
  });
  paperbtn[0].addEventListener("click", function onClick() {
    userSelection = "paper";
    playRound(userSelection, computerChoice);
    while (elemcont2.hasChildNodes()) {
      elemcont2.removeChild(elemcont2.firstChild);
    }
    elemcont2.appendChild(compImg);
    elemcont.textContent = "Your choice was: " + userSelection;
    console.log("computer choice was:  ", computerChoice);
    computerPlay();
    console.log("computer choice is going to be:  ", computerChoice);
    updateScoreBoard(playerPoints, computerPoints);
    countRounds();
    if (rounds == 5) {
      buttonPlayAgain.style.visibility = "visible";
      resetGame();
    }
  });
  scissorbtn[0].addEventListener("click", function onClick() {
    userSelection = "scissor";
    console.log(userSelection);
    playRound(userSelection, computerChoice);
    console.log(playerPoints);
    while (elemcont2.hasChildNodes()) {
      elemcont2.removeChild(elemcont2.firstChild);
    }
    elemcont2.appendChild(compImg);
    elemcont.textContent = "Your choice was: " + userSelection;
    console.log("computer choice was:  ", computerChoice);
    computerPlay();
    console.log("computer choice is going to be:  ", computerChoice);
    updateScoreBoard(playerPoints, computerPoints);
    countRounds();
    console.log("round number is: ", rounds);
    if (rounds == 5) {
      buttonPlayAgain.style.visibility = "visible";
      resetGame();
    }
  });
}

playGame();
