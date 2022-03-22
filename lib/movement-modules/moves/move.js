const UnknownMoveError = require('./unknown-move-error')

class Move {
  constructor({ positionModule, sleep }) {
    this.positionModule = positionModule
    this.sleep = sleep
  }

  move() {
    return Promise.reject(new UnknownMoveError())
  }
}

module.exports = Move
