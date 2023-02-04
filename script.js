let userSelection;
let computerChoice;
let playerPoints = 0;
let computerPoints = 0;
const rockbtn = document.getElementsByClassName("card1");
const paperbtn = document.getElementsByClassName("card2");
const scissorbtn = document.getElementsByClassName("card3");

console.log(rockbtn);

//random int for computer choice
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//function that assings the computer his choice for rock paper scissor
function computerPlay() {
  if (randomIntFromInterval(1, 3) == 1) {
    computerChoice = "rock";
  } else if (randomIntFromInterval(1, 3) == 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissor";
  }
  return computerChoice;
}

//function that compares user and computer selections
function playRound(user, computer) {
  user = userSelection;
  computer = computerChoice;
  let roundWinner;

  if (user == computer) roundWinner = "its a tie";
  else if (user == "paper" && computer == "rock") {
    roundWinner = "player wins";
    playerPoints = playerPoints + 1;
  } else if (user == "scissor" && computer == "paper") {
    roundWinner = "player wins";
    playerPoints = playerPoints + 1;
  } else if (user == "rock" && computer == "scissor") {
    roundWinner = "player wins";
    playerPoints = playerPoints + 1;
  } else if (computer == "rock" && user == "scissor") {
    roundWinner = "computer wins";
    computerPoints = computerPoints + 1;
  } else if (computer == "paper" && user == "rock") {
    roundWinner = "computer wins";
    computerPoints = computerPoints + 1;
  } else if (computer == "scissor" && user == "paper") {
    roundWinner = "computer wins";
    computerPoints = computerPoints + 1;
  }
  return roundWinner, playerPoints, computerPoints;
}

function updateScoreBoard(playerPoints, computerPoints) {
  document.querySelector("#comp").textContent = computerPoints;
  document.querySelector("#pla").textContent = playerPoints;
}
computerPlay();
console.log("computer choice is: ", computerChoice);
updateScoreBoard(playerPoints, computerPoints);
console.log(rockbtn);
rockbtn[0].addEventListener("click", function onClick() {
  console.log("this is rock");
  userSelection = "rock";
  console.log(userSelection);
  playRound(userSelection, computerChoice);
  console.log(playerPoints);
  computerPlay();
  console.log("computer choice is: ", computerChoice);
  updateScoreBoard(playerPoints, computerPoints);
});
paperbtn[0].addEventListener("click", function onClick() {
  console.log("this is paper");
  userSelection = "paper";
  console.log(userSelection);
  playRound(userSelection, computerChoice);
  console.log(playerPoints);
  computerPlay();
  console.log("computer choice is: ", computerChoice);
  updateScoreBoard(playerPoints, computerPoints);
});
scissorbtn[0].addEventListener("click", function onClick() {
  console.log("this is scissor");
  userSelection = "scissor";
  console.log(userSelection);
  playRound(userSelection, computerChoice);
  console.log(playerPoints);
  computerPlay();
  console.log("computer choice is: ", computerChoice);
  updateScoreBoard(playerPoints, computerPoints);
});
