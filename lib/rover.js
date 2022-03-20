MOVE_TIME = process.env.NODE_ENV === 'test' ? 0 : 1000;

function positiveModulo10(number) {
  return ((number % 10) + 10) % 10;
}

function moving() {
  return new Promise((resolve) => {
    setTimeout(resolve, MOVE_TIME);
  });
}

class Rover {

  constructor(initialPosition, roverParts, dependencies) {
    this.position = initialPosition;
    this.mapModule = roverParts.mapModule;
    this.positionModule = roverParts.positionModule;
    this.console = dependencies.console;

    this.console.log('Initial Position');
    this.positionModule.setInitialPosition(initialPosition);
    this.displayPosition();
  }

  async run(commands) {

    for (let index = 0; index < commands.length; index++) {
      const command = commands[index];
      await this.execute(command);
    }
    return Promise.resolve();
  }

  async execute(command) {
    this.console.log('Move: ' + command);

    switch (command) {
      case 'f':
        this.positionModule.moveForward();
        break;
      case 'b':
        this.positionModule.moveBackward();
        break;
      case 'r':
        this.positionModule.turnRight();
        break;
      case 'l':
        this.positionModule.turnLeft();
        break;
    }

    this.displayPosition();

    await moving();
  }

  displayPosition() {

    const map = this.mapModule.generateMap(this.positionModule.currentPosition);

    this.console.log(map);
  }
}

module.exports = Rover;
