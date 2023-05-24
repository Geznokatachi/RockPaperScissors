//This is the array with the 3 options
const options = ["rock", "paper", "scissors"];

//this function returns a random choice of 0,1,2 from the array
//it then rounds it off uses the math.floor method and returns it.
function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

//here gives the parameters for winning.
function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

//this adds to above by telling returning more info about who won
function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  if (result == "Tie") {
    return "It's a Tie!";
  } else if (result == "Player") {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

//this is a while loop  until the player inserts 1 of the 3 choices
//the input info is then changed to lower case so it matches the array
function getPlayerChoice() {
  let validatedInput = false;
  while (validatedInput == false) {
    const choice = prompt("Rock Paper Scissors");
    if (choice == null) {
      continue;
    }
    const choiceInLower = choice.toLowerCase();
    if (options.includes(choiceInLower)) {
      validatedInput = true;
      return choiceInLower;
    }
  }
}

//here is where the score is.
//uses a loop taking from the above function
function game() {
  let scorePlayer = 0;
  let scoreComputer = 0;
  console.log("Welcome!");
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log("---------");
    if (checkWinner(playerSelection, computerSelection) == "Player") {
      scorePlayer++;
    } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
      scoreComputer++;
    }
  }
  console.log("Game Over");
  if (scorePlayer > scoreComputer) {
    console.log("Player was the winner");
  } else if (scorePlayer < scoreComputer) {
    console.log("Computer was the winner");
  } else {
    console.log("We have a tie!");
  }
}

//this calls the function above
game();
