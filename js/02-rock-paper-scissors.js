// User makes a choice
let userChoice = prompt("Choose rock, paper, or scissors:").toLowerCase();

if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
  alert("Invalid choice! Please refresh and try again.");
} else {
  // Computer makes a choice
  let randomNum = Math.floor(Math.random() * 3);

  let computerChoice;
  if (randomNum === 0) {
    computerChoice = "rock";
  } else if (randomNum === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  // conditional that determines who wins
  if (userChoice === computerChoice) {
    alert(`You chose ${userChoice}. The computer chose ${computerChoice}. It's a tie!`);
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    alert(`You chose ${userChoice}. The computer chose ${computerChoice}. You win!`);
  } else {
    alert(`You chose ${userChoice}. The computer chose ${computerChoice}. Computer wins!`);
  }
}