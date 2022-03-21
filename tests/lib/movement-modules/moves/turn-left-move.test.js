const { expect, sinon } = require('../../../test-helper')

const TurnLeftMove = require('../../../../lib/movement-modules/moves/turn-left-move')

describe('Unit | Class | MovementModules | Moves | TurnLeftMove', () => {

  describe('#move', () => {

    let positionModule
    let sleep
    let turnLeftMove

    beforeEach(() => {
      positionModule = { turnLeft: sinon.stub() }
      sleep = { wait: sinon.stub().resolves() }

      turnLeftMove = new TurnLeftMove({ sleep, positionModule })
    })

    it('turns position left', async () => {
      // When
      await turnLeftMove.move()

      // Then
      expect(positionModule.turnLeft)
        .to.have.been.calledOnceWithExactly()
    })

    it('takes two seconds to move', async () => {
      // When
      await turnLeftMove.move()

      // Then
      const TWO_SECONDS = 2000
      expect(sleep.wait)
        .to.have.been.calledOnceWithExactly(TWO_SECONDS)
    })
  })
})
