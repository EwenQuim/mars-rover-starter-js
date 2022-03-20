const Direction = require('./../position-modules/direction');

class MapModule {
  constructor() {

  }

  generateMap(position) {
    let roverChar = ' ';
    switch (position.d) {
      case Direction.NORTH:
        roverChar = '^';
        break;
      case Direction.EST:
        roverChar = '>';
        break;
      case Direction.SOUTH:
        roverChar = 'v';
        break;
      case Direction.WEST:
        roverChar = '<';
        break;
    }

    const mapTemplate = '' +
      '   0 1 2 3 4 5 6 7 8 9\n' +
      ' +---------------------+\n' +
      '0|                     |\n' +
      '1|                     |\n' +
      '2|                     |\n' +
      '3|                     |\n' +
      '4|                     |\n' +
      '5|                     |\n' +
      '6|                     |\n' +
      '7|                     |\n' +
      '8|                     |\n' +
      '9|                     |\n' +
      ' +---------------------+\n';

    const mapBuilderArray = mapTemplate.split('');
    const index = (position.x + 1) * 2 +
      25 * (position.y + 2) - 1;
    mapBuilderArray[index] = roverChar;
    const map = mapBuilderArray.join('');

    return map;
  }
}

module.exports = MapModule;
