const MovementModule = require('./movement-module')
const TurnLeftMove = require('./moves/turn-left-move')
const TurnRightMove = require('./moves/turn-right-move')

class WheelModule extends MovementModule {
  get availableMoves() {
    return [
      { key: 'l', move: TurnLeftMove },
      { key: 'r', move: TurnRightMove },
    ]
  }
}

module.exports = WheelModule
