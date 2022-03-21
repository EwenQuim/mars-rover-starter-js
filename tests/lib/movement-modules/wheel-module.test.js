const { expect } = require('../../test-helper')

const TurnLeftMove = require('../../../lib/movement-modules/moves/turn-left-move')
const TurnRightMove = require('../../../lib/movement-modules/moves/turn-right-move')
const WheelModule = require('../../../lib/movement-modules/wheel-module')

describe('Unit | Class | MovementModules | WheelModule', () => {

  describe('#availableMoves', () => {

    it('allows LeftMove and TurnRightMove', () => {
      // Given
      const wheelModule = new WheelModule()

      // When
      const availableMoves = wheelModule.availableMoves

      // Then
      const expectedMoves = [
        { key: 'l', move: TurnLeftMove },
        { key: 'r', move: TurnRightMove },
      ]
      expect(availableMoves).to.be.deep.equal(expectedMoves)
    })
  })
})
