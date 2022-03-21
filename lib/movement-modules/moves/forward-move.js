const Move = require('./move')
const TWO_SECONDS = 2000

class ForwardMove extends Move {

  move() {
    this.positionModule.moveForward()
    return this.sleep.wait(TWO_SECONDS)
  }
}

module.exports = ForwardMove
