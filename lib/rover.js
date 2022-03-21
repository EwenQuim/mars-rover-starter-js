MOVE_TIME = 2000

function positiveModulo10(number) {
  return ((number % 10) + 10) % 10
}

function moving(sleep) {
  return sleep.wait(MOVE_TIME)
}

class Rover {

  constructor(initialPosition, roverParts, dependencies) {
    this.position = initialPosition
    this.mapModule = roverParts.mapModule
    this.positionModule = roverParts.positionModule
    this.movementModules = [ roverParts.motorModule, roverParts.wheelModule ]
    this.console = dependencies.console
    this.sleep = dependencies.sleep

    this.console.log('Initial Position')
    this.positionModule.setInitialPosition(initialPosition)
    this.displayPosition()
  }

  async run(commands) {

    for (const command of commands) {
      await this.execute(command)
    }

    return Promise.resolve()
  }

  async execute(command) {
    const move = this.getMoveForCommand(command)
    await move.move()

    this.console.log('Move: ' + command)
    this.displayPosition()
  }

  getMoveForCommand(command) {
    const FoundMove = this.movementModules
      .flatMap(module => module.availableMoves)
      .filter(({ key }) => key === command)
      .map(({ move }) => move)
      .pop()

    return new FoundMove({
      sleep: this.sleep,
      positionModule: this.positionModule,
    })
  }

  displayPosition() {

    const map = this.mapModule.generateMap(this.positionModule.currentPosition)

    this.console.log(map)
  }
}

module.exports = Rover
