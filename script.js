
// Array of options for computer to pick from
var options = ["R", "P", "S"]

var playRPS = function () {
    // Ask player for choice
    var playerChoice = window.prompt("Enter R, P or S:")
    // If player chooses Cancel, end the game
    if (!playerChoice) {
        return;
    }
}

    // // Convert to uppercase to make comparisons easier
    // playerChoice = playerChoice.toUppperCase()
    // // Ask about this: Doesn't this just capitalize all of the words in the options? Why?

    // Here is the random function to get a random array of options
    var index = Math.floor(Math.random() * options.length);
    var computerChoice = options[index]
    // Ask about the brackets on here: why not parenthesis? Is it just an array multiplied?

    window.alert("The Computer chose " + computerChoice);

    // if choices are the same, it's a tie
    if (playerChoice === computerChoice) {
        ties++;
        window.alert("It's a tie!")
    }




