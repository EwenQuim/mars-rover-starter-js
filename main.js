#!/usr/bin/env node
process.env.NODE_ENV === 'production';
const Rover = require('./lib/rover');

const Position = require('./lib/position-modules/position');
const Direction = require('./lib/position-modules/direction');
const PositionModule = require('./lib/position-modules/position-module');
const MapModule = require('./lib/map-modules/map-module');

const argv = require('yargs')
  .group(['positionX', 'positionY', 'direction'], 'Rover initialization:')
  .group(['commands'], 'Rover commands:')
  .group(['map-size'], 'Rover options:')
  .option('positionX', {
    alias: 'x',
    describe: 'initial X landing rover position',
  })
  .option('positionY', {
    alias: 'y',
    describe: 'initial Y landing rover position',
  })
  .option('direction', {
    alias: 'd',
    describe: 'initial landing rover direction',
  })
  .option('commands', {
    alias: 'c',
    describe: 'provide an array of commands for the rover to execute',
    type: 'array',
  })
  .option('map-size', {
    describe: 'specify wheter the map is large "L" (10x10) or small "S" (5x5)',
  })
  .demandOption(['x', 'y', 'direction'], 'Please provide the initial rover' +
    ' position and direction for the rover to start')
  .help()
  .wrap(72)
  .argv;

const direction = Direction.from(argv.d);
const initialPosition = new Position({ x: argv.x, y: argv.y, d: direction });

const mapModule = new MapModule();
const positionModule = new PositionModule();

const roverParts = { mapModule, positionModule };
const dependencies = { console };

console.log('~~~~~ ROVER INITIALIZATION ~~~~~\n');

const rover = new Rover(initialPosition, roverParts, dependencies);

rover.run(argv.c)
  .then(() => {
    console.log('\n~~~~~ ROVER TERMINATED ~~~~~\n');
  });

