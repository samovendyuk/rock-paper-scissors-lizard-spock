import Table from "./helpTable.js";
import PromptSync from "prompt-sync";

class PlayerMove {
  constructor(playerChoice) {
    this.playerChoice = playerChoice;
  }

  playerMove(playerChoice) {
    const data = [
      ["↓User  Player →", "Rock", "Paper", "Scissors", "Lizard", "Spock"],
      ["Rock", "Draw", "Lose", "Win", "Win", "Lose"],
      ["Paper", "Win", "Draw", "Lose", "Lose", "Win"],
      ["Scissors", "Lose", "Win", "Draw", "Win", "Lose"],
      ["Lizard", "Lose", "Win", "Lose", "Draw", "Win"],
      ["Spock", "Win", "Lose", "Win", "Lose", "Draw"],
    ];
    const helpTable = new Table();
    const prompt = PromptSync();

    switch (playerChoice) {
      case "1":
        playerChoice = "rock";
        return playerChoice;
      case "2":
        playerChoice = "paper";
        return playerChoice;
      case "3":
        playerChoice = "scissors";
        return playerChoice;
      case "4":
        playerChoice = "lizard";
        return playerChoice;
      case "5":
        playerChoice = "spock";
        return playerChoice;
      case "0":
        playerChoice = "";
        return playerChoice;
      case "?":
        playerChoice = helpTable.getHelpTable(data);
        console.log("\n" + playerChoice);
        playerChoice = prompt("Enter your move again : ");
        return this.playerMove(playerChoice);
      default:
        console.log(
          "You entered wrong choice" +
            "\n" +
            "You only should entry paramaters which presented above"
        );
        playerChoice = prompt("Enter your move again : ");
        return this.playerMove(playerChoice);
    }
  }
}

export default PlayerMove;
