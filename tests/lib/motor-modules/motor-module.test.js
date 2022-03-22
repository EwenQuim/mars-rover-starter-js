const { expect, sinon } = require('../../test-helper');

const MotorModule = require('../../../lib/motor-modules/motor-module');

describe('Unit | Class | MapModules | Map Module', () => {

  beforeEach(() => {
  });

  describe('#generateMap', () => {

    it('should create a new rover (not fast)', () => {
      // When
      const motor = new MotorModule();

      // Then
      expect(motor.computeSleep('ff')).to.equal(1000);
    });

    it('should create a new fast rover', () => {
      // Given
      const motor = new MotorModule({ type: 'fast-rover' });

      // Then
      expect(motor.computeSleep('ff')).to.equal(500);
    });

  });
});
