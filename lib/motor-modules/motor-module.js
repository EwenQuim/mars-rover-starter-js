class MotorModule {
  constructor(dependencies) {
    this.type = dependencies?.type ?? 'normal-rover';
  }

  sleep(command) {
    return new Promise((resolve) => {
      setTimeout(resolve, this.computeSleep(command));
    });
  }

  computeSleep(command) {
    if (command === 'ff' && this.type === 'fast-rover') {
      return 500;
    } else {
      return 1000;
    }
  }

}

module.exports = MotorModule;
