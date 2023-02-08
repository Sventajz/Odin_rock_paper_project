let userSelection;
let computerChoice;
let userPoints = 0;
let computerPoints = 0;
const rpsChoice = document.querySelectorAll(".col");
const elemcont2 = document.querySelector(".choice2");
const buttonPlayAgain = document.getElementById("again-button");
const popup = document.querySelector(".popup");
const elemcont = document.querySelector(".choice1");
var rounds = 0;
var image1 = document.createElement("img"),
  image2 = document.createElement("img"),
  image3 = document.createElement("img");
image1.src = "images/rock.svg";
image2.src = "images/papers.svg";
image3.src = "images/scissors.svg";
const images = [image1, image2, image3];

//this styles all of the dom images to fit inside their div container
images.forEach(function imgstyle(image) {
  image.style = "max-width: 100%; max-height:100%;";
});
var compImg;

//random int for computer choice
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//function that asings the computer his choice for rock paper scissor
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
// and decides the winner of the round based on choice
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
    userPoints = userPoints + 1;
  } else if (
    (computer == "rock" && user == "scissor") ||
    (computer == "paper" && user == "rock") ||
    (computer == "scissor" && user == "paper")
  ) {
    roundWinner = "computer wins";
    computerPoints = computerPoints + 1;
  }
  return roundWinner, userPoints, computerPoints;
}
// click event listener for the game reset button that appears
// after five rounds are played
function resetGame() {
  buttonPlayAgain.addEventListener("click", () => {
    window.location.reload();
  });
}
// simple function that increases the round timer
function countRounds() {
  rounds += 1;
  return rounds;
}
// simple function which compares player and computer scores
// after five rounds and turns on play again button visibility
function endGame() {
  const winner = document.getElementById("winner-text");
  const lore = document.getElementById("lore");
  if (rounds == 5) {
    if (userPoints > computerPoints) {
      winner.textContent = "YOU WON THE GAME!";
      lore.textContent =
        "It was a bloody fight, but you pulled trough and saved humanity in these troubling times. BRAVO! You deserve all the fame";
    } else if (userPoints < computerPoints) {
      winner.textContent = "ALIENS WON THE GAME!";
      lore.textContent =
        "You should be ashamed of yourself. The fate of manking was on your shoulders and you let us down. Now we are bound to eternaly play rock paper scissors with aliens until we all die.";
    }

    var blur = document.querySelector(".wholeScreen");
    blur.classList.toggle("active");
    popup.classList.toggle("active");
  }
}

function updateScoreBoard(userPoints, computerPoints) {
  document.querySelector("#computerScore").textContent = computerPoints;
  document.querySelector("#playerScore").textContent = userPoints;
}

// this function displays previous computer choice inside a div using DOM
// manipulation
function compImageDisplay() {
  while (elemcont2.hasChildNodes()) {
    elemcont2.removeChild(elemcont2.firstChild);
  }
  elemcont2.appendChild(compImg);
}

// functin that contains event click listener for player choices
// and utilizes previously defined functions to run a simple
// rock paper scissors game

function playGame() {
  computerPlay();
  const element = document.querySelector(".element-container");
  rpsChoice.forEach((choice) => {
    choice.addEventListener("click", () => {
      if (choice.classList.contains("card1")) {
        userSelection = "rock";
      } else if (choice.classList.contains("card2")) {
        userSelection = "paper";
      } else {
        userSelection = "scissor";
      }
      element.style.visibility = "visible";
      countRounds();
      computerPlay();
      compImageDisplay();
      elemcont.textContent = "Your choice was: " + userSelection;

      playRound(userSelection, computerChoice);
      updateScoreBoard(userPoints, computerPoints);
      endGame();
      resetGame();
    });
  });
}

playGame();
