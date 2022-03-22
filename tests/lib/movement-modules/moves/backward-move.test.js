const { expect, sinon } = require('../../../test-helper')

const BackwardMove = require('../../../../lib/movement-modules/moves/backward-move')

describe('Unit | Class | MovementModules | Moves | BackwardMove', () => {

  describe('#move', () => {

    let positionModule
    let sleep
    let backwardMove

    beforeEach(() => {
      positionModule = { moveBackward: sinon.stub() }
      sleep = { wait: sinon.stub().resolves() }

      backwardMove = new BackwardMove({ sleep, positionModule })
    })

    it('move position backward', async () => {
      // When
      await backwardMove.move()

      // Then
      expect(positionModule.moveBackward)
        .to.have.been.calledOnceWithExactly()
    })

    it('takes two seconds to move', async () => {
      // When
      await backwardMove.move()

      // Then
      const TWO_SECONDS = 2000
      expect(sleep.wait)
        .to.have.been.calledOnceWithExactly(TWO_SECONDS)
    })
  })
})
