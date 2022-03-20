const NORTH = 'NORTH';
const EST = 'EST';
const SOUTH = 'SOUTH';
const WEST = 'WEST';


class Direction {
  static get NORTH() {
    return NORTH;
  }

  static get EST() {
    return EST;
  }

  static get SOUTH() {
    return SOUTH;
  }

  static get WEST() {
    return WEST;
  }

  static from(char) {
    switch (char) {
      case 'N':
        return Direction.NORTH;
      case 'E':
        return Direction.EST;
      case 'S':
        return Direction.SOUTH;
      case 'W':
        return Direction.WEST;
    }
  }
}

module.exports = Direction;

