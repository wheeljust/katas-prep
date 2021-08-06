/*
Kata 20 - Taxicab Geometry; use given direction to determine number of blocks North/East of starting location
*/

const blocksAway = function(directions) {
  const position = [0, 0];
  let positionObj = {
    east: 0,
    north: 0
  };

  let turnIndex = 2;
  let blocksIndex = 1;
  let orientation;

  //Establish the initial direction, if the first turn is right then we're going East, if first turn is left then we're going North.
  (directions[0] === "left") ? orientation = 90 : orientation = 0;

  for (let i = 0; i < directions.length; i += 2) {
    //Note: directions are established as -> 0 is East, 180 is West, 90 is North & 270 is South
    if (orientation === 0) {
      position[0] += directions[blocksIndex];
    } else if (orientation === 180) {
      position[0] -= directions[blocksIndex];
    } else if (orientation === 90) {
      position[1] += directions[blocksIndex];
    } else if (orientation === 270) {
      position[1] -= directions[blocksIndex];
    }

    //Check the next turn in the array and update orientation of taxi
    if (directions[turnIndex] === 'right') {
      orientation -= 90;
    } else if (directions[turnIndex] === 'left') {
      orientation += 90;
    }

    //These conditionals will correct the orientation so that it is always one of the 4 directions between 0 and 360 degrees.
    if (orientation < 0) {
      orientation += 360;
    } else if (orientation > 360) {
      orientation -= 360;
    }

    blocksIndex += 2;
    turnIndex += 2;
  }

  positionObj.east = position[0];
  positionObj.north = position[1];
  return positionObj;
};


//Test Cases
console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));