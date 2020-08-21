// given a url encoded string of key-value pairs,turn it into a JavaScript object
// %20 represents a space character.
// Key-value pairs are represented using an = character: key=value
// Multiple key-value pairs are separated using a & character: key1=value1&key2=value2

const urlDecode = function (text) {
  let obj = {};
  let arr = text.replace(/%20/g, ' ').split('&');
  arr.forEach((e) => {
    let index = (e.search('='));
    obj[e.slice(0, index)] = e.slice(index + 1);
  });
  return obj;
};

// Testing
console.log(urlDecode("duck=rubber")); // {duck: "rubber"}
console.log(urlDecode("bootcamp=Lighthouse%20Labs")); // {bootcamp: "Lighthouse Labs"}
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain")); // {city: "Vancouver", weather: "lots of rain"}
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather); // "lots of rain"