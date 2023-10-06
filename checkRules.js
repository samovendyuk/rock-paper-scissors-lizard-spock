class CheckRules {
  constructor(playerChoice, computerMove, param) {
    this.playerChoice = playerChoice;
    this.computerMove = computerMove;
    this.param = param;
  }

  playRound(playerChoice, computerMove) {
    let player = playerChoice;
    let computer = computerMove;

    if (player === computer) {
      return "Draw Match";
    } else if (player === "rock" && computer === "paper") {
      return "You Lose ... 'Paper beats Rock'";
    } else if (player === "rock" && computer === "scissors") {
      return "You Win!!! Rock breaks the scissor";
    } else if (player === "rock" && computer === "spock") {
      return "You lose ... 'Spock vaporizes rock'";
    } else if (player === "rock" && computer === "lizard") {
      return "You win!!! Rock crushes lizard";
    } else if (player === "paper" && computer === "rock") {
      return "You win!! Paper covers the rock";
    } else if (player === "paper" && computer === "scissors") {
      return "Oh no you lose.. Scissor cuts the paper";
    } else if (player === "paper" && computer === "lizard") {
      return "You lose ... 'Lizard eats paper'";
    } else if (player === "paper" && computer === "spock") {
      return "You win!!! Paper disproves Spock";
    } else if (player === "scissors" && computer === "rock") {
      return "You lose ... Rock breaks the scissor";
    } else if (player === "scissors" && computer === "paper") {
      return "You win!!! Scissor cut the paper";
    } else if (player === "scissors" && computer === "lizard") {
      return "You win!!! Scissors decapitates lizard";
    } else if (player === "scissors" && computer === "spock") {
      return "You lose ... 'Spock smashes scissors' ";
    } else if (player === "lizard" && computer === "rock") {
      return "You lose ... 'Rock crushes lizard'";
    } else if (player === "lizard" && computer === "scissors") {
      return "You lose ... 'Scissors decapitates lizard'";
    } else if (player === "lizard" && computer === "paper") {
      return "You win!!! Lizard eats paper";
    } else if (player === "lizard" && computer === "spock") {
      return "You win!!! Lizard poisons Spock";
    } else if (player === "spock" && computer === "rock") {
      return "You win!!! Spock vaporizes rock";
    } else if (player === "spock" && computer === "paper") {
      return "You lose ... 'Paper disproves Spock'";
    } else if (player === "spock" && computer === "scissors") {
      return "You win!!! Spock smashes scissors";
    } else if (player === "spock" && computer === "lizard") {
      return "You lose ... 'Lizard poisons Spock'";
    } else {
      return (
        "You entered wrong choice" +
        "\n" +
        "You only should entry paramaters which presented above"
      );
    }
  }
}

export default CheckRules;
