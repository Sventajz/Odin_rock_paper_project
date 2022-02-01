console.log("hello world");
let userSelection;
let computerChoice;
let playerPoints=0;
let computerPoints=0;

//random int for computer choice
function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

//function that assings the computer his choice for rock paper scissor
function computerPlay()
    {if (randomIntFromInterval(1,3) == 1)
    {
        computerChoice= "rock";
    }
    else if (randomIntFromInterval(1,3) == 2)
    {
        computerChoice= "paper";
    }
    else
    {
        computerChoice= "scissor";
    }
return computerChoice
}


// function that asks the user for his input for rock paper scissor
function userQuestion()
{

    let answer = prompt("please entee your choice \n1. rock \n2. paper \n3. scissor");
    let trueAnswer = answer.toLowerCase();
    if (trueAnswer == "rock")
        {
            userSelection= "rock";
            console.log("user choice is: ",userSelection)
        }
    else if (trueAnswer == "paper")
        {
            userSelection= "paper";
            console.log("user choice is: ",userSelection)
        }
    else
        {
            userSelection= "scissor";
            console.log("user choice is: ",userSelection)
        }
return userSelection;
}

// function that compares user and computer selections
function playRound(user,computer)
{  
    user=userSelection;
    computer=computerChoice;
    let roundWinner;
    
    if (user==computer)
        roundWinner = "its a tie";
    else if (user=="paper" && computer=="rock")
        {
        roundWinner = "player wins";
        playerPoints= playerPoints +1;
        }
    else if (user == "scissor" && computer == "paper")
        {
        roundWinner = "player wins";
        playerPoints= playerPoints +1;
        }
    else if (user=="rock" && computer=="scissor")
        {
        roundWinner = "player wins";
        playerPoints= playerPoints +1;
        }
    else if (computer=="rock"  && user=="scissor")
        {
        roundWinner = "computer wins";
        computerPoints= computerPoints +1;
        }
    else if (computer == "paper" && user == "rock")
        {
        roundWinner = "computer wins";
        computerPoints= computerPoints +1;
        }
    else if (computer == "scissor" && user == "paper")
        {
        roundWinner = "computer wins";
        computerPoints= computerPoints +1;
        }
return roundWinner,playerPoints,computerPoints;

}
//function that plays 5 rounds of rock paper scissor and returns their score
function game()
{   
    for (let i = 0; i < 5; i++){
        
        computerPlay();
        userQuestion();
        playRound(userSelection,computerChoice);
        console.log("computers choice was: ",computerChoice);
        console.log("playes has",playerPoints,"points");
        console.log("computer has",computerPoints,"points");
        randomIntFromInterval(1,3);
        if (playerPoints === 3 || computerPoints === 3)
        {
            console.log("game over");
            break;
        }
    }
}


game();

