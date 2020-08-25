// determine how far away a destination is based on directions given
// taxi driver given a list of directions (left or right) and how many blocks to drive for
// left = 90 degree anti-clockwise turn, right = 90 degree clockwise turn

const blocksAway = function (directions) {
  let directionFacing;
  let location = { east: 0, north: 0 };
  if (directions[0] === 'left') {
    directionFacing = 90;
  } else if (directions[0] === 'right') {
    directionFacing = 0;
  }
  for (direction of directions) {
    if (typeof direction === 'string') {
      directionFacing = determineDirection(directionFacing, direction);
    } else {
      switch (directionFacing) {
        case 0:
          location.north += direction;
          break;
        case 90:
          location.east += direction;
          break;
        case 180:
          location.north -= direction;
          break;
        case 270:
          location.east -= direction;
          break;
      }
    }
  }
  return location;
};

function determineDirection(directionFacing, direction) {
  if (direction === 'right') {
    return (directionFacing === 270) ? directionFacing = 0 : directionFacing += 90;
  } else if (direction === 'left') {
    return (directionFacing === 0) ? directionFacing = 270 : directionFacing -= 90;
  }
}

// Testing
console.log(blocksAway(["right", 2, "left", 3, "left", 1])); // {east: 1, north: 3}
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1])); // {east: 3, north: 3}
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1])); // {east: 0, north: 0}
