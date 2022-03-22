const Move = require('./move')
const TWO_SECONDS = 2000

class BackwardMove extends Move {

  move() {
    this.positionModule.moveBackward()
    return this.sleep.wait(TWO_SECONDS)
  }
}

module.exports = BackwardMove
