const Move = require('./move')
const TWO_SECONDS = 2000

class TurnLeftMove extends Move {

  move() {
    this.positionModule.turnLeft()
    return this.sleep.wait(TWO_SECONDS)
  }
}

module.exports = TurnLeftMove
