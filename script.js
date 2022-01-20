console.log("hello world");


function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

const rndmInt = randomIntFromInterval(1,3);
console.log(rndmInt);
let computerChoice
function computerPlay()
{if (rndmInt == 1)
    {
        computerChoice= "rock";
        console.log(computerChoice)
    }
else if (rndmInt == 2)
{
    computerChoice= "paper";
    console.log(computerChoice)
}
else
{
    computerChoice= "scissor";
    console.log(computerChoice)
}
return computerChoice
}

computerPlay();
let userSelection;
function userQuestion()
{

    let answer = prompt("please entet your choice \n1. rock \n2. paper \n3. scissor");
    if (answer == 1)
    {
        userSelection= "rock";
        console.log(userSelection)
    }
else if (answer == 2)
{
    userSelection= "paper";
    console.log(userSelection)
}
else
{
    userSelection= "scissor";
    console.log(userSelection)
}
return userSelection;
}
userQuestion();
console.log("hi im returning user selection",userSelection)

function playRound(user,computer)
{  
    user=userSelection;
    computer=computerChoice;
    if (user==computer)
    {console.log("its a tie")}
    else if (user=="paper" && computer=="rock")
    console.log("player wins");
    else if (user=="rock" && computer=="scissor")
    console.log("player wins");
    else if (user=="scissor" && computer=="rock")
    console.log("computer wins");
}
playRound();