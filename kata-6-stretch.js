const repeatNumbers = function (data) {
  let repeated = [];
  for (let i = 0; i < data.length; i++) {
    let temp = "";
    for (let repeat = 0; repeat < data[i][1]; repeat++) {
      temp += data[i][0];
    }
    repeated.push(temp);
  }
  return repeated;
};

// testing
console.log(repeatNumbers([[1, 10]])); // 1111111111
console.log(repeatNumbers([[1, 2], [2, 3]])); // 11, 222
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]])); // 10101010, 343434343434, 9292