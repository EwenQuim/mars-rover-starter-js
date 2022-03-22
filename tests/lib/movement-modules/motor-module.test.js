const { expect } = require('../../test-helper')

const ForwardMove = require('../../../lib/movement-modules/moves/forward-move')
const BackwardMove = require('../../../lib/movement-modules/moves/backward-move')
const MotorModule = require('../../../lib/movement-modules/motor-module')

describe('Unit | Class | MovementModules | Motor Module', () => {

  describe('#availableMoves', () => {

    it('allows ForwardMove and BackwardMove', () => {
      // Given
      const motorModule = new MotorModule()

      // When
      const availableMoves = motorModule.availableMoves

      // Then
      const expectedMoves = [
        { key: 'f', move: ForwardMove },
        { key: 'b', move: BackwardMove },
      ]
      expect(availableMoves).to.be.deep.equal(expectedMoves)
    })
  })
})
