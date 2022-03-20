const { expect, sinon } = require('../../test-helper');

const Direction = require('../../../lib/position-modules/direction');
const Position = require('../../../lib/position-modules/position');
const PositionModule = require('../../../lib/position-modules/position-module');

describe('Unit | Class | PositionModules | Position Module', () => {

  describe('#moveForward', () => {

    it('should update the rover position accordingly when direction is North', () => {
      // Given
      const initialPosition = new Position({ x: 1, y: 1, d: Direction.NORTH });
      const expectedPosition = new Position({ x: 1, y: 0, d: Direction.NORTH });
      const positionModule = new PositionModule();
      positionModule.setInitialPosition(initialPosition);

      // When
      positionModule.moveForward();

      // Then
      const position = positionModule.currentPosition;
      expect(position).to.be.an.instanceOf(Position);
      expect(position).to.deep.equal(expectedPosition);
    });

    it('should update the rover position accordingly when direction is Est', () => {
      // Given
      const initialPosition = new Position({ x: 1, y: 1, d: Direction.EST });
      const expectedPosition = new Position({ x: 2, y: 1, d: Direction.EST });
      const positionModule = new PositionModule();
      positionModule.setInitialPosition(initialPosition);

      // When
      positionModule.moveForward();

      // Then
      const position = positionModule.currentPosition;
      expect(position).to.be.an.instanceOf(Position);
      expect(position).to.deep.equal(expectedPosition);
    });

    it('should update the rover position accordingly when direction is South', () => {
      // Given
      const initialPosition = new Position({ x: 1, y: 1, d: Direction.SOUTH });
      const expectedPosition = new Position({ x: 1, y: 2, d: Direction.SOUTH });
      const positionModule = new PositionModule();
      positionModule.setInitialPosition(initialPosition);

      // When
      positionModule.moveForward();

      // Then
      const position = positionModule.currentPosition;
      expect(position).to.be.an.instanceOf(Position);
      expect(position).to.deep.equal(expectedPosition);
    });

    it('should update the rover position accordingly when direction is West', () => {
      // Given
      const initialPosition = new Position({ x: 1, y: 1, d: Direction.WEST });
      const expectedPosition = new Position({ x: 0, y: 1, d: Direction.WEST });
      const positionModule = new PositionModule();
      positionModule.setInitialPosition(initialPosition);

      // When
      positionModule.moveForward();

      // Then
      const position = positionModule.currentPosition;
      expect(position).to.be.an.instanceOf(Position);
      expect(position).to.deep.equal(expectedPosition);
    });
  });

  describe('#moveBackward', () => {

    it('should update the rover position accordingly when direction is North', () => {
      // Given
      const initialPosition = new Position({ x: 1, y: 1, d: Direction.NORTH });
      const expectedPosition = new Position({ x: 1, y: 2, d: Direction.NORTH });
      const positionModule = new PositionModule();
      positionModule.setInitialPosition(initialPosition);

      // When
      positionModule.moveBackward();

      // Then
      const position = positionModule.currentPosition;
      expect(position).to.be.an.instanceOf(Position);
      expect(position).to.deep.equal(expectedPosition);
    });

    it('should update the rover position accordingly when direction is Est', () => {
      // Given
      const initialPosition = new Position({ x: 1, y: 1, d: Direction.EST });
      const expectedPosition = new Position({ x: 0, y: 1, d: Direction.EST });
      const positionModule = new PositionModule();
      positionModule.setInitialPosition(initialPosition);

      // When
      positionModule.moveBackward();

      // Then
      const position = positionModule.currentPosition;
      expect(position).to.be.an.instanceOf(Position);
      expect(position).to.deep.equal(expectedPosition);
    });

    it('should update the rover position accordingly when direction is South', () => {
      // Given
      const initialPosition = new Position({ x: 1, y: 1, d: Direction.SOUTH });
      const expectedPosition = new Position({ x: 1, y: 0, d: Direction.SOUTH });
      const positionModule = new PositionModule();
      positionModule.setInitialPosition(initialPosition);

      // When
      positionModule.moveBackward();

      // Then
      const position = positionModule.currentPosition;
      expect(position).to.be.an.instanceOf(Position);
      expect(position).to.deep.equal(expectedPosition);
    });

    it('should update the rover position accordingly when direction is West', () => {
      // Given
      const initialPosition = new Position({ x: 1, y: 1, d: Direction.WEST });
      const expectedPosition = new Position({ x: 2, y: 1, d: Direction.WEST });
      const positionModule = new PositionModule();
      positionModule.setInitialPosition(initialPosition);

      // When
      positionModule.moveBackward();

      // Then
      const position = positionModule.currentPosition;
      expect(position).to.be.an.instanceOf(Position);
      expect(position).to.deep.equal(expectedPosition);
    });
  });

  describe('#turnRight', () => {

    it('should update the rover position accordingly when direction is North', () => {
      // Given
      const initialPosition = new Position({ x: 1, y: 1, d: Direction.NORTH });
      const expectedPosition = new Position({ x: 1, y: 1, d: Direction.EST });
      const positionModule = new PositionModule();
      positionModule.setInitialPosition(initialPosition);

      // When
      positionModule.turnRight();

      // Then
      const position = positionModule.currentPosition;
      expect(position).to.be.an.instanceOf(Position);
      expect(position).to.deep.equal(expectedPosition);
    });

    it('should update the rover position accordingly when direction is Est', () => {
      // Given
      const initialPosition = new Position({ x: 1, y: 1, d: Direction.EST });
      const expectedPosition = new Position({ x: 1, y: 1, d: Direction.SOUTH });
      const positionModule = new PositionModule();
      positionModule.setInitialPosition(initialPosition);

      // When
      positionModule.turnRight();

      // Then
      const position = positionModule.currentPosition;
      expect(position).to.be.an.instanceOf(Position);
      expect(position).to.deep.equal(expectedPosition);
    });

    it('should update the rover position accordingly when direction is South', () => {
      // Given
      const initialPosition = new Position({ x: 1, y: 1, d: Direction.SOUTH });
      const expectedPosition = new Position({ x: 1, y: 1, d: Direction.WEST });
      const positionModule = new PositionModule();
      positionModule.setInitialPosition(initialPosition);

      // When
      positionModule.turnRight();

      // Then
      const position = positionModule.currentPosition;
      expect(position).to.be.an.instanceOf(Position);
      expect(position).to.deep.equal(expectedPosition);
    });

    it('should update the rover position accordingly when direction is West', () => {
      // Given
      const initialPosition = new Position({ x: 1, y: 1, d: Direction.WEST });
      const expectedPosition = new Position({ x: 1, y: 1, d: Direction.NORTH });
      const positionModule = new PositionModule();
      positionModule.setInitialPosition(initialPosition);

      // When
      positionModule.turnRight();

      // Then
      const position = positionModule.currentPosition;
      expect(position).to.be.an.instanceOf(Position);
      expect(position).to.deep.equal(expectedPosition);
    });
  });

  describe('#turnLeft', () => {

    it('should update the rover position accordingly when direction is North', () => {
      // Given
      const initialPosition = new Position({ x: 1, y: 1, d: Direction.NORTH });
      const expectedPosition = new Position({ x: 1, y: 1, d: Direction.WEST });
      const positionModule = new PositionModule();
      positionModule.setInitialPosition(initialPosition);

      // When
      positionModule.turnLeft();

      // Then
      const position = positionModule.currentPosition;
      expect(position).to.be.an.instanceOf(Position);
      expect(position).to.deep.equal(expectedPosition);
    });

    it('should update the rover position accordingly when direction is Est', () => {
      // Given
      const initialPosition = new Position({ x: 1, y: 1, d: Direction.EST });
      const expectedPosition = new Position({ x: 1, y: 1, d: Direction.NORTH });
      const positionModule = new PositionModule();
      positionModule.setInitialPosition(initialPosition);

      // When
      positionModule.turnLeft();

      // Then
      const position = positionModule.currentPosition;
      expect(position).to.be.an.instanceOf(Position);
      expect(position).to.deep.equal(expectedPosition);
    });

    it('should update the rover position accordingly when direction is South', () => {
      // Given
      const initialPosition = new Position({ x: 1, y: 1, d: Direction.SOUTH });
      const expectedPosition = new Position({ x: 1, y: 1, d: Direction.EST });
      const positionModule = new PositionModule();
      positionModule.setInitialPosition(initialPosition);

      // When
      positionModule.turnLeft();

      // Then
      const position = positionModule.currentPosition;
      expect(position).to.be.an.instanceOf(Position);
      expect(position).to.deep.equal(expectedPosition);
    });

    it('should update the rover position accordingly when direction is West', () => {
      // Given
      const initialPosition = new Position({ x: 1, y: 1, d: Direction.WEST });
      const expectedPosition = new Position({ x: 1, y: 1, d: Direction.SOUTH });
      const positionModule = new PositionModule();
      positionModule.setInitialPosition(initialPosition);

      // When
      positionModule.turnLeft();

      // Then
      const position = positionModule.currentPosition;
      expect(position).to.be.an.instanceOf(Position);
      expect(position).to.deep.equal(expectedPosition);
    });
  });
});
