const Direction = require('./direction');

function positiveModulo10(number) {
  return ((number % 10) + 10) % 10;
}

class PositionModule {
  constructor() {
  }

  setInitialPosition(position) {
    this.currentPosition = position;
  }

  moveForward() {
    switch (this.currentPosition.d) {
      case Direction.NORTH:
        this.currentPosition.y = positiveModulo10(this.currentPosition.y - 1);
        break;
      case Direction.EST:
        this.currentPosition.x = positiveModulo10(this.currentPosition.x + 1);
        break;
      case Direction.SOUTH:
        this.currentPosition.y = positiveModulo10(this.currentPosition.y + 1);
        break;
      case Direction.WEST:
        this.currentPosition.x = positiveModulo10(this.currentPosition.x - 1);
        break;
    }
  }

  moveBackward() {
    switch (this.currentPosition.d) {
      case Direction.NORTH:
        this.currentPosition.y = positiveModulo10(this.currentPosition.y + 1);
        break;
      case Direction.EST:
        this.currentPosition.x = positiveModulo10(this.currentPosition.x - 1);
        break;
      case Direction.SOUTH:
        this.currentPosition.y = positiveModulo10(this.currentPosition.y - 1);
        break;
      case Direction.WEST:
        this.currentPosition.x = positiveModulo10(this.currentPosition.x + 1);
        break;
    }
  }

  turnRight() {
    switch (this.currentPosition.d) {
      case Direction.NORTH:
        this.currentPosition.d = Direction.EST;
        break;
      case Direction.EST:
        this.currentPosition.d = Direction.SOUTH;
        break;
      case Direction.SOUTH:
        this.currentPosition.d = Direction.WEST;
        break;
      case Direction.WEST:
        this.currentPosition.d = Direction.NORTH;
        break;
    }
  }

  turnLeft() {
    switch (this.currentPosition.d) {
      case Direction.NORTH:
        this.currentPosition.d = Direction.WEST;
        break;
      case Direction.EST:
        this.currentPosition.d = Direction.NORTH;
        break;
      case Direction.SOUTH:
        this.currentPosition.d = Direction.EST;
        break;
      case Direction.WEST:
        this.currentPosition.d = Direction.SOUTH;
        break;
    }
  }
}

module.exports = PositionModule;
