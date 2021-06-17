
function playRPS() {

    window.prompt("Enter R, P, S");
    let playerChoice = prompt(`Enter R, P, or S`);
    let options= ["R", "P", "S"]
}

// function declareHello() { 
//     console.log("Hello, I am a function declaration.");
//     console.log("-----------------------------------");
//     // Return stops the execution of a function
//     return;
//   }


// let computerChoice = Math.floor(Math.random() * options.length);
let computerChoice = options[Math.floor(Math.random()*options.length)];
// prompt[Math.floor(Math.random() * prompt.length)]

if(
    (computerChoice === playerChoice)
    )
{
    alert("Tie, play again?");
}    


if (
    ((playerChoice === "P" && computerChoice === "R") ||
    (playerChoice === "S" && computerChoice === "P") ||
    (playerChoice === "R" && computerChoice === "S"))
    )
    
{
alert("You win!");
}

    
if (
    ((computerChoice === "S" && playerChoice === "P") ||
    (computerChoice === "R" && playerChoice === "S") ||
    (computerChoice === "P" && playerChoice === "S"))
    )
{
alert("You lose!")
}
// window.alert("The computer chose [random]");

// window.alert("You ___! [either win, lose or tie against computer]");

// window.alert("Stats: Wins: Losses: "); 

if (window.confirm("Play again?")) {
     open ()}
else {
    exit();
}