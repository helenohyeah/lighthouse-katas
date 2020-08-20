const calculateChange = function (total, cash) {
  let change = {};
  let tempDiff = cash - total;
  if (tempDiff / 2000 >= 1) {
    change.twentyDollar = parseInt(tempDiff / 2000, 10);
    tempDiff -= change.twentyDollar * 2000;
  } 
  if (tempDiff / 1000 >= 1) {
    change.tenDollar = parseInt(tempDiff / 1000, 10);
    tempDiff -= change.tenDollar * 1000;
  } 
  if (tempDiff / 500 >= 1) {
    change.fiveDollar = parseInt(tempDiff / 500, 10);
    tempDiff -= change.fiveDollar * 500;
  } 
  if (tempDiff / 200 >= 1) {
    change.twoDollar = parseInt(tempDiff / 200, 10);
    tempDiff -= change.twoDollar * 200;
  } 
  if (tempDiff / 100 >= 1) {
    change.oneDollar = parseInt(tempDiff / 100, 10);
    tempDiff -= change.oneDollar * 100;
  } 
  if (tempDiff / 25 >= 1) {
    change.quarter = parseInt(tempDiff / 25, 10);
    tempDiff -= change.quarter * 25;
  } 
  if (tempDiff / 10 >= 1) {
    change.dime = parseInt(tempDiff / 10, 10);
    tempDiff -= change.dime * 10;
  } 
  if (tempDiff / 5 >= 1) {
    change.nickle = parseInt(tempDiff / 5, 10);
    tempDiff -= change.nickle * 5;
  } 
  if (tempDiff / 1 >= 1) {
    change.penny = tempDiff;
  }
  return change;
};

// Testing

console.log(calculateChange(1787, 2000)); // { twoDollar: 1, dime: 1, penny: 3 }
console.log(calculateChange(2623, 4000)); // { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
console.log(calculateChange(501, 1000)); // { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
console.log(calculateChange(1000, 3505)); // { twentyDollar: 1, fiveDollar: 1, nickle: 1 }