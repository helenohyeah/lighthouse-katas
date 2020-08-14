// track which parking spots are available as cars enters
// three vehicle types regular (R), small (R or S), motocycles (R, S, or M)
// upper-case means available, lower-case means uavailable
// return coordinate of the spot as [X, Y]

const whereCanIPark = function (spots, vehicle) {
  let parkingSpot = null;
  for (let row = 0; row < spots.length; row++) {
    for (let col = 0; col < spots[row].length; col++) {
      if (vehicle === "regular" && spots[col][row] === "R") {
        return parkingSpot = [col, row];
      } else if (vehicle === "small" && (spots[row][col] === "R" || spots[row][col] === "S")) {
        return parkingSpot = [col, row];
      } else if (vehicle === "motorcycle" && (spots[row][col] === "R" || spots[row][col] === "S" || spots[row][col] === "M")) {
        return parkingSpot = [col, row];
      }
    }
  }
  if (parkingSpot === null) {
    return parkingSpot = false;
  }
};

// testing
console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
)); // [4, 0]

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
)); // [false]

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
)); // [3, 1]