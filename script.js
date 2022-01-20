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
}

computerPlay();
