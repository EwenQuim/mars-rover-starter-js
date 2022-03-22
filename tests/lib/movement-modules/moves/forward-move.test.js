const { expect, sinon } = require('../../../test-helper')

const ForwardMove = require('../../../../lib/movement-modules/moves/forward-move')

describe('Unit | Class | MovementModules | Moves | ForwardMove', () => {

  describe('#move', () => {

    let positionModule
    let sleep
    let forwardMove

    beforeEach(() => {
      positionModule = { moveForward: sinon.stub() }
      sleep = { wait: sinon.stub().resolves() }

      forwardMove = new ForwardMove({ sleep, positionModule })
    })

    it('move position forward', async () => {
      // When
      await forwardMove.move()

      // Then
      expect(positionModule.moveForward)
        .to.have.been.calledOnceWithExactly()
    })

    it('takes two seconds to move', async () => {
      // When
      await forwardMove.move()

      // Then
      const TWO_SECONDS = 2000
      expect(sleep.wait)
        .to.have.been.calledOnceWithExactly(TWO_SECONDS)
    })
  })
})
