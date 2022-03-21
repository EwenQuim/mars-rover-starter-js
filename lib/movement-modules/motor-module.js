const MovementModule = require('./movement-module')
const ForwardMove = require('./moves/forward-move')
const BackwardMove = require('./moves/backward-move')

class MotorModule extends MovementModule {
  get availableMoves() {
    return [
      { key: 'f', move: ForwardMove },
      { key: 'b', move: BackwardMove },
    ]
  }
}

module.exports = MotorModule
