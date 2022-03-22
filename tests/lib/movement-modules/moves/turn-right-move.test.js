const { expect, sinon } = require('../../../test-helper')

const TurnRightMove = require('../../../../lib/movement-modules/moves/turn-right-move')

describe('Unit | Class | MovementModules | Moves | TurnRightMove', () => {

  describe('#move', () => {

    let positionModule
    let sleep
    let turnRightMove

    beforeEach(() => {
      positionModule = { turnRight: sinon.stub() }
      sleep = { wait: sinon.stub().resolves() }

      turnRightMove = new TurnRightMove({ sleep, positionModule })
    })

    it('turns position right', async () => {
      // When
      await turnRightMove.move()

      // Then
      expect(positionModule.turnRight)
        .to.have.been.calledOnceWithExactly()
    })

    it('takes two seconds to move', async () => {
      // When
      await turnRightMove.move()

      // Then
      const TWO_SECONDS = 2000
      expect(sleep.wait)
        .to.have.been.calledOnceWithExactly(TWO_SECONDS)
    })
  })
})
