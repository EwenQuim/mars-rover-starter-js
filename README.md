# Mars Rover 

Your goal is to develop an api that controls a rover around the Mars planet.

The previous team work their best on the rover program before they went out 
on burnout leave. They were competent developers and the management is quite 
confident in their skills. But as the time is lacking before launch you have 
to compete the program.

## Already implemented features

The rover already work basically : 

 - you initialize the landing point (x, y) of the rover and it's direction
 (N, S, E, W) it is facing at start.
 - you also give at start the commands the rover will exectute.
 - then the rover moves sequentially following your orders, returning back the 
 position at every steps. Moving from one position to another takes around 2s 
 with the current motors.
 
### Acceptable commands

The rover receives a character array of commands:

 - commands that move the rover forward/backward (f, b).
 - commands that turn the rover left/right (l, r).

### Acceptable moves

The planet is a sphere of 10x10 'positions' and as such the map wraps over from 
one edge to one another. 

Example of the planet map representation:

```
   0 1 2 3 4 5 6 7 8 9
 +---------------------+
0|                     |
1|   ^                 |
2|                     |
3|                     |
4|                     |
5|                     |
6|                     |
7|                     |
8|                     |
9|                     |
 +---------------------+
```
The mars rover is in the example at the (x:2, y:2) position and facing North.

## Additional features to implement

That is what actually exists on the rover. But as the other teams are making 
progress too, more things are to be implemented on the rover: 

- For more flexibilty and reusability, the rover should also be able to do 
other missions, especially run on smaller celestial bodies such as 
asteroids. (map 5x5)

- The motor division added the posibility to have fast motors that move 
forward faster. If the rover is a `fast-rover`, a new move is available `ff`
 for fast-forward. The rover then takes only 0,5s to go to the next position.

- If we are to believe the lastest data there are mountains on Mars, as such 
the 1x8, 2x4, 2x5, 4x2, 7x9, 8x10 positions are not accessible for the rover
. If the rover should detect the absence of obstacles on the position it 
tries to access at every step. If it detects an obstacle, it should warn 
Houston and stop.

- Central command wants for certain missions a closer view on the rover
 mouvments and as such wants a moving zoom view on the rover: only a 3x3 
view around the rover. (example below)

```
   1 2 3
 +-------+
4|       |
5|   >   | Direction: EST
6|       |
 +-------+
```

- The mars planet in winter has to much carbonic snow on it's poles. If it
 is the winter, the rover cannot cross everywhere, only on the westernmost 
 and the easternmost positons (only crossable on the y axis on the 1st & 
 10th column).
 
- The wheel division improved the rover mobility that can now execute a half 
turn. If the rover is an `agile-rover` that it can execute half turns (hl, lr).

The planning is tight, and might change at the lastest notice. Always refer 
to your P.O. on what the priority is and on the expected behaviour.

Best of luck.

## Getting Started

### Install dependencies

Before starting to code, don't forget to install all dependencies. Go to the root directory (where the package.json is located) and run:

```shell
npm install
```

### Writing code

When you'll write some code, you must place source code files in the directory `lib` and test files in the directory `test`.

### Tools
- Testing framework: [Mocha](https://mochajs.org/)
- Assertion library: [Chai](http://www.chaijs.com/)
- For spies, stubs and mocks: [Sinon.js](http://sinonjs.org/)

### Running tests

Run all tests once:

```shell
npm test
```

Automatically re-run all tests once whenever you change (save) a file:

```shell
npm run test:watch
```

### Run CLI Rover

To run the project:

```shell
npm start -- -x 1 -y 2 -d N -c f l f f
```
(here with a start at x:1, y:2, direction:North, commands: forward then left, then forward twice again)
