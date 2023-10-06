class Computer {
  constructor(param) {
    this.param = param;
  }
  getComputerChoice(param) {
    const n = Math.floor(Math.random() * param.length);
    return param[n];
  }
}

export default Computer;
