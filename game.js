import Computer from "./сomputerMove.js";
import promptSync from "prompt-sync";
import CheckRules from "./checkRules.js";
import GenerateHmac from "./createHmacComputerAndPlayer.js";
import PlayerMove from "./playerMove.js";

const prompt = promptSync();
const param = process.argv.slice(2);

const createComputer = new Computer();
const rules = new CheckRules(param);
const generatorHmac = new GenerateHmac();
const playerEntry = new PlayerMove();

let temp = "";
let str = "";

for (let i = 0; i < param.length; i++) {
  temp = `${i + 1} - ${param[i]} \n`;
  str += temp;
  temp = 0;
}

let availableMoves =
  "Available moves : " + "\n" + str + "0 - exit" + "\n" + "? - help";
const computerMove = createComputer.getComputerChoice(param);
const hmac = generatorHmac.getHmac(param[computerMove]);

game(param);

function game(param) {
  const uniqueArgs = new Set(param);
  if (param.length < 3 || param.length % 2 === 0) {
    console.error(
      "Error: Invalid number of arguments. Please provide an odd number of arguments greater than or equal to 3."
    );
    console.error("Example: node script.js Rock Paper Scissors");
    return;
  }
  if (uniqueArgs.size !== param.length) {
    console.error(
      "Error: Arguments must be unique. Please provide a list of unique arguments."
    );
    console.error("Example: node script.js Rock Paper Scissors");
    return;
  }

  while (true) {
    console.log("Hmac : " + hmac);
    console.log(availableMoves);
    const playerChoice = prompt("Enter your move: ");
    const playerChoose = playerEntry.playerMove(playerChoice);

    if (playerChoose === "") {
      console.log("Game over");
      return;
    }

    const playRound = rules.playRound(computerMove, +playerChoice - 1);
    const hmacKey = generatorHmac.getKey().toString("hex");

    console.log("Your move : " + playerChoose);
    console.log("Computer move: " + param[computerMove]);
    console.log(playRound);
    console.log("HMAC key : " + hmacKey);
  }
}
