const Move = require('./move')
const TWO_SECONDS = 2000

class TurnRightMove extends Move {

  move() {
    this.positionModule.turnRight()
    return this.sleep.wait(TWO_SECONDS)
  }
}

module.exports = TurnRightMove
