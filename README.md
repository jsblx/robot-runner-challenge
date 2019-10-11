# Robot Challenge

**Joseph Ian Balucan**
Developer Lead
jibalucan@gmail.com
+639177151984

## How to Run

Call on run then include, as last the last parameter, the path to the file containing the commands to be processed as input.

Command Line:
```bash
node run <filepath>
```
Example:
```bash
node run ./cmd-files/030_fulltraverse_sw.txt
```
- Implemented using nodejs
- Test framework is jest
- Includes samp

## Implementation Details

### Classes

##### *Board* 
- Initializes with the board's size
- Responsible for managing pieces inside the board
- Responsible for determining if a particular placement of a board piece is out of bounds
- Responsible for determining if placement of a board piece potentially results in collision (should requirements extend to having obstacles on the board)

##### *BoardPiece* 
- Initializes with a callback function used for managing piece movement, as well as the piece's initial coordinates, if provided
- Responsible for managing the coordinates of the board piece
- Provides an interface for piece movement (moveXXXX where XXXX is the direction of movement, e.g. moveNorth())

##### *Robot*
- Extends BoardPiece
- Manages direction as well methods for moving, turning, and reporting
- Responsible for detecting if robot has been placed or not

##### *IO*
- Manages outputs and debugging
- By default, output will be onto console, but can be extended to output elsewhere if necessary

##### *RobotRunner*
- Manages declaration and initialization of necessary components
- Manages serializing the sending of commands to the robot
