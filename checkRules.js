class CheckRules {
  constructor(param) {
    this.param = param;
  }

  playRound(computer, player) {
    if (computer == player) {
      return "Draw";
    }

    if (
      (player > computer && player - computer <= this.param.length / 2) ||
      (player < computer && computer - player > this.param.length / 2)
    ) {
      return "You win";
    }

    return "You lose...";
  }
}

export default CheckRules;
