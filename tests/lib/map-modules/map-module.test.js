const { expect, sinon } = require('../../test-helper');

const Direction = require('../../../lib/position-modules/direction');
const Position = require('../../../lib/position-modules/position');
const MapModule = require('../../../lib/map-modules/map-module');

describe('Unit | Class | MapModules | Map Module', () => {

  beforeEach(() => {
  });

  describe('#generateMap', () => {

    it('should generate the map with the rover at position 1, 1 East', () => {
      // Given
      const expectedMap =
        '   0 1 2 3 4 5 6 7 8 9\n' +
        ' +---------------------+\n' +
        '0|                     |\n' +
        '1|   >                 |\n' +
        '2|                     |\n' +
        '3|                     |\n' +
        '4|                     |\n' +
        '5|                     |\n' +
        '6|                     |\n' +
        '7|                     |\n' +
        '8|                     |\n' +
        '9|                     |\n' +
        ' +---------------------+\n';
      const position = new Position({ x: 1, y: 1, d: Direction.EST });
      const mapModule = new MapModule();

      // When
      const map = mapModule.generateMap(position);

      // Then
      expect(map).to.equal(expectedMap);
    });

    it('should generate the map with the rover at position 2, 4 North', () => {
      // Given
      const expectedMap =
        '   0 1 2 3 4 5 6 7 8 9\n' +
        ' +---------------------+\n' +
        '0|                     |\n' +
        '1|                     |\n' +
        '2|                     |\n' +
        '3|                     |\n' +
        '4|     ^               |\n' +
        '5|                     |\n' +
        '6|                     |\n' +
        '7|                     |\n' +
        '8|                     |\n' +
        '9|                     |\n' +
        ' +---------------------+\n';
      const position = new Position({ x: 2, y: 4, d: Direction.NORTH });
      const mapModule = new MapModule();

      // When
      const map = mapModule.generateMap(position);

      // Then
      expect(map).to.equal(expectedMap);
    });

    it('should generate the map with the rover at position 7, 0 West', () => {
      // Given
      const expectedMap =
        '   0 1 2 3 4 5 6 7 8 9\n' +
        ' +---------------------+\n' +
        '0|               <     |\n' +
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
      const position = new Position({ x: 7, y: 0, d: Direction.WEST });
      const mapModule = new MapModule();

      // When
      const map = mapModule.generateMap(position);

      // Then
      expect(map).to.equal(expectedMap);
    });

    it('should generate the map with the rover at position 9, 9 South', () => {
      // Given
      const expectedMap =
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
        '9|                   v |\n' +
        ' +---------------------+\n';
      const position = new Position({ x: 9, y: 9, d: Direction.SOUTH });
      const mapModule = new MapModule();

      // When
      const map = mapModule.generateMap(position);

      // Then
      expect(map).to.equal(expectedMap);
    });
  });
});
